"use client"
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/Projects";
import Starfield from "../animation/StarField";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
    return (
        <div className="relative w-full bg-blue-950">
            <Starfield count={100}/>
        <div className="pt-20 z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center">
                    <motion.h3
                    className="mt-3 w-full p-2 text-center text-xl uppercase md:text-2xl lg:text-4xl text-white"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    custom={0}
                    variants={textVariants}
                    >
                        Projects
                    </motion.h3>

                    <div className="mt-5 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                        <div
                            className="bg-slate-200 m-4 mx-auto h-[460px] w-[320px] rounded-lg border border-slate-800 md:h-[500px] md:w-[360px]"
                        >
                            {/* image*/}
                            <div className="h-2/5 w-full">
                                <Image
                                    alt=""
                                    className="h-full w-full rounded-t-lg object-cover"
                                    src='/Journey/2023.png'
                                    width={500}
                                    height={500}
                                    quality={100}
                                />
                            </div>
                            {projects.map((project) => (
                                <div key={project.slug} className="p-1 z-50">
                                    <div className="my-1 text-lg text-left pl-2 font-semibold">{project.title}</div>
                                    <div className="text-left text-md pl-2">Tech Stack:</div>

                                    <div className="text-left flex flex-wrap text-xs">
                                        {project.tech.map((item, index) => (
                                            <div key={index} className="bg-slate-100 dark:bg-slate-700 text-xs text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full ml-1 mt-1">{item}</div>
                                        ))}
                                    </div>

                                    <p className="text-md line-clamp-6 text-left pl-2 h-[118px] mb-3">
                                       {project.description}
                                    </p>

                                    <Link href={`/projects/${project.slug}`} className="m-3 w-32 mx-auto rounded-lg bg-slate-700 hover:bg-slate-800 p-2 text-sm uppercase text-gray-300">
                                        View Details
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Projects;