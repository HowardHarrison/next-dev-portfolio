"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type StarType = {
  id: number;
  x: number;
  y: number;
  size: number;
  // speed: number;
  // driftX: number;
};

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

const generateStars = (count: number): StarType[] => {
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    // speed: Math.random() * 0.1 + 0.1,
    // driftX: Math.random() * 0.1 - 0.1,
  }));
};

const Star = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ width: size, height: size, top: `${y}vh`, left: `${x}vw` }}
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
  />
);  

export default function Intro() {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  // useAnimationFrame(() => {
  //   setStars((prevStars) =>
  //     prevStars.map((star) => {
  //       let newY = star.y + star.speed;
  //       let newX = star.x + star.driftX;
  //       if (newY > 100) newY = 0;
  //       if (newX > 100) newX = 0;
  //       if (newX < 0) newX = 100;
  //       return { ...star, x: newX, y: newY };
  //     })
  //   );
  // });

    return (
        <div>
          <div className="relative w-full h-screen bg-blue-950 overflow-hidden">
            {stars.map((star) => (
              <Star key={star.id} x={star.x} y={star.y} size={star.size} />
            ))}
            <div className="flex justify-center items-center w-full" style={{ minHeight: "100vh" }}>
            <div className="container mx-auto px-4 mt-20 sm:mt-0">
                <div className="mt-3 flex flex-wrap items-center">
                    <motion.div 
                      className="mx-auto w-3/4 sm:w-72 p-4 md:w-80 lg:w-96 z-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      custom={0}
                      variants={{
                        hidden: { opacity: 0, y: -35 },
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
                        <Image
                            src="/profile.jpg"
                            alt="Profile Image"
                            width={250}
                            height={250}
                            className="object-cover w-full h-full rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <div className="mx-auto w-full px-4 md:w-6/12 ">
                        <div className="md:pr-12 text-center md:text-left">
                        <motion.h3
                          className="text-3xl font-semibold text-slate-200"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          custom={0}
                          variants={textVariants}
                        >
                          Thurein Win Htun
                        </motion.h3>

                        <motion.p
                          className="mt-4 text-xl italic leading-relaxed text-slate-300"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          custom={0}
                          variants={textVariants}
                        >
                          Software Developer
                        </motion.p>

                        <motion.div
                          className="text-lg text-slate-300"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          custom={0}
                          variants={textVariants}
                        >
                          Welcome from portfolio website. I made this website to
                          share my experiences and achievements throughout my
                          coding journey.
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* <div className="max-w-[600px] text-center p-4">
        <div className="w-[250px] h-[250px] mx-auto rounded-full mb-3">
          <Image
          src="/profile.jpg" 
          alt="Profile Image"
          width={250}
          height={250}
          className="object-cover w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-3xl font-semibold mb-3">Thurein Win Htun</h1>
        <h2 className="text-2xl mb-3">Software Developer</h2>
        <p className='text-lg text-left mx-2'>
          I love to know how software is built so I always try building my own by following tutorials from online resources.
          I intended to show my personal projects and achievements throughout my coding journey but
          I am still working on it so you still won&apos;t see any cool stuff:P
        </p>
      
      </div> */}
        </div>
        </div>
    );
}
