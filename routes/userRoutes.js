const express = require("express");
const { getProfile, getAllUsers, deleteUser } = require("../controllers/userController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", protect, getProfile); // only logged in user
router.get("/", protect, adminOnly, getAllUsers); // admin only
router.delete("/:id", protect, adminOnly, deleteUser); // admin only

module.exports = router;
