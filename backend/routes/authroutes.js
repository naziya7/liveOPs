const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes related to user authentication
router.post('/register',(req,res) => {
    authController.register
});
router.post('/login',(req,res) => { 
    authController.login
});
router.post('/logout',(req,res) => { 
    authController.logout
});

module.exports = router;
