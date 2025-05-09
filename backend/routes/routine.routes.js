const express = require('express');
const router = express.Router();
const { generateRoutine } = require('../controllers/routine.controller');
const protect = require('../middleware/authMiddleware');

router.post('/generate', protect, generateRoutine);

module.exports = router;
