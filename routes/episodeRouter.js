const router = require("express").Router();
const Controller = require("../controllers/episodeController");
const { authorize, authenticate } = require("../middlewares/auth");

router.post("/:animeId", Controller.postEpisode);
router.delete("/:episodeId", authenticate, authorize, Controller.deleteEpisode);

module.exports = router;
