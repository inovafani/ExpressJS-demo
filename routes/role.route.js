const express = require("express");
const router = express.Router();
const Role = require("../models/role.model");
const RoleController = require("../controllers/role.controller");

router.post("/", RoleController.getRoles);

module.exports = router;
