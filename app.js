const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Room")
  .then(() => console.log("berhasil"));
// app.use(express.json());

const rootRouter = require("./routes/index");
app.use(express.json());
app.use("/", rootRouter);

app.listen(3000, () => {
  console.log("running");
});
