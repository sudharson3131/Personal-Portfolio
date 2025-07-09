import TripAdvisor from "./Projects/TripAdvisor";
import NostraCard from "./Projects/Nostra";
import UdemyCard from "./Projects/Udemy";
import StudentList from "./Projects/StudentList";
import MiniReactCard from "./Projects/MiniReact";
import LoginCard from "./Projects/LoginApp";
import FruitList from "./Projects/FruitList";
import ActodoCard from "./Projects/Actodo";
import WeatherCard from "./Projects/WeatherApp";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All project components in an array
const allProjects = [
  <TripAdvisor key="tripadvisor" />,
  <NostraCard key="nostra" />,
  <UdemyCard key="udemy" />,
  <StudentList key="studentlist" />,
  <MiniReactCard key="minireact" />,
  <LoginCard key="logincard" />,
  <FruitList key="fruitlist" />,
  <ActodoCard key="actodocard" />,
  <WeatherCard key="weathercard" />,
];

export default function Projects() {
  const cardsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onPrevious = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const onNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = allProjects.slice(startIndex, endIndex);

  return (
    <section className="text-center mt-16 px-4 md:px-8" id="projects">
      <h2 className="text-4xl font-bold mb-8 text-primary">Projects</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          layout
        >
          {visibleCards}
        </motion.div>
      </AnimatePresence>

      <div className="join grid grid-cols-2 w-48 mx-auto mt-8">
        <button
          className="join-item btn btn-outline btn-sm md:btn-md"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="join-item btn btn-outline btn-sm md:btn-md"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
