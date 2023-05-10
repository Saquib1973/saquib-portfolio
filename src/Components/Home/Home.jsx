import React from "react";
import ParticlesComponent from "./../Particles/ParticlesComponent";
import myPhoto from "./myPhoto.jpg";
import { GrInfo } from "react-icons/gr";
const Home = () => {
  return (
    <div id="home" className="h-screen max-w-screen">
      <ParticlesComponent />
      <div className=" text-white max-w-[90%] top-[45vh] left-[8vw] sm:top-[35%] sm:left-[15%] lg:top-[40%] lg:left-[5%] md:top-[30%] md:left-[8%] h-[50vh] flex md:flex-row flex-col justify-evenly absolute">
        <div>
          <img
            src={myPhoto}
            alt=""
            className="sm:w-[30rem] w-[20rem] sm:h-[20rem] h-[15rem] rounded-3xl shadow-xl shadow-blue-400 "
          />
        </div>
        <div className="flex flex-col md:w-[50vw] lg:w-auto ml-[10vw] md:ml-20 lg:ml-48 mt-16 ">
          <h1 className="text-4xl tracking-tight leading-loose">
            Hey I am Saquib{" "}
          </h1>
          <h2 className="text-4xl tracking-tight leading-loose">
            A Web Developer
          </h2>
          <a href="#project">
            <button className="h-16 w-48 ml-10 sm:ml-20 md:ml-6 mt-6 text-lg hover:cursor-pointer hover: transition-all hover:scale-[1.1] bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-blue-400 rounded-xl">
              See My Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
