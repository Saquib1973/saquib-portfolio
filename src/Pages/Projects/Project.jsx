import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import academiaStack from "../../utils/ProjectImages/Screenshot 2023-12-20 175558.png";
import nyaylok from "../../utils/ProjectImages/Screenshot 2023-12-20 175615.png";
import blog from "../../utils/ProjectImages/Screenshot 2023-12-20 175411.png";
import quill from "../../utils/ProjectImages/Screenshot 2023-12-20 175701.png";
import test from "../../utils/ProjectImages/board-361516_1280.jpg";
import firebaseRegister from "../../utils/ProjectImages/Screenshot 2023-12-20 182436.png";
export const projects = [
  {
    count: 0,
    name: "AcademiaStacks",
    desc: "One stop solution for all your notes related issue ,Developed a college note aggregation website in 20 days with a friend. As primary frontend developer, created an intuitive user interface and played key role in connecting backend to frontend.",
    urlGithub: "https://github.com/hellovaibhav/AcademiaStacks",
    urlDeploy: "https://academia-stacks.vercel.app/",
    picture: academiaStack,
  },
  {
    count: 1,
    name: "Blog Website",
    desc: "Here you can create , update and delete blogs ",
    urlGithub: "https://github.com/Saquib1973/Blog_App/tree/main",
    urlDeploy: "",
    picture: blog,
  },
  // Add more project items here
  {
    count: 2,
    name: "QuillBot",
    desc: "Search Articles using a search engine for that",
    urlGithub: "https://github.com/Saquib1973/QuillBotSearch",
    urlDeploy: "https://renderquillbot.onrender.com/",
    picture: quill,
  },
  {
    count: 3,
    name: "Nyaylok",
    desc: "Project made under SIH",
    urlGithub: "https://github.com/Saquib1973/Nyaylok-Frontend",
    urlDeploy: "https://nyaylok.onrender.com/",
    picture: nyaylok,
  },
  {
    count: 4,
    name: "FireBase Auth",
    desc: "I was asked by a company to develop a Firebase authentication app by a company on internshala as a project . Without any prior experience in Firebase I was able to make it within the given time span with the help of documentations and tutorials .",
    urlGithub: "https://github.com/Saquib1973/Firebase_Authentication_App",
    urlDeploy: "https://fir-authentication-app-f9489.web.app/",
    picture: firebaseRegister,
  },
  {
    count: 5,
    name: "Portfolio",
    desc: "Previous Portfolio wesite",
    urlGithub: "",
    urlDeploy: "https://saquib-ali.web.app/",
    picture: test,
  },
  {
    count: 6,
    name: "WeatherWebApp",
    desc: "",
    urlGithub: "https://github.com/Saquib1973/WatherWebApp",
    urlDeploy: "",
    picture: test,
  },
  {
    count: 7,
    name: "Ecommerce",
    desc: "",
    urlGithub: "https://github.com/Saquib1973/Ecommerce",
    urlDeploy: "",
    picture: test,
  },
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
            <Link
              to={`/projects/${project.count}`}
              className="cursor-pointer w-auto"
            >
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
              src={projects[projectNo].picture}
              alt=""
              className="w-[50vw] md:w-[80vw] lg:group-hover:-translate-y-1 transition-all duration-500  lg:translate-y-6 rounded-xl drop-shadow-lg"
            />
            <div className=" flex gap-2 lg:-translate-y-5 lg:group-hover:translate-y-0 z-[-1] transition-all duration-500 md:gap-6">
              <Link
                target="_blank"
                to={projects[projectNo].urlGithub}
                className="flex  items-center gap-2 hover:text-clear drop-shadow-md transition-all duration-500"
              >
                <FaGithub className="text-lg md:text-4xl" />
              </Link>
              {projects[projectNo].urlDeploy.length !== 0 && (
                <Link
                  target="_blank"
                  to={projects[projectNo].urlDeploy}
                  className="flex  items-center  gap-2 hover:text-clear drop-shadow-md transition-all duration-500"
                >
                  <CiLink className="text-lg md:text-4xl" />
                </Link>
              )}
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
    <div className="bg-white p-2 px-10 h-40 gap-4 w-auto rounded-lg shadow-md drop-shadow-md border-2 border-orange">
      <h2 className="text-xl font-bold mb-4 underline underline-offset-4">
        {name}
      </h2>
      <p className="text-gray-700">{desc.split(" ").slice(0, 5).join(" ")}</p>
    </div>
  );
};
