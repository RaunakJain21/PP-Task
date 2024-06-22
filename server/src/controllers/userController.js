// const { createUser, findUserByEmail } = require('../services/userService');
const User = require('../models/User');

const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword,phone } = req.body;
    if(password===confirmPassword)
      {

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = await createUser({ name, email, password ,phone});
    res.status(201).json(user);
  }
  else {
    res.status(200).json({
      message:"Password doesn't match",
    });
  }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signup,
};
