module.exports = async (req, res, next) => {
  const authorization = req.get('Authorization');
  if (!authorization) {
    next('No Authorization header');
  }
  let userId;
  try {
    const authDecoded = JSON.parse(Buffer.from(authorization, 'base64').toString('ascii'));
    userId = authDecoded.userId;
  } catch(e) {
    return next({
      status: 401,
      msg: 'Error parsing authorization'
    });
  }
  req.auth = {
    userId
  };
  next();
};
