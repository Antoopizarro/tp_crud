// ************ Require's ************
const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

// ************ Controller Require ************
const userController = require('../controllers/userController');
const userValidations = require('../validations/userValidation');

router
    .get('/register', userController.register)
    .post('/register', userController.processRegister, userValidations)
    
module.exports = router;