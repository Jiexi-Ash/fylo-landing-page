import { useState } from "react";
import Image from "next/image";
function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please check your email");
    } else {
      setError("");
    }
  };
  return (
    <div className="px-8 py-24 container mx-auto max-w-8xl">
      <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between">
        <div className="relative h-44 w-72 md:w-96 md:h-80 lg:w-[640px] lg:h-[474px]">
          <Image
            src="/images/illustration-1.svg"
            alt="illustration"
            layout="fill"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col pt-10 md:mr-16">
          <div className="max-w-[320px]  text-center  md:text-left lg:max-w-2xl lg:text-left ">
            <h1 className="text-2xl font-bold font-openSans  leading-[36px] text-veryDarkBlue md:text-lg lg:text-[40px] lg:leading-[60px]">
              All your files in one secure location, accessible anywhere.
            </h1>

            <p className="pt-5 text-veryDarkBlue text-sm lg:text-[17px] lg:max-w-lg">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>

            <div className="pt-8 lg:max-w-lg">
              <form
                noValidate
                onSubmit={handleClick}
                className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0"
              >
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${
                    error ? "border-[#EF4877]" : "border-veryDarkBlue"
                  } border  font-raleway px-4 py-3 rounded-lg w-full  placeholder:text-[12px] placeholder:text-lightGray placeholder:font-raleway focus:ring-0 focus:outline-none`}
                />

                <button className="btn">Get Started</button>
              </form>
              {error && <p className="text-[#EF4877] text-sm py-1">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
