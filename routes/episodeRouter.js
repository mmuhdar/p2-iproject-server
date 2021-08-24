const router = require("express").Router();
const Controller = require("../controllers/episodeController");
const { authorize } = require("../middlewares/auth");

router.post("/:animeId", authorize, Controller.postEpisode);
router.delete("/:episodeId", authorize, Controller.deleteEpisode);

module.exports = router;
