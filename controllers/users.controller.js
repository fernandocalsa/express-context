const getUsers = (req, res) => {
  const { User } = req.context.models;
  
  const users = User.find();
  res.json({
    users
  })
};

module.exports = {
  getUsers
};
