import mongoose, { Schema, Document } from "mongoose";

interface StackDocument extends Document {
  name: string;
}

const stackSchema = new Schema<StackDocument>({
  name: { type: String, required: true, unique: true },
});

const Stack = mongoose.model<StackDocument>("Stack", stackSchema);

export { Stack };
