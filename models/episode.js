"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Episode.belongsTo(models.Anime, { foreignKey: "animeId" });
    }
  }
  Episode.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "title required" },
        },
      },
      videoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "video required" },
          isUrl: { msg: "input must be url" },
        },
      },
      animeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "animeId required" },
          isNumeric: { msg: "Input must be number" },
          min: {
            args: [1],
            msg: "Minimal input is 1",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Episode",
    }
  );
  return Episode;
};
