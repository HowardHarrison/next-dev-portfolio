export default function Skill() {
    return (
        <div className="flex justify-center " style={{ minHeight: "100vh" }}>
            <div className="container mx-auto mt-20">
                <div
                    className="grid grid-cols-6 grid-rows-6 gap-4"
                    style={{ minHeight: "90%" }}
                >
                    {/* left side */}
                    <div className="col-span-3 row-span-3">
                        <div className="  bg-white w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Frontend Development
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div className="col-span-3 row-span-2">
                        <div className="  bg-white w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Design & Prototype
                            </div>{" "}
                            <div></div>
                        </div>
                    </div>

                    <div className="col-span-3 row-span-2">
                        <div className="  bg-white w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                DevOps & Cloud
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div className="col-span-3 row-span-3">
                        <div className="  bg-white w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Database & Backend Development
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div className="col-span-3 row-span-2">
                        <div className="  bg-white w-full h-full border border-sm border-black rounded-2xl">
                            <div className="w-full bg-slate-300 h-[60px] rounded-t-2xl px-2 pt-4 text-xl font-semibold">
                                Collaboration tools
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
