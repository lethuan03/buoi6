const express = require("express");
const { login, resetPassword, changePassword } = require("../controllers/authController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.get("/resetPassword/:id", authMiddleware, isAdmin, resetPassword);
router.post("/changePassword", authMiddleware, changePassword);

module.exports = router;
