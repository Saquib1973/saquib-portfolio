import React from "react";
import { Link } from "react-router-dom";
import errorSvg from "../utils/errorSvg.svg";
const Blog = () => {
  return (
    <main className="relative h-[80vh] overflow-hidden bg-transparent">
      <div className="container z-10 flex items-center justify-between h-screen px-6 pt-32 mx-auto md:pt-0">
        <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
          <div className="w-full mb-16 text-center md:mb-8 lg:text-left">
            <h1 className="mt-12 font-sans text-5xl font-light text-center text-gray-700 lg:text-left mb-4 lg:text-8xl md:mt-0">
              Under Construction 🛠️ ...
            </h1>
            <Link
              to={"/"}
              className="px-2 py-2 mt-16 text-lg font-light transition duration-200 ease-in bg-darkOrange border-2 text-white border-darkBlue hover:text-darkOrange w-36 hover:border-darkOrange hover:bg-orange/20 focus:outline-none"
            >
              Go back home
            </Link>
          </div>
          <div className="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl">
            <img src={errorSvg} alt="svg" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
