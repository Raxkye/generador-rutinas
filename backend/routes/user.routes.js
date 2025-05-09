const express = require('express');
const { register_user, login_user } = require('../controllers/user_controller.js');

const router = express.Router();

router.post('/register', register_user);
router.post('/login', login_user);

module.exports = router;
