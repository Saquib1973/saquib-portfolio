import React from "react";

const Project = () => {
  return (
    <div
      id="project"
      className="justify-center flex flex-col items-center mt-20 bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500"
    >
      <div className="my-20 text-3xl text-white border-b-4 border-white">
        Projects
      </div>
      <div className="allProjects">
        <div className="h-20 w-44 bg-white my-2"></div>
        <div className="h-20 w-44 bg-white my-2"></div>
        <div className="h-20 w-44 bg-white my-2"></div>
        <div className="h-20 w-44 bg-white my-2"></div>
      </div>
    </div>
  );
};

export default Project;
