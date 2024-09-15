import { taskModel } from "../model/taskModel.js";

const createTask = async (req, res) => {
  try {
    const data = req.body;
    const response = await taskModel.create(data);
    console.log(response);

    return res.status(201).send({
      sucess: true,
      message: "Data successfully stored in Database.",
    });
  } catch (error) {
    console.log("Unable to store in database.", error);
    return res.send({
      sucess: false,
      message: "Unable to store in database",
    });
  }
};

export const tasksController = {
  createTask,
};
