const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');

const generate_token = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const register_user = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: 'Faltan campos' });

  const user_exists = await User.findOne({ email });
  if (user_exists)
    return res.status(400).json({ message: 'El usuario ya existe' });

  const hashed_password = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed_password });

  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generate_token(user.id),
  });
};

const login_user = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generate_token(user.id),
    });
  } else {
    res.status(400).json({ message: 'Credenciales inválidas' });
  }
};

module.exports = { register_user, login_user };
