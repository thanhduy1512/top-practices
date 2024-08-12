import express from "express";
import Post from "../models/Post";

const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
  try {
    const { title, content, author, stacks, categories } = req.body;
    const newPost = new Post({ title, content, author, stacks, categories });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get paginated posts
// Get a post with votes, including upvote and downvote counts
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "username email") // Populate author details
      .populate("votes.userId", "username email"); // Populate vote user details

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Count upvotes and downvotes
    const upvotes = post.votes.filter(
      (vote) => vote.voteType === "upvote"
    ).length;
    const downvotes = post.votes.filter(
      (vote) => vote.voteType === "downvote"
    ).length;

    res.json({
      ...post.toObject(), // Convert mongoose document to plain object
      upvotes,
      downvotes,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get paginated posts
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);

    if (
      isNaN(pageNumber) ||
      isNaN(pageSize) ||
      pageNumber < 1 ||
      pageSize < 1
    ) {
      return res.status(400).json({ message: "Invalid page or limit" });
    }

    const skip = (pageNumber - 1) * pageSize;

    // Fetch posts with pagination
    const posts = await Post.find()
      .skip(skip)
      .limit(pageSize)
      .populate("author", "username email") // Populate author details
      .populate("votes.userId", "username email"); // Populate vote user details

    // Count total number of posts
    const totalPosts = await Post.countDocuments();

    // Optional: Calculate upvote/downvote counts for each post
    const postsWithVotes = await Promise.all(
      posts.map(async (post) => {
        const upvotes = post.votes.filter(
          (vote) => vote.voteType === "upvote"
        ).length;
        const downvotes = post.votes.filter(
          (vote) => vote.voteType === "downvote"
        ).length;
        return {
          ...post.toObject(),
          upvotes,
          downvotes,
        };
      })
    );

    console.log(postsWithVotes);

    res.json({
      posts: postsWithVotes,
      totalPosts,
      totalPages: Math.ceil(totalPosts / pageSize),
      currentPage: pageNumber,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Add other routes like PUT, DELETE

export default router;
