const USERS = require('../data/user');

const getUsers = (req, res) => {
  const currentUser = USERS.find(user => user.id === req.auth.userId);
  
  const users = USERS.filter(user => user.company === currentUser.company);
  res.json({
    users
  })
};

module.exports = {
  getUsers
};
