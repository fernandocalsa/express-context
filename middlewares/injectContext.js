const projectFactory = require("../models/project");

module.exports = (req, res, next) => {
  const Project = projectFactory();
  Project.prototype._context = req.context;
  Project._context = req.context;
  req.context.models = { Project }
  next()
};
