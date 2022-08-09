import React from "react";
import Image from "next/image";
import Button from "components/UI/Button";
function Hero() {
  return (
    <div className="px-8 py-24 lg:">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative h-44 w-72">
          <Image
            src="/images/illustration-1.svg"
            alt="illustration"
            layout="fill"
          />
        </div>
        <div className="pt-10 pb-8 max-w-[320px]">
          <h1 className="text-2xl font-bold font-openSans text-center text-veryDarkBlue">
            All your files in one secure location, accessible anywhere.
          </h1>

          <p className="text-veryDarkBlue text-center pt-6">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full px-4">
        <form>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-veryDarkBlue font-raleway px-4 py-2 rounded-md w-full  placeholder:text-[12px] placeholder:text-lightGray placeholder:font-raleway focus:ring-0 focus:outline-none"
          />

          <button className="w-full  py-3 text-center bg-brightBlue text-white rounded-md mt-4">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
