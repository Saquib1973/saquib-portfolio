import React from "react";

const Auth = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <form class="max-w-sm p-10 mx-4 md:mx-0 m-auto rounded-xl shadow-xl border-4 border-double border-orange bg-white/5 flex flex-col gap-4 ">
        <p class="mb-8 text-xl md:text-4xl font-light text-center text-darkBlue">
          Login
        </p>
        <div class="mb-2">
          <div class=" relative ">
            <input
              type="text"
              id="login-with-bg-email"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm md:text-xl focus:outline-none focus:ring-2 focus:ring-darkBlue focus:border-transparent"
              placeholder="email"
            />
          </div>
        </div>
        <div class="mb-2">
          <div class=" relative ">
            <input
              type="text"
              id="login-with-bg-password"
              class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm md:text-xl focus:outline-none focus:ring-2 focus:ring-darkBlue focus:border-transparent"
              placeholder="password"
            />
          </div>
        </div>
        <div class="flex items-center justify-between mt-4">
          <button
            type="submit"
            class="py-2 px-4  bg-clear text-orange hover:bg-darkOrange focus:ring-orange focus:ring-offset-indigo-200 hover:text-white w-full transition ease-in duration-200 text-center text-sm md:text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
