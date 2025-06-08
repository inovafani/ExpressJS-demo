const UserService = require("../services/user.service");

exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    const status = error.message.includes("exists") ? 409 : 500;
    res.status(status).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updated = await UserService.updateUser(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User updated", user: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await UserService.deleteUser(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted", user: deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
