import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, minlength: 2, maxlength: 15 },
  lastname: { type: String, required: true, minlength: 2, maxlength: 15 },
  useremail: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export default mongoose.models.User || mongoose.model("User", userSchema);
