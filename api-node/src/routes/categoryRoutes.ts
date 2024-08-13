import express from "express";
import { Category } from "../models/Category";

const router = express.Router();

router.post("/category", async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
