import React from "react";
import { Link, useParams } from "react-router-dom";
import img from "../../utils/twitterHomePage.png";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
export const projects = [
  {
    count: 0,
    name: "AcademiaStacks",
    desc: "glkjsjgdfkjgdf",
    url: "unkown/",
    picture: "pic1",
  },
  {
    count: 1,
    name: "project2aslkj",
    desc: "glkjsjgdfkjgdfdsadas",
    url: "sasunkown/",
    picture: "pic2",
  },
  // Add more project items here
  { count: 2, name: "project3", desc: "...", url: "...", picture: "pic3" },
  { count: 3, name: "project4", desc: "...", url: "...", picture: "pic4" },
  { count: 4, name: "project5", desc: "...", url: "...", picture: "pic5" },
];
const Project = () => {
  const { projectId } = useParams();
  const projectNo = parseInt(projectId, 10);
  //eslint-disable-next-line
  const project = projects.find((proj) => proj.count === projectNo);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pb-20 overflow-x-hidden">
      <div className="flex overflow-hidden  group">
        <div className="flex space-x-8 py-10 animate-loop-scroll group-hover:paused">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.count}`} className="cursor-pointer">
              <ProjectCard
                key={project.count}
                name={project.name}
                desc={project.desc}
                picture={project.picture}
              />
            </Link>
          ))}
        </div>
        <div className="flex space-x-8 ml-16 py-10 animate-loop-scroll group-hover:paused">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.count}`} className="cursor-pointer">
              <ProjectCard
                key={project.count}
                name={project.name}
                desc={project.desc}
                picture={project.picture}
              />
            </Link>
          ))}
        </div>
      </div>
      {projectNo !== -1 && (
        <div
          id="project"
          className="justify-around md:justify-between w-2/3 min-h-[55vh] group px-[2vw] md:px-16 gap-4 flex flex-col md:flex-row items-center my-2 p-4 rounded-xl drop-shadow-md mx-5 bg-gradient-to-br from-darkOrange/40 via-orange/75 to-clear"
        >
          <div className="flex justify-around flex-col gap-2 items-center bg-clear/40 rounded-md drop-shadow-sm p-2">
            <img
              src={img}
              alt=""
              className="w-[50vw] md:w-80 lg:group-hover:-translate-y-1 transition-all duration-500  lg:translate-y-6 rounded-xl drop-shadow-lg"
            />
            <div className=" flex gap-2 lg:-translate-y-5 lg:group-hover:translate-y-0 z-[-1] transition-all duration-500 md:gap-6">
              <Link
                to={""}
                className="flex  items-center gap-2 hover:text-clear drop-shadow-md transition-all duration-500"
              >
                <FaGithub className="text-lg md:text-4xl" />
              </Link>
              <Link
                to={""}
                className="flex  items-center  gap-2 hover:text-clear drop-shadow-md transition-all duration-500"
              >
                <CiLink className="text-lg md:text-4xl" />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-white mb-8">
              {projects[projectNo].name}
            </p>
            <p className="text-gray-700">{projects[projectNo].desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
const ProjectCard = ({ name, desc }) => {
  return (
    <div className="bg-white p-6 px-10 rounded-lg shadow-md flex-none drop-shadow-md border-2 border-orange">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
};
