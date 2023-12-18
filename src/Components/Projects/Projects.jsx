import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./Project";
import img from "../../utils/twitterHomePage.png";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.count}`} className="cursor-pointer">
      <div className="flex justify-center group items-center bg-orange drop-shadow-lg  rounded-lg">
        <div className="rotate-45 h-60 w-60  translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 transition-all duration-700 bg-white"></div>
        <div className="-rotate-45 h-60 w-60 blur-sm group-hover:blur-0 -translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 transition-all duration-700 bg-white">
          <img src={img} alt="" />
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-hidden py-20 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex min-h-[70vh] gap-40 items-center justify-center flex-wrap py-10">
        {currentProjects.map((project) => (
          <ProjectCard key={project.count} project={project} />
        ))}
      </div>
      <div className="flex mt-5">
        {Array.from(
          { length: Math.ceil(projects.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 font-semibold rounded-full focus:outline-none ${
                currentPage === index + 1
                  ? "bg-orange text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
