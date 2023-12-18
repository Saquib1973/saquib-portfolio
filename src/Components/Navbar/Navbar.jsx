import React from "react";
import { navigation } from "../Data/data.js";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="fixed bottom-2 left-[0%] lg:left-[30%] rounded-md right-0 z-50 w-auto sm:max-w-[50%] lg:max-w-full lg:mr-1  mx-10 sm:mx-auto shadow-md shadow-orange/40 backdrop-blur-md border-2 border-orange">
      <div className="max-w-full px-2 flex items-center py-2  justify-center mx-auto">
        <div
          className={`duration-[1.4s] rounded-r-3xl ease-in-out items-center  justify-center lg:justify-start flex  gap-4 lg:gap-1 w-full md:bg-inherit bg-opacity-95 text-base md:text-lg lg:text-lg xl:text-xl  `}
        >
          {navigation.map((items) => (
            <Link
              key={items.name}
              to={items.href}
              className={`
               border-b-2 group hover:cursor-pointer text-dark px-1 py-2 
                ${
                  location.pathname === items?.href
                    ? "rounded-none capitalize border-darkBlue tracking-widest"
                    : " border-transparent hover:border-orange hover:text-darkOrange tracking-tight "
                }
              `}
            >
              <p className="duration-300 hidden  lg:block list-none mx-1 lg:mx-5 my-10 pb-10 md:pb-0 md:my-auto border-b-8 md:border-none border-sky-200">
                <span
                  className={`${
                    location.pathname === items?.href ? "" : "text-orange"
                  }`}
                >{`</>`}</span>
                <span
                  className={`${
                    location.pathname === items?.href ? "text-orange" : ""
                  }`}
                >
                  {items.name[0]}
                </span>
                {items.name.slice(1)}
              </p>
              <img
                src={items.src}
                alt=""
                className="sm:h-8 sm:w-8 h-6 w-6 md:h-10 md:w-10 block lg:hidden"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
