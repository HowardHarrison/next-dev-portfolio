"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};
    const Links = [
        { name: 'About', link: 'home' },
        { name: 'Journey', link: 'journey' },
        { name: 'Skills', link: 'skills' },
        { name: 'Certificates', link: 'certificates' },
        { name: 'Contact', link: 'contact' },
      ];
      const [open, setOpen] = useState(false);
    return(
        <div>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="/">
          <Image
          src='/logo.png'
          alt='logo'
          width={30}
          height={30}
          />
          </a> 
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
               <button
                        onClick={() => handleScroll(link.link)}
                        className="hover:text-gray-400 transition-colors"
                    >
                      {link.name}
                    </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
        </div>
    )
}