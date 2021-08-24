const router = require("express").Router();
const animeRouter = require("./animeRouter");
const episodeRouter = require("./episodeRouter");
const userRouter = require("./userRouter");
const errorHandler = require("../middlewares/errorHandler");
const { authenticate } = require("../middlewares/auth");

router.use("/", userRouter);
router.use("/animes", authenticate, animeRouter);
router.use("/episodes", authenticate, episodeRouter);
router.use(errorHandler);

module.exports = router;
