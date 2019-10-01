const USERS = require('../data/user');

const getUsers = (req, res) => {
  const { user: currentUser } = req.context;
  
  const users = USERS.filter(user => user.company === currentUser.company);
  res.json({
    users
  })
};

module.exports = {
  getUsers
};
