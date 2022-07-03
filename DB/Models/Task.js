import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
});

export default mongoose.models.Task || mongoose.model("Task", taskSchema);;