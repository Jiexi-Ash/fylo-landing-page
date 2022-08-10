import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="px-8 py-12 bg-veryDarkBlue container max-w-8xl mx-auto">
      <div className="relative h-10 w-20 text-white">
        <Image
          src="/images/logo-white.svg"
          alt="logo"
          layout="fill"
          className="text-whit"
        />
      </div>
      <div className="flex flex-col justify-start space-y-6 md:flex-row md:justify-between md:items-start max-w-6xl">
        <div className="flex flex-col space-y-4 pt-8">
          <div className="flex items-center space-x-4 ">
            <div className="relative h-4 w-5 text-white">
              <Image
                src="/images/icon-phone.svg"
                alt="logo"
                layout="fill"
                className="text-whit"
              />
            </div>
            <p className="text-white">Phone: +1-543-123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative h-4 w-5 text-white">
              <Image
                src="/images/icon-email.svg"
                alt="logo"
                layout="fill"
                className="text-white"
              />
            </div>
            <p className="text-white">example@fylo.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col ">
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">About us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">Jobs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">Press</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col">
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">Terms</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:underline">Privacy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center py-4 space-x-4">
          <div className="relative h-6 w-6">
            <Image
              src="/images/facebook-icon.png"
              layout="fill"
              alt="facebook"
            />
          </div>
          <div className="relative h-6 w-6">
            <Image
              src="/images/twitter-icon.png"
              layout="fill"
              alt="facebook"
            />
          </div>
          <div className="relative h-6 w-6">
            <Image
              src="/images/instagram-icon.png"
              layout="fill"
              alt="facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
