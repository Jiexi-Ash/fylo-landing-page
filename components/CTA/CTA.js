import React from "react";

function CTA() {
  return (
    <div className="bg-desaturatedBlue container max-w-8xl mx-auto">
      <div className="flex flex-col justify-center items-center py-14 md:flex-row md:justify-between md:px-10">
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-bold font-openSans py-6 md:text-3xl">
            Get early access today
          </h2>

          <p className="text-white   text-sm  leading-5 px-9 md:px-0 md:max-w-lg md:text-[16px] md:leading-6 md:-tracking-tighter">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="flex flex-row px-14 mt-4">
          <form>
            <input
              className="w-full py-3 px-4 placeholder:text-lightGrayishBlue border-none ring-0 focus:outline-none focus:ring-0"
              type="email"
              placeholder="email@example.com"
            />

            <button className="btn mt-4 md:w-1/2 md:text-sm">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CTA;
