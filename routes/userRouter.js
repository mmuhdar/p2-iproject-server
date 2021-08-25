const router = require("express").Router();
const Controller = require("../controllers/userController");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/check-role/:id", Controller.checkRole);

module.exports = router;
