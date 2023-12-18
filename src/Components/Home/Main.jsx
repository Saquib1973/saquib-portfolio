import React from "react";
import { links } from "./Home";
import myPhoto from "./myPhoto.jpg";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const Main = () => {
  const text = ["F", "R", "O", "N", "T"];
  const text2 = ["O", "E", "R"];
  return (
    <div className=" w-full flex flex-col gap-4 pt-3 pb-20 px-4">
      <div className="w-full flex flex-col sm:flex-row  items-center py-10 justify-between sm:ml-5 md:ml-20 backdrop-blur-sm lg:hidden">
        <img
          src={myPhoto}
          alt=""
          className="xl:w-[20rem] mb-4 w-[15rem] xl:h-[15rem] h-[10rem] rounded-xl shadow-lg shadow-orange hover:contrast-75 transition-all "
        />
        <div className="flex flex-col w-full gap-2 items-center text-center justify-center  text-darkOrange ">
          <h1 className="text-sm sm:text-2xl tracking-tight sm:-my-2">
            The personal homepage of
          </h1>
          <h2 className="font-indi font-semibold underline tracking-widest text-sm sm:text-2xl ">
            Saquib Ali
          </h2>
          <Link to="project">
            <button className="h-8 sm:h-14 w-24 sm:w-40 text-xs md:text-lg hover:cursor-pointer hover: transition-all hover:scale-[1.04] duration-500 bg-gradient-to-r from-orange to-orange/60 shadow-lg rounded-xl text-white">
              My Resume
            </button>
          </Link>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-clear/60 cursor-pointer h-[40vh] rounded w-auto flex items-center justify-around text-white text-2xl font-bold col-span-2">
          <p className="font-indi tracking-widest text-orange text-2xl sm:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
            Wel<span className="text-black">c</span>ome
          </p>
        </div>
        <div class="bg-transparent h-[40vh] grid gap-[1vh] grid-rows-2 rounded w-auto items-center justify-center text-white text-2xl font-bold">
          <div class="bg-gradient-to-tl from-orange cursor-pointer  to-orange/20 h-[19vh] grid rounded px-0 sm:px-[2vw] md:px-[5vw] lg:px-[3vw] xl:px-10 2xl:px-16 items-center justify-center text-white text-2xl font-bold">
            <div className="flex flex-wrap justify-center gap-1 md:gap-4 mx-4 text-2xl xl:text-4xl text-darkBlue ">
              {links.map((link, index) => (
                <Link
                  to={links.url}
                  href={link.url}
                  target="_blank"
                  className="hover:text-clear text-darkBlue drop-shadow-md transition-all"
                  rel="noreferrer"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to={"/contact"}
            class="bg-[#00CED1]/60 hover:scale-[1.02] cursor-pointer transition-all duration-500 h-[19vh] grid rounded w-auto items-center justify-center text-white text-sm lg:text-2xl font-bold"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              Contact <IoMdSend />
            </div>
          </Link>
        </div>
        <Link
          to={"/projects"}
          class="bg-[#9932cc]/60 hover:scale-[1.02] cursor-pointer font-indi tracking-widest transition-all duration-500 h-[30vh] rounded w-auto flex items-center justify-center text-white text-sm lg:text-2xl font-bold"
        >
          Projects
        </Link>
        <div class="border-2 border-orange backdrop-blur-md h-[30vh] rounded w-auto flex items-center justify-center text-white text-2xl font-bold col-span-2">
          <div className="text-base -rotate-[60deg] sm:rotate-0 sm:text-2xl md:text-4xl xl:text-6xl flex-col flex items-end font-bold tracking-widest font-indi">
            <div className="flex gap-4 items-center justify-end w-full">
              <p>
                {text.map((tex, index) => (
                  <span
                    className={`text-orange ${
                      index % 2 === 0
                        ? " hover:text-clear"
                        : "hover:text-darkBlue"
                    }`}
                  >
                    {tex}
                  </span>
                ))}
              </p>
              <div className="w-12 sm:w-24 md:w-40 bg-darkBlue h-1" />
              <p className="">END</p>
            </div>
            <div className="mr-10">
              DEVELP
              <span className="text-orange">
                {text2.map((tex, index) => (
                  <span
                    className={`text-orange ${
                      index % 2 === 0
                        ? " hover:text-clear"
                        : "hover:text-darkBlue"
                    }`}
                  >
                    {tex}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div class="bg-gradient-to-tr cursor-pointer from-orange to-orange/20 h-96 rounded w-auto col-span-3 flex items-center justify-center text-white text-2xl font-bold">
          {/* <img src={twitter} alt="" className="h-80 w-80 rounded-3xl" /> */}
          <div className="p-6 tracking-widest text-xs sm:text-lg">
            I'm a third-year undergraduate student majoring in Electrical and
            Computer Engineering (ECE), and I'm thrilled to start my search for
            an internship. With a strong academic track record and a CGPA of
            8.97, I'm well-prepared to put my classroom knowledge into practical
            use.My main interest is in React development, but I've also dabbled
            in backend development, giving me a versatile skill set that can
            benefit any team.Through past projects, I've become a team player
            who thrives in collaborative settings. I'm detail-oriented and
            skilled at problem-solving, especially when it comes to debugging.
            I've taken the time to carefully review and fix code, not only in my
            own work but also in my team's projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
