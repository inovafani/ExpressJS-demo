const UserService = require("../services/user.service");

const UserController = {
  getUsers: async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json({ message: "User created", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.updateUser(id, req.body);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json({ message: "User updated", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.deleteUser(id);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json({ message: "User deleted", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
