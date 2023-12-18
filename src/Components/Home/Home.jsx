import React from "react";
import ParticlesComponent from "./../Particles/ParticlesComponent";
import myPhoto from "./myPhoto.jpg";
import { Link, Route, Routes } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import About from "../about/About";
import Project from "../Projects/Project";
import Auth from "../Admin/Auth";
import Dashboard from "../Admin/Dashboard";
import Main from "./Main";
import Error from "../404Page/Error";
import Projects from "../Projects/Projects";
import Blog from "../Blogs/Blog";
import Contact from "../Contact/Contact";
export const links = [
  { icon: <FaGithub />, url: "https://github.com/Saquib1973" },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/saquib-ali-4a3235219/",
  },
  { icon: <FaInstagram />, url: "https://www.instagram.com/kooky._.cookie/" },
  { icon: <CiMail />, url: "mailto:saquib.21ug2015@iiitranchi.ac.in" },
];
const Home = () => {
  return (
    <div id="home" className="h-auto max-w-screen">
      <ParticlesComponent />
      <div className="absolute left-0 top-0 h-screen w-screen bg-transparent flex gap-4 ">
        <div className="w-[0] hidden lg:w-[30vw] lg:flex items-center flex-col justify-center backdrop-blur-sm border-r-4 border-orange border-double">
          <div className="flex flex-col items-center justify-center gap-8">
            <img
              src={myPhoto}
              alt=""
              className="xl:w-[20rem] w-[15rem] xl:h-[15rem] h-[10rem] rounded-xl drop-shadow-md hover:contrast-75 transition-all "
            />
            <div className="flex gap-4 text-4xl text-darkBlue ">
              {links.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  className="hover:text-darkBlue text-orange drop-shadow-md transition-all"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center -space-y-6 text-darkBlue ">
            <h1 className="text-2xl tracking-tight leading-loose">
              The personal homepage of
            </h1>
            <h2 className="text-2xl font-semibold tracking-widest underline font-indi leading-loose">
              Saquib Ali
            </h2>
          </div>
          <Link to="project">
            <button className="h-16 w-48 text-lg hover:cursor-pointer hover: transition-all hover:scale-[1.04] duration-500 bg-gradient-to-r from-orange to-orange/60 shadow-lg rounded-xl text-white">
              My Resume
            </button>
          </Link>
        </div>
        <div className="w-[100vw] lg:w-[70vw] max-h-screen overflow-scroll overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add the following route for individual projects */}
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/auth/login" element={<Auth />} />
            <Route path="/auth/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
      {/* <div className=" text-white max-w-[95%] top-[45vh] left-[8vw] sm:top-[35%] sm:left-[15%] lg:top-[30%] lg:left-[20%] md:top-[30%] md:left-[8%] h-[50vh] flex md:flex-row flex-col justify-evenly absolute"></div> */}
    </div>
  );
};

export default Home;
