import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import CreateTask from "../components/CreateTask";
import ShowTasks from "../components/ShowTasks";
import ShowLogs from "../components/ShowLogs";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/showTasks" element={<ShowTasks />} />
        <Route path="/showLogs" element={<ShowLogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
