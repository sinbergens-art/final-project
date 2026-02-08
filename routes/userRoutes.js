const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getProfile, updateProfile } = require("../controllers/userController");
const { validateProfileUpdate } = require("../middleware/validate");

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, validateProfileUpdate, updateProfile);

module.exports = router;