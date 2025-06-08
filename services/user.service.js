const User = require("../models/user.model");

const UserService = {
  getAllUsers: async () => {
    return await User.find().populate("role");
  },

  createUser: async (data) => {
    const newUser = new User(data);
    return await newUser.save();
  },

  updateUser: async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  deleteUser: async (id) => {
    return await User.findByIdAndDelete(id);
  },
};

module.exports = UserService;
