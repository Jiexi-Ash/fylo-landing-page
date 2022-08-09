import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="py-6 px-8 container max-w-6xl md:mx-auto md:max-w-8xl">
      <nav className="flex justify-between items-center">
        <div className="relative h-8 w-24">
          <Image src="/images/logo.svg" alt="logo" layout="fill" />
        </div>

        <ul className="flex justify-center-items-center space-x-4 md:space-x-16">
          <li>
            <Link href="/">
              <a className="text-sm text-desaturatedBlue hover:underline md:text-lg">
                Features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-sm text-desaturatedBlue hover:underline md:text-lg">
                Team
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-sm text-desaturatedBlue hover:underline md:text-lg">
                Sign In
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
