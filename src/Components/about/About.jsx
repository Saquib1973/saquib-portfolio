import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { skills } from "../Data/data";
const About = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
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
  return (
    <div
      id="skills"
      className=" max-w-screen flex flex-col justify-center items-center mt-48 sm:mt-20 "
    >
      <div className="text-4xl text-blue-500 mt-5 text-center pb-20">
        Skills <div className="bg-blue-300 h-2 w-56"></div>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap w-[50vw] sm:w-[90vw] ml-[-10rem] sm:ml-10"
      >
        {skills.map((items) => (
          <p
            id={items.name}
            className="flex items-center justify-center bg-blue-200 shadow-md shadow-blue-300 my-5 h-48 hover:scale-[1.2] hover:cursor-pointer duration-[1.3s] px-4 text-4xl mx-16 rounded-lg font-semibold"
          >
            <div className="flex flex-col w-56">
              <div className="w-20 text-xl font-extralight text-blue-400 ">
                {items.name}
              </div>
              <div className="text-base">{items.desc}</div>
            </div>
            {visible && (
              <div className="bg-sky-200 p-1 border-4 rounded-md">
                <p>
                  <CountUp
                    className=""
                    start={0}
                    end={items.end}
                    duration={2}
                  />
                  %
                </p>
                <div className=" py-2 ml-2 text-blue-700 text-4xl font-extralight">
                  {items.icon}
                </div>
              </div>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
