import { useState } from "react";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    dueDate: "",
    repeat: false,
    repeatCount: "",
    repeatInterval: "",
    repeatUnit: "",
    sendEmailNotification: false,
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10 animate-fadeIn">
      <h1 className="text-white text-3xl font-bold mb-6 text-center animate-bounce">
        Task Manager
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Name */}
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">Task Name</label>
          <input
            type="text"
            name="taskName"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={formData.taskName}
            onChange={handleChange}
            placeholder="Enter task name"
            required
          />
        </div>

        {/* Task Description */}
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">
            Task Description
          </label>
          <textarea
            name="taskDescription"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="3"
          />
        </div>

        {/* Due Date */}
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">Due Date</label>
          <input
            type="date"
            name="dueDate"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Repeat Task */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="repeat"
            className="h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-600"
            checked={formData.repeat}
            onChange={handleChange}
          />
          <label className="text-white font-medium">Repeat Task</label>
        </div>

        {formData.repeat && (
          <>
            {/* Repeat Count */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">
                Repeat Count
              </label>
              <input
                type="number"
                name="repeatCount"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                value={formData.repeatCount}
                onChange={handleChange}
                placeholder="Enter number of repetitions"
              />
            </div>

            {/* Repeat Interval */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">
                Repeat Interval
              </label>
              <input
                type="number"
                name="repeatInterval"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                value={formData.repeatInterval}
                onChange={handleChange}
                placeholder="Enter interval"
              />
            </div>

            {/* Repeat Unit */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Repeat Unit</label>
              <select
                name="repeatUnit"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                value={formData.repeatUnit}
                onChange={handleChange}
              >
                <option value="">Select unit</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
              </select>
            </div>
          </>
        )}

        {/* Email Notification */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="sendEmailNotification"
            className="h-5 w-5 text-teal-600 focus:ring-2 focus:ring-teal-600"
            checked={formData.sendEmailNotification}
            onChange={handleChange}
          />
          <label className="text-white font-medium">
            Send Email Notification
          </label>
        </div>

        {formData.sendEmailNotification && (
          <div className="flex flex-col">
            <label className="text-white font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Enter email address"
              required={formData.sendEmailNotification}
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-transform transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
