const router = require("express").Router();
const Controller = require("../controllers/animeController");
const { authorize } = require("../middlewares/auth");

router.get("/", Controller.findAllAnime);
router.get("/search", authorize, Controller.searchAnime);
router.post("/:id", authorize, Controller.postAnime);
router.patch("/:id", authorize, Controller.updateAnime);
router.delete("/:id", authorize, Controller.deleteAnime);

module.exports = router;
