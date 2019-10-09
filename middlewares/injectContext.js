const projectFactory = require("../models/project");
const userFactory = require("../models/user");

module.exports = (req, res, next) => {
  const Project = projectFactory();
  Project.prototype._context = req.context;
  Project._context = req.context;

  const User = userFactory();
  User.prototype._context = req.context;
  User._context = req.context;

  req.context.models = {
    Project,
    User,
  };
  next()
};
