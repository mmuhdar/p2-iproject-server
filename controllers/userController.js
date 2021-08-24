const { User } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const result = await User.create({
        name,
        email,
        password
      });
      res.status(201).json({ id: result.id, email: result.email });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({
        where: { email }
      });
      if (!foundUser) {
        throw { name: "Unauthorized" };
      } else {
        const compare = checkPassword(password, foundUser.password);
        if (!compare) {
          throw { name: "Unauthorized" };
        } else {
          const payload = {
            id: foundUser.id,
            email: foundUser.email
          };
          const access_token = signToken(payload);
          res.status(200).json({ access_token });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
