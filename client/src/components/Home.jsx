/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={isAnimating ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-8xl mb-16 flex flex-col gap-4">
          <span className="text-7xl">Welcome to the</span>{" "}
          <span className="font-medium">Cron's Task Scheduler App</span>
        </div>
        <Link
          onClick={handleClick}
          to={"/createTask"}
          className="px-12 py-3 font-medium text-lg bg-blue-600 rounded-full text-white mt-10 hover:bg-blue-700 transition"
        >
          Start
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
