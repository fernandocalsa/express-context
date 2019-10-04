const User = require("../models/user");

const getUsers = (req, res) => {
  const { user: currentUser } = req.context;
  
  const users = User.find(currentUser.company);
  res.json({
    users
  })
};

module.exports = {
  getUsers
};
