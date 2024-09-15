import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
dotenv.config();

// making connection with database
mongoose
  .connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`)
  .then(() => console.log("Database connected Successfully..."))
  .catch((error) => console.log("Error connecting to MongoDB->>", error));

// routes
app.use("/", taskRoutes);
app.listen(port, () => {
  console.log("Server started on port 8080");
});
