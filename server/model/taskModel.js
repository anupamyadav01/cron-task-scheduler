import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  repeat: {
    type: Boolean,
    required: true,
  },
  repeatCount: {
    type: Number,
    required: true,
  },
  repeatInterval: {
    type: String,
    required: true,
  },
  repeatUnit: {
    type: String,
    required: true,
  },
  sendEmailNotification: {
    type: Boolean,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
});

export const taskModel = mongoose.model("tasks", tasksSchema);
