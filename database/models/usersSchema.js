import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    fullName: { type: String, require: true },
    userName: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    profilePic: { type: String, default: "" },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

UserSchema.set("toJSON", {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
