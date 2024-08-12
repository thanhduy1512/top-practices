import express from "express";
import Post from "../models/Post";

const router = express.Router();

// Add or update a vote
router.post("/", async (req, res) => {
  try {
    const { postId, userId, voteType } = req.body;

    // Validate input
    if (
      !postId ||
      !userId ||
      !voteType ||
      !["upvote", "downvote"].includes(voteType)
    ) {
      return res.status(400).json({ message: "Invalid input" });
    }

    // Find the post
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user has already voted on this post
    const existingVoteIndex = post.votes.findIndex(
      (vote) => vote.userId.toString() === userId
    );

    if (existingVoteIndex > -1) {
      // Update existing vote
      post.votes[existingVoteIndex].voteType = voteType;
    } else {
      // Add new vote
      post.votes.push({ userId, voteType });
    }

    // Save the post with the updated votes
    await post.save();
    res.status(200).json(post);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
