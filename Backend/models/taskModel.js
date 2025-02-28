const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Task cannot be empty"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Task cannot be empty"],
    trim: true,
  },
  delete: {
    type: Boolean,
    default: false,
  },
  edit: {
    type: Boolean,
    default: false,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select:false,//always want to hide when querying via select
  },
  option: {
    type: String,
    enum: ['low', 'medium', 'high'], // Only allow these values
    required: true, // Optional: make it a required field
    default:"low"
  }
});

const taskModel = new mongoose.model("Task", taskSchema);

module.exports = taskModel;
