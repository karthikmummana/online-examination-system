const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  } else {
    return res.status(403).json({
      message: 'Access forbidden: Administrator privileges required',
    });
  }
};

module.exports = { adminOnly };
