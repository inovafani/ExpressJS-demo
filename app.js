const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
// app.use(express.json());

app.use(express.json());
app.use("/roles", require("./routes/role.route"));

app.listen(3000, () => {
  console.log("running");
});
