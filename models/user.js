import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type:String,
    unique:true,
    required:true,
  },
  password: {
    type:String,
    required:true,
    select:false
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});
const User = mongoose.model("User", userSchema);

export default User
