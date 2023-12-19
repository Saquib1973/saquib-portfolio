import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "./Project";
import img from "../../utils/twitterHomePage.png";
import { scrollToTop } from "../../App";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <Link
      to={`/projects/${project.count}`}
      className="cursor-pointer w-full lg:w-auto lg:mx-0 mx-10 "
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 group justify-center group items-center p-10 bg-gradient-to-tr from-orange/60 to-clear/20 drop-shadow-lg  rounded-lg">
        <div className="lg:group-hover:-translate-y-[50%] lg:group-hover:-rotate-90 lg:bg-clear lg:p-2 rounded-md origin-bottom text-4xl lg:group-hover:-translate-x-[50%] lg:-translate-y-24 transition-all duration-700">
          {project.name}
        </div>
        <div className="lg:group-hover:-translate-y-0 flex justify-center lg:group-hover:scale-[1.1] lg:group-hover:-translate-x-[20%] lg:translate-x-[30%] lg:translate-y-[30%] transition-all duration-700">
          <img src={img} className="w-2/3 lg:w-[20vw]" alt="" />
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
    <div className="overflow-hidden py-20 pb-24 flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex min-h-[70vh] gap-10 lg:gap-40 items-center justify-center flex-wrap py-10">
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
