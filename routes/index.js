const router = require("express").Router();
const animeRouter = require("./animeRouter");
const episodeRouter = require("./episodeRouter");
const userRouter = require("./userRouter");
const errorHandler = require("../middlewares/errorHandler");

router.use("/", userRouter);
router.use("/animes", animeRouter);
router.use("/episodes", episodeRouter);
router.use(errorHandler);

module.exports = router;
