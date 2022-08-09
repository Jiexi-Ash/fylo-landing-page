import React from "react";
import Image from "next/image";

function Productive() {
  return (
    <div className="px-8 py-24 container mx-auto max-w-8xl">
      <div className="grid grid-cols-1 place-items-center">
        <div className="relative h-44 w-72 md:w-96 md:h-80 lg:w-[640px] lg:h-[474px] lg:mr-10">
          <Image
            src="/images/illustration-2.svg"
            alt="illustration"
            layout="fill"
          />
        </div>
        <div className="grid grid-cols-1 place-items-center pt-20">
          <div className="max-w-[320px]">
            <h2 className="text-[16px] text-center font-bold text-veryDarkBlue py-4">
              Stay productive, wherever you are
            </h2>
            <p className="text-desaturatedBlue leading-[21px] text-sm lg:text-[17px] text-center pb-4">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-desaturatedBlue leading-[21px] text-sm lg:text-[17px] text-center">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </div>

          <div className="py-9">
            <h3 className="text-[12px] underline underline-offset-8 text-moderateCyan">
              See how Fylo works
            </h3>
          </div>

          <div className="max-w-[240px] text-left">
            <div className="relative h-4 w-4">
              <Image src="/images/icon-quotes.svg" alt="icon" layout="fill" />
            </div>
            <p className="text-[10px] pt-2 text-veryDarkBlue leading-[18px] tracking-[0.38px]">
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
                  <span className="font-bold text-[9px]">Kyle Burton</span>
                  <br />
                  <span className="text-[6px]">Founder & CEO, Huddle</span>
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