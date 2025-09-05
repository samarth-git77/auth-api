const User = require("../models/User");

// @desc Get logged-in user profile
// @route GET /api/users/profile
exports.getProfile = async (req, res) => {
  res.json(req.user);
};

// @desc Get all users (Admin only)
// @route GET /api/users
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// @desc Delete user (Admin only)
// @route DELETE /api/users/:id
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
