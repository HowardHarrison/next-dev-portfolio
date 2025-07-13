"use client";
import { IconType } from "react-icons";
import {
    DiReact,
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiRedis,
} from "react-icons/di";
import ProgressCircle from "../components/ProgressCircle";
import { SiAmazonwebservices, SiBitbucket, SiCanva, SiConfluence, SiExpress, SiFigma, SiGit, SiGithub, SiGooglecloud, SiGraphql, SiJavascript, SiJira, SiLaravel, SiMongodb, SiMui, SiMysql, SiNextdotjs, SiRedux, SiSlack, SiSocketdotio, SiTailwindcss, SiThreedotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

interface IconItem {
    id: number;
    Icon: IconType;
    name: string;
    className: string;
    percentage: number;
}

const frontendIconsArray: IconItem[] = [
    {
        id: 1,
        Icon: DiHtml5,
        name: "HTML",
        className: "text-orange-400 text-2xl mr-1",
        percentage: 80
    },
    {
        id: 2,
        Icon: DiCss3,
        name: "CSS",
        className: "text-blue-400 text-2xl mr-1",
        percentage: 80
    },
    {
        id: 3,
        Icon: SiJavascript,
        name: "JS",
        className: "text-yellow-400 text-2xl mr-1",
        percentage: 75
    },
    {
        id: 4,
        Icon: SiTypescript,
        name: "TS",
        className: "text-blue-400 text-2xl mr-1",
        percentage: 55
    },
    {
        id: 5,
        Icon: DiReact,
        name: "React",
        className: "text-blue-400 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 6,
        Icon: SiRedux,
        name: "Redux",
        className: "text-purple-400 text-xl mr-1",
        percentage: 70
    },
    {
        id: 7,
        Icon: SiNextdotjs,
        name: "Next.js",
        className: "text-black-200 text-xl mt-1 mr-1",
        percentage: 65
    },
    {
        id: 8,
        Icon: SiMui,
        name: "MUI",
        className: "text-blue-400 text-xl mt-1 mr-1",
        percentage: 75
    },
    {
        id: 9,
        Icon: SiTailwindcss,
        name: "Tailwind",
        className: "text-blue-400 text-xl mt-1 mr-1",
        percentage: 75
    },
    {
        id: 10,
        Icon: SiThreedotjs,
        name: "Three.js",
        className: "text-black-200 text-xl mt-1 mr-1",
        percentage: 40
    },
];

const backendIconsArray: IconItem[] = [
    {
        id: 1,
        Icon: DiNodejsSmall,
        name: "Node.js",
        className: "text-green-500 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 2,
        Icon: SiExpress,
        name: "Express.js",
        className: "text-black-400 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 3,
        Icon: SiSocketdotio,
        name: "Socket.IO",
        className: "text-black-400 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 4,
        Icon: SiMongodb,
        name: "MongoDB",
        className: "text-green-500 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 5,
        Icon: SiMysql,
        name: "MySQL",
        className: "text-blue-500 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 6,
        Icon: SiLaravel,
        name: "Laravel",
        className: "text-red-500 text-2xl mr-1",
        percentage: 50
    },
    {
        id: 7,
        Icon: DiRedis,
        name: "Redis",
        className: "text-red-500 text-2xl mr-1",
        percentage: 50
    },
    {
        id: 8,
        Icon: SiGraphql,
        name: "GraphQL",
        className: "text-pink-500 text-2xl mr-1",
        percentage: 50
    },
]

const designIconsArray: IconItem[] = [
    {
        id: 1,
        Icon: SiFigma,
        name: "Figma",
        className: "text-black-500 text-2xl mr-1",
        percentage: 60
    },
    {
        id: 2,
        Icon: SiCanva,
        name: "Canva",
        className: "text-blue-500 text-2xl mr-1",
        percentage: 60
    },
]

const cloudIconsArray: IconItem[] = [
    {
        id: 1,
        Icon: SiAmazonwebservices,
        name: "AWS",
        className: "text-black-500 text-2xl mr-1",
        percentage: 5
    },
    {
        id: 2,
        Icon: SiGooglecloud,
        name: "GCP",
        className: "text-slate-500 text-2xl mr-1",
        percentage: 10
    },
]

const collaborationIconsArray: IconItem[] = [
    {
        id: 1,
        Icon: SiGit,
        name: "Git",
        className: "text-orange-500 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 2,
        Icon: SiGithub,
        name: "Github",
        className: "text-black-500 text-2xl mr-1",
        percentage: 70
    },
    {
        id: 3,
        Icon: SiBitbucket,
        name: "Bitbucket",
        className: "text-blue-500 text-xl mt-1 mr-1",
        percentage: 70
    },
    {
        id: 4,
        Icon: SiJira,
        name: "Jira",
        className: "text-blue-500 text-xl mt-1 mr-1",
        percentage: 70
    },
    {
        id: 5,
        Icon: SiConfluence,
        name: "Confluence",
        className: "text-blue-500 text-xl mt-1 mr-1",
        percentage: 70
    },
    {
        id: 6,
        Icon: SiSlack,
        name: "Slack",
        className: "text-purple-500 text-xl mt-1 mr-1",
        percentage: 70
    },
]

export default function Skill() {
    return (
        <div className="flex justify-center" 
        style={{ minHeight: "100vh" }}
        >
            <div className="container mx-auto mt-20 w-[1200px]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
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
                  }}
                >
                <div className=" text-2xl font-semibold mx-6 mb-6 text-center text-white">My Software Development Skills</div>
                </motion.div>
                {/* <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }), 
                  }}> */}
                <div
                    className="px-4 md:grid md:grid-cols-6 md:grid-rows-6 gap-4"
                    style={{ minHeight: "90%" }}
                >
                  <motion.div
                  className="mb-4 md:mb-0 md:col-span-3 md:row-span-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }), 
                  }}>               
                        <div className=" bg-slate-200 w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Frontend Development
                            </div>
                            <div className="flex flex-wrap justify-center">
                                {frontendIconsArray.map(
                                    ({ id, Icon, name, className, percentage }) => (
                                        <div className="flex justify-evenly w-30 sm:w-40 m-2" key={id}>
                                            <div
                                                key={id}
                                                className="flex rounded-full p-1 pt-2 px-2 bg-slate-100"
                                            >
                                                <Icon className={className} />
                                                <span className="text-md">
                                                    {name}
                                                </span>
                                            </div>
                                            <ProgressCircle percentage={percentage}/>                                 
                                        </div>
                                    )
                                )}
                            </div>
                        </div>                   
                  </motion.div>   

                  <motion.div
                  className="mb-4 md:mb-0 md:col-span-3 md:row-span-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }), 
                  }}>              
                        <div className="  bg-slate-200 w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Design & Prototype
                            </div>
                            <div className="flex flex-wrap justify-center">
                                {designIconsArray.map(
                                    ({ id, Icon, name, className, percentage }) => (
                                        <div className="flex justify-evenly w-36 sm:w-40 m-2" key={id}>
                                            <div
                                                key={id}
                                                className="flex rounded-full p-1 pt-2 px-2 bg-slate-100"
                                            >
                                                <Icon className={className} />
                                                <span className="text-md ">
                                                    {name}
                                                </span>
                                            </div>
                                            <ProgressCircle percentage={percentage}/>                                 
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                  </motion.div>

                  <motion.div
                  className="mb-4 md:mb-0 md:col-span-3 md:row-span-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }), 
                  }}>   
                        <div className="  bg-slate-200 w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                DevOps & Cloud
                            </div>
                            <div className="flex flex-wrap justify-center">
                                {cloudIconsArray.map(
                                    ({ id, Icon, name, className, percentage }) => (
                                        <div className="flex justify-evenly w-36 sm:w-40 m-2" key={id}>
                                            <div
                                                key={id}
                                                className="flex rounded-full p-1 pt-2 px-2 bg-slate-100"
                                            >
                                                <Icon className={className} />
                                                <span className="text-md ">
                                                    {name}
                                                </span>
                                            </div>
                                            <ProgressCircle percentage={percentage}/>                                 
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                  </motion.div>  

                  <motion.div
                  className="mb-4 md:mb-0 md:col-span-3 md:row-span-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }), 
                  }}>   
                        <div className="  bg-slate-200 w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[70px] rounded-t-2xl px-2 pt-3 sm:pt-4 text-xl font-semibold">
                                Database & Backend Development
                            </div>
                            <div className="flex flex-wrap justify-center py-1">
                                {backendIconsArray.map(
                                    ({ id, Icon, name, className, percentage }) => (
                                        <div className="flex justify-evenly w-30 sm:w-40 m-1 sm:m-2" key={id}>
                                            <div
                                                key={id}
                                                className="flex rounded-full p-1 pt-2 px-1 sm:px-2 bg-slate-100"
                                            >
                                                <Icon className={className} />
                                                <span className="text-md ">
                                                    {name}
                                                </span>
                                            </div>
                                            <ProgressCircle percentage={percentage}/>                                 
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>  

                    <motion.div
                    className="mb-4 md:mb-0 md:col-span-3 md:row-span-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  custom={0}
                  variants={{
                    hidden: { opacity: 0, y: -5 },
                    visible: (i: number) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.3,
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }), 
                  }}>                 
                        <div className="  bg-slate-200 w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Collaboration tools
                            </div>
                            <div className="flex flex-wrap justify-center py-2">
                                {collaborationIconsArray.map(
                                    ({ id, Icon, name, className, percentage }) => (
                                        <div className="flex justify-evenly w-30 sm:w-40 m-1 sm:m-2" key={id}>
                                            <div
                                                key={id}
                                                className="flex rounded-full p-2 pt-2 px-1 sm:px-2 bg-slate-100"
                                            >
                                                <Icon className={className} />
                                                <span className="text-md ">
                                                    {name}
                                                </span>
                                            </div>
                                            <ProgressCircle percentage={percentage}/>                                 
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>  

                </div>

            </div>
        </div>
    );
}
