import express from "express";
import { tasksController } from "../controller/taskControllers.js";

const taskRoutes = express.Router();

taskRoutes.post("/createTask", tasksController.createTask);

export default taskRoutes;
