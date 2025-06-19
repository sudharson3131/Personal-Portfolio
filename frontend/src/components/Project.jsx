
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



const allProjects = [
  <TripAdvisor key="tripadvisor" />,
  <NostraCard key="nostra" />,
  <UdemyCard key="udemy" />,
  <StudentList key="studentlist" />,
  <MiniReactCard key="minireact" />,
  <LoginCard key="LoginCard" />,
  <FruitList key="FruitList" />,
  <ActodoCard key="ActodoCard" />,
  <WeatherCard key="WeatherCard" />
];




export default function Project() {

  const cardsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / cardsPerPage)

  const [currentPage,setCurrentPage] = useState(1);

  function onPrevious(){
    setCurrentPage(function(prev){
      return Math.max(prev-1,1)
    })
  }
  function onNext(){
    setCurrentPage(function(prev){
      return Math.min(prev + 1, totalPages)
    })
  }
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const visibleCards = allProjects.slice(startIndex, endIndex);
  return (
    <div >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="flex gap-10 justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          layout 
        >
          {visibleCards}
        </motion.div>
      </AnimatePresence>
      <div className="join grid grid-cols-2 w-48 mx-auto mt-6">
        <button
          className="join-item btn btn-outline btn-md"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="join-item btn btn-outline btn-md"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}