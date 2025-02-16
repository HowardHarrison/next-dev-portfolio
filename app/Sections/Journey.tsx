"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Journey() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            // Set the scroll position to the far right
            scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth - 70;
        }
    }, []);

    return (
        <div className="flex justify-center items-center" 
        style={{ minHeight: "100vh" }}
        >
            <div className="">
                <h1 className="text-3xl text-center font-semibold uppercase mt-20 mx-2">
                    My Coding Journey
                </h1>
                <div className="mt-2 mx-2 text-center">
                    This is the showcase of my experiences throughout this
                    coding journey.
                </div>

                <div className="flex">
                <div
                    ref={scrollContainerRef}
                    className="w-screen sm:w-[550px] md:w-[800px] lg:w-[1100px] h-[600px] overflow-x-auto"
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
                                <div className="relative">
                                    <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                    <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                    <div className="absolute top-20 left-[-140px] z-10 bg-white w-[280px] h-[320px] sm:w-[300px] sm:h-[340px] border border-sm border-black rounded-2xl ">
                                        <div className="w-full bg-slate-300 h-[40px] sm:h-[60px] rounded-t-2xl">
                                            <div className="font-semibold text-2xl w-full h-full flex justify-center items-center">2022</div>
                                            
                                        </div>
                                        <div className="p-1 h-[250px] sm:h-[270px] overflow-y-auto">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maxime enim, maiores asperiores omnis aliquam adipisci quia autem quam reprehenderit?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laborum alias? Velit delectus laborum ex voluptatibus vitae! Provident sequi quidem aliquid! Debitis illum eveniet ex nihil! Unde natus architecto nemo voluptatibus hic harum esse sunt cumque minima nisi. Reprehenderit, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque doloribus dolores. A qui nihil libero. Ullam minima accusantium laudantium?</div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                    <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                    <div className="absolute top-20 left-[-140px] z-10 bg-white w-[280px] h-[320px] sm:w-[300px] sm:h-[340px] border border-sm border-black rounded-2xl">
                                        <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                    <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                    <div className="absolute top-20 left-[-140px] z-10 bg-white w-[280px] h-[320px] sm:w-[300px] sm:h-[340px] border border-sm border-black rounded-2xl">
                                        <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                    <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                    <div className="absolute top-20 left-[-140px] z-10 bg-white w-[280px] h-[320px] sm:w-[300px] sm:h-[340px] border border-sm border-black rounded-2xl">
                                        <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                        <div></div>
                                    </div>
                                </div>
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
            </div>
        </div>
    );
}
