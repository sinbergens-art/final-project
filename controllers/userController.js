const User = require("../models/User");

async function getProfile(req, res, next) {
  try {
    const user = await User.findById(req.userId).select("name email createdAt updatedAt");
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}

async function updateProfile(req, res, next) {
  try {
    const { name } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { name },
      { new: true, runValidators: true }
    ).select("name email createdAt updatedAt");

    if (!user) return res.status(404).json({ error: "user not found" });

    return res.status(200).json({ message: "profile updated", user });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProfile, updateProfile };