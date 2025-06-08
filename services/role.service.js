const Role = require("../models/role.model");

exports.getAllRoles = () => {
  return Role.find();
};

exports.getRoleById = (id) => {
  return Role.findById(id);
};

exports.createRole = (data) => {
  return Role.create(data);
};
