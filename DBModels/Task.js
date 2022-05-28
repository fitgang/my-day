import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
});

export default mongoose.model("Task", taskSchema);