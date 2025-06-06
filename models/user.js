const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: Number,
    name: String,
    email: String,
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("user", userSchema);
