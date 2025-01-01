"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Journey() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      // Set the scroll position to the far right
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }, []);

    return (
        <div className="flex justify-center " style={{ minHeight: "100vh" }}>
            <div className="">
                <h1 className="text-3xl text-center font-semibold uppercase mt-20">
                    My Coding Journey
                </h1>
                <div className="mt-2 text-center">
                    This is the showcase of my experiences throughout this
                    coding journey.
                </div>
                <div ref={scrollContainerRef} className="w-[1200px] h-[600px] overflow-x-auto">
                <div className="relative w-[1600px]">
                    <div className="mt-10 py-4 ">
                        <div className="w-[1600px] bg-green-500 h-2"></div>
                    </div>

                    {/* spaceship */}
                    <div className="absolute top-0 right-[-7px]">
                        <Image
                            src="/spaceship.png"
                            alt="space rocket"
                            width={60}
                            height={60}
                        />
                    </div>

                    {/* bars */}
                    <div className="absolute top-2 left-[200px]">
                        <div className="flex w-[1200px] justify-between">
                            <div className="relative">
                                <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                <div className="absolute top-20 left-[-140px] z-10 bg-white w-[300px] h-[340px] border border-sm border-black rounded-2xl">
                                    <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                <div className="absolute top-20 left-[-140px] z-10 bg-white w-[300px] h-[340px] border border-sm border-black rounded-2xl">
                                    <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                <div className="absolute top-20 left-[-140px] z-10 bg-white w-[300px] h-[340px] border border-sm border-black rounded-2xl">
                                    <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className=" w-6 h-6 bg-slate-200 rounded-full"></div>
                                <div className="absolute top-4 left-2 -z-10 w-2 h-20 bg-gray-600"></div>
                                <div className="absolute top-20 left-[-140px] z-10 bg-white w-[300px] h-[340px] border border-sm border-black rounded-2xl">
                                    <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl"></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
