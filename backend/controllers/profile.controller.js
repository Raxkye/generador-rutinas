const Profile = require('../models/profile.model');

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    let profile = await Profile.findOne({ userId });

    if (!profile) {
      profile = new Profile({ userId });
    }

    profile.interests = req.body.interests || profile.interests;
    profile.goals = req.body.goals || profile.goals;
    profile.disponibilidad = req.body.disponibilidad || profile.disponibilidad;

    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el perfil" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) return res.status(404).json({ message: "Perfil no encontrado" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener perfil" });
  }
};
