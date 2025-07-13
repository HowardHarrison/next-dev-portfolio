"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  size: number;
  top: string;
  delay: number;
  duration: number;
}

interface YearType {
  id: number;
  year: number;
  image: string;
  description: string;
}

const years: YearType[] = [
  {
    id: 1,
    year: 2022,
    image: '/Journey/2022.png',
    description: 'The first time I kept in touch with web development was through HTML tutorial videos from the M Square Programming YouTube channel. I gained more knowledge and understanding of JavaScript from A to Z course of Code Lab but I didn&apos;t finish the course because I decided to learn React.js and Node.js from Freecodecamp. I made many mistakes and got many lessons from the first year of my coding journey.'
  },
  {
    id: 2,
    year: 2023,
    image: '/Journey/2023.png',
    description: 'I was experiencing a lot in my second year. I have already done many projects with React.js. I started to volunteer at an organization called Conceptians. I have met a lot of young and enthusiastic developers there. We made a website for Conceptians and I participated by making some of the interactive parts. I kept on learning new tech stacks on the other hand.'
  },
  {
    id: 3,
    year: 2024,
    image: '/Journey/2024.jpg',
    description: 'I got an internship in this year. Although I spent nearly two years in web development, I had to work initially as a mobile developer with the Flutter framework. After gaining experience with creating mobile e-commerce apps, I was switched to full-stack development. I have already done four projects there. While I was working, I was also pursuing a Diploma in Web Development on the other hand. I completed it with distinction in October.'
  },
  {
    id: 4,
    year: 2025,
    image: '',
    description: 'I decided to work on my projects while I am currently working from home. I haven\'t done many particular things yet and there are still a lot of project ideas I need to build it practically.'
  },
]

export default function Journey() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const scrollContainer = scrollContainerRef.current;

      if (scrollContainer) {
          // Set the scroll position to the far right
          scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth - 70;
      }
  }, []);

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 50 }).map((_, index) => ({
      id: index,
      size: Math.random() * 3 + 1, // Random star size
      top: Math.random() * 100 + "vh", // Random vertical position
      delay: Math.random() * 5, // Random delay
      duration: Math.random() * 10 + 5, // Random speed
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="relative w-full h-screen overflow-hidden bg-blue-950">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
            }}
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: "-10vw", opacity: 1 }}
            transition={{
              duration: star.duration,
              ease: "linear",
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
        <div className="">
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
            <h1 className="text-3xl text-center text-white font-semibold uppercase mt-20 mx-2">
              My Coding Journey
            </h1>
            <div className="mt-2 mx-2 text-center text-slate-300">
              This is the showcase of my experiences throughout this
              coding journey.
            </div>
          </motion.div>

          <div className="w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={0}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.3,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                }),
              }}
            >
              <div className="flex justify-center">
                <div
                  ref={scrollContainerRef}
                  className="w-screen sm:w-[550px] md:w-[800px] lg:w-[1100px] h-[600px] overflow-x-auto ml-3"
                >
                  <div className="relative w-[1600px] my-2">
                    <div className="mt-10 py-4">
                      <div className="w-[1600px] bg-green-500 h-2"></div>
                    </div>

                    {/* spaceship */}
                    {/* <div className="absolute top-0 right-[-7px]">
                        <Image
                            src="/spaceship.png"
                            alt="space rocket"
                            width={60}
                            height={60}
                        />
                        </div> */}

                    {/* bars */}
                    <div className="absolute top-2 left-[200px]">
                      <div className="flex w-[1200px] justify-between">
                        {years.map((year) => (
                          <div className="relative" key={year.id}>
                            <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                            <div className="absolute top-4 left-2 w-2 h-24 bg-slate-200"></div>
                            <div className="absolute top-20 left-[-140px] bg-slate-200 w-[280px] h-[320px] sm:w-[300px] sm:h-[340px] border border-sm border-black rounded-2xl ">
                              <div className="w-full bg-slate-300 h-[40px] sm:h-[60px] rounded-t-2xl">
                                <div className="font-semibold text-2xl w-full h-full flex justify-center items-center">{year.year}</div>
                              </div>

                              <div className="h-[250px] sm:h-[270px] overflow-y-auto">
                                <div className="bg-slate-500 w-full h-[150px]">
                                  {year.image &&
                                    <Image
                                      src={year.image}
                                      alt="image"
                                      width={100}
                                      height={150}
                                      className="w-full h-full"
                                    />
                                  }
                                </div>
                                <div className="p-1 m-1 bg-slate-200">
                                  {year.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-10 sm:mt-9 mr-3">
                  <Image
                    src="/spaceship.png"
                    alt="space rocket"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
