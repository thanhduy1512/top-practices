import mongoose, { Schema, Document } from "mongoose";

interface IVote {
  userId: mongoose.Schema.Types.ObjectId; // Reference to User
  voteType: "upvote" | "downvote"; // Define the type of vote
}

interface IPost extends Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId; // Reference to User
  stacks: string[];
  categories: string[];
  votes: IVote[]; // Embedded votes
  createdDate: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  stacks: { type: [String], default: [] },
  categories: { type: [String], default: [] },
  votes: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      voteType: { type: String, enum: ["upvote", "downvote"], required: true },
    },
  ],
  createdDate: { type: Date, default: Date.now },
});

const Post = mongoose.model<IPost>("Post", PostSchema);

export default Post;
