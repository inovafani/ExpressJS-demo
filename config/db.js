const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/Room")
    .then(() => console.log("berhasil"));
};

module.exports = connectDB;
