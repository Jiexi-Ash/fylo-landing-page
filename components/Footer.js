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
                <a className="text-sm text-white hover:text-brightBlue">
                  About us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:text-brightBlue">Jobs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:text-brightBlue">
                  Press
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:text-brightBlue">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <ul className="flex flex-col">
            <li>
              <Link href="/">
                <a className="text-sm text-white  hover:text-brightBlue">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white  hover:text-brightBlue">
                  Terms
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm text-white hover:text-brightBlue">
                  Privacy
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center py-4 space-x-4">
          <div className="group flex justify-center items-center h-6 w-6 border border-white rounded-full text-center hover:border-brightBlue cursor-pointer">
            <div className="relative h-4 w-4 fill-current text-white group-hover:text-brightBlue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
              </svg>
            </div>
          </div>
          <div className="group flex justify-center items-center h-6 w-6 border border-white rounded-full text-center hover:border-brightBlue  cursor-pointer">
            <div className="relative h-4 w-4 fill-current text-white group-hover:text-brightBlue">
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z" />
              </svg>
            </div>
          </div>
          <div className="group flex justify-center items-center h-6 w-6 border border-white rounded-full text-center hover:border-brightBlue  cursor-pointer">
            <div className="relative h-4 w-4 fill-current text-white group-hover:text-brightBlue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
