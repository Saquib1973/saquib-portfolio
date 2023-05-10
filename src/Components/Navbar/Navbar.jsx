import React, { useState } from "react";
import { navigation } from "../Data/data.js";
import { GrInfo } from "react-icons/gr";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-md shadow-blue-800">
      <div className="max-w-full px-3 lg:px-0 lg:max-w-[80vw] flex items-center pt-6 my-4 justify-between mx-auto">
        <div className="left text-3xl text-white">
          <div className="image">{/* logo */}</div>
          Saquib
        </div>
        <div
          className={`duration-[1.4s] rounded-r-3xl ease-in-out items-center justify-end flex-col md:flex-row flex fixed  w-full ${
            !toggle
              ? `left-[-100%] top-0 bottom-0`
              : `left-[-5%] top-0 bottom-0`
          } md:bg-inherit bg-blue-400 opacity-[0.95] md:static text-3xl md:text-2xl lg:text-2xl`}
        >
          {navigation.map((items) => {
            return (
              <a
                key={items.name}
                href={items.href}
                className="hover:uppercase hover:cursor-pointer text-white hover:text-blue-500 hover:bg-white duration-500 ease-in-out mx-1 rounded-xl py-0 md:py-2"
              >
                <p className="  duration-300 list-none mx-5 my-10 pb-10 md:pb-0 md:my-auto border-b-8 md:border-none border-sky-200">
                  <span className="text-red-400">{`</>`}</span>
                  {items.name}
                </p>
              </a>
            );
          })}
          <div className="hover:cursor-pointer text-lg lg:right-10 right-0 top-[-30%] lg:top-2 hidden md:block absolute h-10 w-9 rounded-full mt-10 animate-bounce text-black bg-white">
            <GrInfo className="text-4xl text-center py-1 pt-2" />
          </div>
          <div
            className="block md:hidden absolute right-3 top-14 w-[2rem]"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div
              className={`flex flex-col ${
                !toggle ? `hidden` : `block`
              } items-center justify-around`}
            >
              <div className="w-[2rem] bg-white h-[5px] rotate-[50deg]  absolute"></div>
              <div className="w-[2rem] bg-white h-[5px] rotate-[130deg] absolute"></div>
            </div>
          </div>
        </div>
        <div
          className="block md:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div
            className={`flex ${
              toggle ? `hidden` : `block`
            } flex-col h-[2rem] justify-around items-center`}
          >
            <div className="h-[5px] bg-white w-[2rem]"></div>
            <div className="h-[5px] bg-white w-[2rem]"></div>
            <div className="h-[5px] bg-white w-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
