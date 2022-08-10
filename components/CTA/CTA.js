import { useState } from "react";

function CTA() {
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
        <div className="w-full px-14 mt-4 max-w-lg">
          <form onSubmit={handleClick} className="flex flex-col">
            <>
              <input
                className={`${
                  error && "border border-[#EF4877]"
                } w-full py-3 px-4 placeholder:text-lightGrayishBlue ring-0 focus:outline-none focus:ring-0`}
                type="text"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && (
                <p className="text-lightGrayishBlue text-sm py-1">{error}</p>
              )}
            </>

            <button className="btn mt-4 md:w-[200px] md:text-sm">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CTA;
