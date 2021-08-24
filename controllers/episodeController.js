const { Episode, Anime } = require("../models");

class Controller {
  static async postEpisode(req, res, next) {
    try {
      const id = +req.params.animeId;
      const { title, videoUrl } = req.body;
      if (!id) {
        throw { name: "InvalidParams" };
      } else {
        const anime = await Anime.findByPk(id);
        if (!anime) {
          throw { name: "NotFound" };
        } else {
          await Episode.create({
            title,
            videoUrl,
            animeId: anime.id
          });
          res.status(201).json({
            message: `Success add episode of ${anime.title}`
          });
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteEpisode(req, res, next) {
    try {
      const id = +req.params.episodeId;
      if (!id) {
        throw { name: "InvalidParams" };
      } else {
        const episode = await Episode.findByPk(id);
        if (!episode) {
          throw { name: "NotFound" };
        } else {
          await Episode.destroy({
            where: { id }
          });
          res.status(200).json({ message: "Success delete episode" });
        }
      }
    } catch (err) {}
  }
}

module.exports = Controller;
