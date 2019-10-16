const jwt = require("jsonwebtoken");
const secret = require("../config/secrets.js");

module.exports = function getJwt(user) {
  const payload = {
    subject: user.id,
    email: user.email,
    jwtId: 1
  };
  const options = {
    expiresIn: "1 week"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
};
