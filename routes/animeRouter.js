const router = require("express").Router();
const Controller = require("../controllers/animeController");
const { authorize, authenticate } = require("../middlewares/auth");

router.get("/search", authenticate, authorize, Controller.searchAnime);
router.get("/", authenticate, Controller.findAllAnime);
router.post("/:id", authenticate, authorize, Controller.postAnime);
router.get("/:id", authenticate, Controller.getAnimeId);
router.patch("/:id", authenticate, authorize, Controller.updateAnime);
router.delete("/:id", authenticate, authorize, Controller.deleteAnime);

module.exports = router;
