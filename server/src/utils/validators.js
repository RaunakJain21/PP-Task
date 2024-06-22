const { body } = require('express-validator');

const userValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ];
};

module.exports = {
  userValidationRules,
};
