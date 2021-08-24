const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const decodeToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { signToken, decodeToken };
