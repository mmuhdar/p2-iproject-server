"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "name required" }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "email required" },
          isEmail: { msg: "Input must be email" }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "password required" },
          len: {
            args: [5],
            msg: "Minimal character is 5"
          }
        }
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "customer",
        validate: {
          notEmpty: { msg: "roke required" }
        }
      }
    },
    {
      hooks: {
        beforeCreate: user => {
          user.password = hashPassword(user.password);
        }
      },
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
