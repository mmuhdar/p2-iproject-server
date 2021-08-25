const { Anime, Episode } = require("../models");
const { Op } = require("sequelize");
const jikan = require("../apis/jikan");

class Controller {
  static async findAllAnime(req, res, next) {
    try {
      const { page, title } = req.query;
      const limit = 12;
      const offset = page * limit - limit;
      if (!title) {
        const response = await Anime.findAndCountAll({
          include: [Episode],
          limit,
          offset,
        });
        const result = {
          totalItems: response.count,
          animes: response.rows,
          totalPages: Math.ceil(response.count / limit),
          currentPage: +page,
        };
        res.status(200).json(result);
      } else if (page && title) {
        const response = await Anime.findAndCountAll({
          include: [Episode],
          limit,
          offset,
          where: {
            title: { [Op.like]: `%${title}%` },
          },
        });
        const result = {
          totalItems: response.count,
          animes: response.rows,
          totalPages: Math.ceil(response.count / limit),
          currentPage: +page,
        };
        res.status(200).json(result);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getAnimeId(req, res, next) {
    try {
      const id = +req.params.id;
      const result = await Anime.findByPk(id, {
        include: [Episode],
      });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async searchAnime(req, res, next) {
    try {
      console.log(req.query);
      const { title } = req.query;
      const { data } = await jikan.get(`/search/anime?q=${title}&limit=12`);
      res.status(200).json(data.results);
    } catch (err) {
      next(err);
    }
  }

  static async postAnime(req, res, next) {
    try {
      const { title, type, episodes, image_url } = req.body;
      const mal_id = +req.params.id;
      if (!mal_id) {
        throw { name: "InvalidParams" };
      } else {
        const [anime, created] = await Anime.findOrCreate({
          where: { mal_id },
          defaults: {
            title,
            type,
            episodes,
            image_url,
            mal_id,
          },
        });
        res.status(201).json(anime);
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateAnime(req, res, next) {
    try {
      const id = +req.params.id;
      const { title, type, episodes } = req.body;
      if (!id) {
        throw { name: "InvalidParams" };
      } else {
        const anime = await Anime.findByPk(id);
        if (!anime) {
          throw { name: "NotFound" };
        } else {
          await Anime.update(
            {
              title,
              type,
              episodes,
            },
            { where: { id } }
          );
          res.status(200).json({ message: "Success update anime" });
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteAnime(req, res, next) {
    try {
      const id = +req.params.id;
      if (!id) {
        throw { name: "InvalidParams" };
      } else {
        const anime = await Anime.findByPk(id);
        if (!anime) {
          throw { name: "NotFound" };
        } else {
          await Anime.destroy({
            where: { id },
          });
          res.status(200).json({ message: `Success delete ${anime.title}` });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
