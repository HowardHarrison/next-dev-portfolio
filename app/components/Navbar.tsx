"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    let Links = [
        { name: 'About', link: '/' },
        { name: 'Journey', link: '/members' },
        { name: 'Skills', link: '/upcoming-events' },
        { name: 'Certificate', link: '/special-events' },
        { name: 'Contact', link: '/videos' },
      ];
      let [open, setOpen] = useState(false);
    return(
        <div>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Image
          src='/logo.png'
          alt='logo'
          width={30}
          height={30}
          />
        </div>

        {/* Icon to open and close */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-4 absolute lg:static bg-slate-100 opacity-90  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 sm:pl-9 pl-7 transition-all duration-500 ease-in 
          ${
            open ? 'top-[70px] ' : 'top-[-520px]'
          }
          `}
        >
          {Links.map(link => (
            <li key={link.name} className="lg:ml-8 text-lg lg:my-0 sm:my-7 my-5">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="lg:ml-8 text-lg lg:text-xl lg:my-0 sm:my-7 my-5">
            {/* <Link
              className="lg:text-slate-800 lg:hover:text-gray-300 text-gray-800 px-2 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mx-auto"
              href="/login"
            > */}
              {/* <FontAwesomeIcon
                icon={faUser}
                className="text-white-500"
                size="2x"
              /> */}
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </nav>
        </div>
    )
}