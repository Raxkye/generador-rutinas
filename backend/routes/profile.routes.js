// backend/routes/profile.routes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, profileController.updateProfile);
router.get('/', protect, profileController.getProfile);

module.exports = router;
