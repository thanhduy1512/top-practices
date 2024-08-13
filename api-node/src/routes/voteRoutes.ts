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

// Handle voting on a post
router.post("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId, voteType } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Find an existing vote by the user on this post
    let existingVote = post.votes.find(
      (vote) => vote.userId.toString() === userId
    );

    if (existingVote) {
      if (existingVote.voteType === voteType) {
        // If the vote type is the same, remove the vote (toggle functionality)
        post.votes = post.votes.filter(
          (vote) => vote.userId.toString() !== userId
        );
        if (voteType === "upvote") {
          post.upvotes -= 1;
        } else if (voteType === "downvote") {
          post.downvotes -= 1;
        }
      } else {
        // If the vote type is different, update the vote
        if (voteType === "upvote") {
          post.upvotes += 1;
          post.downvotes -= 1;
        } else if (voteType === "downvote") {
          post.downvotes += 1;
          post.upvotes -= 1;
        }
        existingVote.voteType = voteType;
      }
    } else {
      // If no existing vote, create a new vote
      post.votes.push({ userId, voteType });
      if (voteType === "upvote") {
        post.upvotes += 1;
      } else if (voteType === "downvote") {
        post.downvotes += 1;
      }
    }

    // Update the score field
    post.score = post.upvotes - post.downvotes;

    await post.save();

    res.status(200).json({ message: "Vote recorded", post });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
