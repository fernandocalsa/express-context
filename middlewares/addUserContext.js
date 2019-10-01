const USERS = require('../data/user');

module.exports = (req, res, next) => {
  const currentUser = USERS.find(user => user.id === req.context.userId);
  if(!currentUser) {
    next({
      status: 401,
      msg: 'User not found'
    });
  }

  req.context.user = currentUser;
  next();
};
