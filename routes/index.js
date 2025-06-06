const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { _id, name, email } = req.body;

    // Cek kalau data dengan _id yang sama sudah ada
    const existingUser = await User.findOne({ _id });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this _id already exists" });
    }

    const newUser = new User({ _id, name, email });
    await newUser.save();

    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { _id, name, email } = req.body;
    const { id } = req.params;

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { name, email },
      { new: true } // biar hasil update dikembalikan
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted", user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
