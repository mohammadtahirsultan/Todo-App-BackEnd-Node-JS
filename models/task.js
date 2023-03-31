import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 
  title: {
    type:String,
    require:true
  },
  description: {
    type:String,
    require:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
  },
  isCompleted:{
    type:Boolean,
    default:false
 }
});
const Task = mongoose.model("Todo", userSchema);

export default Task
