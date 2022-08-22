import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true, minlength: 2, maxlength: 15 },
  lastname: { type: String, required: true, minlength: 2, maxlength: 15 },
  useremail: { type: String, required: true },
  password: { type: String, required: true, maxlength: 12, minlength: 8 },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
