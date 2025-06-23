const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

// route for health check
router.get('/health', (req, res) => {
  res.status(200).json({ message: 'Auth service is running' });
});

module.exports = router;
