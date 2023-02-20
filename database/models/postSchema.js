import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    userName: { type: String, require: true },
    content: { type: String, require: true },
  },
  { timestamps: true }
);
postSchema.index({ userName: "text" });

export default mongoose.models.Posts || mongoose.model("Posts", postSchema);
