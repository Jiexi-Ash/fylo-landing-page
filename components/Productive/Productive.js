import React from "react";
import Image from "next/image";

function Productive() {
  return (
    <div className="px-8 py-24 container mx-auto max-w-8xl bg-productiveMobile bg-cover bg-center md:bg-productiveDesktop">
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between">
        <div className="relative h-44 w-72 md:w-96 md:h-80 lg:w-[640px] lg:h-[474px] ">
          <Image
            src="/images/illustration-2.svg"
            alt="illustration"
            layout="fill"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 place-items-center pt-20 md:place-items-start">
          <div className="max-w-[320px] text-center md:text-left  md:max-w-2xl">
            <h2 className="text-[16px]  font-bold text-veryDarkBlue py-4 md:text-[40px]">
              Stay productive, wherever you are
            </h2>
            <p className="text-desaturatedBlue leading-[21px] text-sm md:text-lg     pb-4">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-desaturatedBlue leading-[21px] text-sm md:text-lg  ">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </div>

          <div className="py-9">
            <div className="flex items-center space-x-1 group">
              <h3 className="text-[12px] cursor-pointer underline underline-offset-8 text-moderateCyan md:text-[16px] group-hover:cursor-pointer group-hover:text-[#71DFCC]">
                See how Fylo works
              </h3>
              <div className="relative h-4 w-4 md:h-6 md:w-6 group-hover:text-[#71DFCC]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-moderateCyan group-hover:text-[#71DFCC]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="max-w-[240px] text-left md:ml-6 md:max-w-[300px]">
            <div className="relative h-4 w-4">
              <Image src="/images/icon-quotes.svg" alt="icon" layout="fill" />
            </div>
            <p className="text-[10px] pt-2 text-veryDarkBlue leading-[18px] tracking-[0.38px] md:text-sm">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex space-x-2 pt-4">
              <div className="relative w-8 h-8 ">
                <Image
                  src="/images/avatar-testimonial.jpg"
                  alt="avatar"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-[10px] text-veryDarkBlue leading-[18px] tracking-[0.38px]">
                  <span className="font-bold text-[9px] md:text-[11px]">
                    Kyle Burton
                  </span>
                  <br />
                  <span className="text-[6px] md:text-[8px]">
                    Founder & CEO, Huddle
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productive;
