const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    priority: String,
    isComplete: Boolean,
    creationDate: String,
    completeDate: String,
    editing: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("todo", todoSchema);
