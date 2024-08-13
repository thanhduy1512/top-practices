import express from "express";
import { Stack } from "../models/Stack";

const router = express.Router();

router.post("/stack", async (req, res) => {
  try {
    const { name } = req.body;
    const stack = new Stack({ name });
    await stack.save();
    res.status(201).json(stack);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
