import express from "express";
import User from "../models/User";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Add other routes like POST, PUT, DELETE

export default router;
