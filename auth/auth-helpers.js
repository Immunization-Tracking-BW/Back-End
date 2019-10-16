const jwt = require("jsonwebtoken");

module.exports = function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    jwtId: 1
  };
  const options = {
    expiresIn: "1 day"
  };
  return jwt.sign(payload, process.env.jwtSecret, options);
};
