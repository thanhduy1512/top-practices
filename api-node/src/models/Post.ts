import { Document, model, Schema } from "mongoose";

interface IVote {
  userId: Schema.Types.ObjectId; // Reference to User
  voteType: "upvote" | "downvote"; // Define the type of vote
}

interface IPost extends Document {
  title: string;
  content: string;
  author: Schema.Types.ObjectId; // Reference to User
  stacks: string[];
  categories: string[];
  votes: IVote[]; // Embedded votes
  createdDate: Date;
  upvotes: number;
  downvotes: number;
  score: number;
}

const PostSchema: Schema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  categories: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Category" },
      name: { type: String },
    },
  ],
  stacks: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Stack" },
      name: { type: String },
    },
  ],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
  createdDate: { type: Date, default: Date.now },
});

const Post = model<IPost>("Post", PostSchema);

export default Post;
