const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const USERS = [];
router.get("/", async (req, res) => {
	res.send(USERS);
});

router.post("/register", authController.register);
router.post("/login", authController.loginUser);

module.exports = router;
