"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Anime.hasMany(models.Episode, { foreignKey: "animeId" });
    }
  }
  Anime.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "title required" },
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "type required" },
        },
      },
      episodes: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: { msg: "type required" },
        },
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "image required" },
          isUrl: { msg: "input must be url" },
        },
      },
      mal_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNumeric: { msg: "Input must be number" },
          notEmpty: { msg: "mal id required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Anime",
    }
  );
  return Anime;
};
