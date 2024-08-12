import mongoose from "mongoose";
import User from "./models/User";
import Post from "./models/Post";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// MongoDB connection string
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);

    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});

    // Create users
    const user1 = new User({
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
    });

    const user2 = new User({
      username: "jane_doe",
      email: "jane@example.com",
      password: "password456",
    });

    const user3 = new User({
      username: "joe_doe",
      email: "joe@example.com",
      password: "password789",
    });

    await user1.save();
    await user2.save();

    // Create posts
    const post1 = new Post({
      title: "Introduction to React",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
      author: user1._id,
      stacks: ["react", "angular", "nest", "express"],
      categories: ["Programming", "Frontend"],
      votes: [
        {
          userId: user1._id,
          voteType: "upvote",
        },
        {
          userId: user2._id,
          voteType: "downvote",
        },
        {
          userId: user3._id,
          voteType: "upvote",
        },
      ],
    });

    const post2 = new Post({
      title: "Understanding MongoDB",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
      author: user2._id,
      stacks: ["dotnet", "mongodb", "mysql", "postgresql"],
      categories: ["Programming", "Backend"],
      votes: [
        {
          userId: user1._id,
          voteType: "upvote",
        },
        {
          userId: user2._id,
          voteType: "upvote",
        },
        {
          userId: user3._id,
          voteType: "upvote",
        },
      ],
    });

    const post3 = new Post({
      title: "Open Source Projects",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
      author: user2._id,
      stacks: ["vue", "astro", "svelte"],
      categories: ["Programming", "Backend"],
      votes: [
        {
          userId: user1._id,
          voteType: "downvote",
        },
        {
          userId: user2._id,
          voteType: "downvote",
        },
        {
          userId: user3._id,
          voteType: "downvote",
        },
      ],
    });

    const post4 = new Post({
      title: "Optimizing PostgreSQL",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus accusantium omnis tempora voluptates natus, consequuntur nulla earum adipisci. Pariatur cupiditate tempore molestiae assumenda ullam dolorum ea quas porro voluptatibus!",
      author: user1._id,
      stacks: ["vue", "astro", "svelte"],
      categories: ["Programming", "Backend"],
      votes: [
        {
          userId: user1._id,
          voteType: "upvote",
        },
        {
          userId: user2._id,
          voteType: "downvote",
        },
      ],
    });

    await post1.save();
    await post2.save();
    await post3.save();
    await post4.save();

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Run the seed function
seedDatabase();
