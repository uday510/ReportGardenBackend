
validateLoginRequest = (req, res, next) => {
  if (!req.body.userId) {
    return res.status(400).send({
      message: "Failed ! userId is not provided"
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: "Failed ! password is not provided"
    });
  }
  next();
}

module.exports = {
  validateLoginRequest: validateLoginRequest
}