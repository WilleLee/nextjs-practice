import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, maxlength: 15 },
  password: { type: String, required: true, maxlength: 12, minlength: 4 },
  useremail: { type: String, required: true, maxlength: 20 },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
