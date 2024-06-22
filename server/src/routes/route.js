const express = require('express');
const { signup } = require('../controllers/userController');
const { userValidationRules } = require('../utils/validators');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/signup', userValidationRules(), validateRequest, signup);

module.exports = router;
