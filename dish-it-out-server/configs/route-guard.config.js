module.exports = (req, res, next) => {
  // req.isAuthenticated() method is available thanks to passport

  req.isAuthenticated()
    ? next()
    : res.status(401).json({ message: "Login first!" });
};
