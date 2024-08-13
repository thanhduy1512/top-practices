import mongoose, { Schema, Document } from "mongoose";

interface CategoryDocument extends Document {
  name: string;
}

const categorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true, unique: true },
});

const Category = mongoose.model<CategoryDocument>("Category", categorySchema);

export { Category };
