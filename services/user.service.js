const User = require("../models/user.model");

exports.getAllUsers = () => {
  return User.find().populate("role"); // pastikan di model: `ref: "Role"`
};

exports.createUser = async (data) => {
  const existing = await User.findOne({ _id: data._id });
  if (existing) {
    throw new Error("User with this _id already exists");
  }
  const newUser = new User(data);
  return newUser.save();
};

exports.updateUser = (id, data) => {
  return User.findOneAndUpdate({ _id: id }, data, { new: true });
};

exports.deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};
