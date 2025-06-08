const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.route");

connectDB();
// app.use(express.json());

app.use(express.json());
app.use("/roles", require("./routes/role.route"));
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("running");
});
