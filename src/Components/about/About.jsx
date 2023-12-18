import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { skills } from "../Data/data";

const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  useEffect(() => {
    function onScroll() {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        if (isVisible && !visible) {
          setVisible(true);
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill);

  return (
    <div
      id="skills"
      className="max-w-screen flex flex-col justify-center items-center bg-transparent pb-20"
    >
      <div className="text-4xl text-darkOrange mt-5 text-center pb-20">
        Skills
        <div className="bg-orange h-2 w-56"></div>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap items-center justify-center gap-8 w-auto"
      >
        {currentSkills.map((items) => (
          <div
            key={items.name}
            id={items.name}
            className="flex items-center justify-center bg-white/40 mx-10 shadow-md shadow-darkOrange/40 h-auto py-4 hover:cursor-pointer px-4 text-4xl rounded-lg font-semibold"
          >
            {/* Bento Box Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mr-4">
              <span className="text-white text-2xl">🍱</span>
            </div>

            <div className="flex flex-col w-32">
              <div className="w-auto text-xl font-extralight text-dark">
                {items.name}
              </div>
            </div>

            {visible && (
              <div className="bg-orange p-1 border-4 border-darkBlue rounded-md">
                <p>
                  <CountUp
                    className=""
                    start={0}
                    end={items.end}
                    duration={2}
                  />
                  %
                </p>
                <div className="py-2 ml-2 text-blue-700 text-4xl font-extralight">
                  {items.icon}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        {Array(Math.ceil(skills.length / skillsPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              className={`mx-2 px-3 py-1 rounded-full ${
                index + 1 === currentPage ? "bg-orange text-white" : "bg-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default About;
