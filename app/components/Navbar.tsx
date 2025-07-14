"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
        { name: 'Projects', link: 'projects' },
        { name: 'Certificates', link: 'certificates' },
        { name: 'Contact', link: 'contact' },
      ];
    const [open, setOpen] = useState(false);
    return(
        <div>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button onClick={() => handleScroll('home')}>
          <Image
          src='/logo2.png'
          alt='logo'
          width={35}
          height={35}
          />
          </button>
        </div>

        {/* Icon to open and close */}
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between lg:w-auto lg:static lg:justify-start md:hidden"
        >
          {open ?
          <HiX className="text-3xl text-slate-200"/>
          :
          <HiMenu className="text-3xl text-slate-200"/>
          }
        </button>

        <ul
          className={`bg-slate-900 md:flex md:items-center md:pb-0 pb-4 absolute md:static opacity-90  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 sm:pl-9 pl-7 transition-all duration-500 ease-in 
          ${
            open ? 'top-[50px] ' : 'top-[-520px]'
          }
          `}
        >
          {Links.map(link => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 sm:my-7 my-5">
               <button
                        onClick={() => handleScroll(link.link)}
                        className="text-white hover:text-slate-300 transition-colors"
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