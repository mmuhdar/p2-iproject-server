const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

const authenticate = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    console.log(access_token);
    if (!access_token) {
      throw { name: "InvalidToken" };
    } else {
      const user = decodeToken(access_token);
      const foundUser = await User.findByPk(user.id);
      if (!foundUser) {
        throw { name: "InvalidToken" };
      } else {
        req.user = {
          id: foundUser.id,
          email: foundUser.email,
          role: foundUser.role,
        };
        next();
      }
    }
  } catch (err) {
    next(err);
  }
};

const authorize = (req, res, next) => {
  try {
    const role = req.user.role;
    if (role === "admin") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { authenticate, authorize };
