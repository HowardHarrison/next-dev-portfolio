import Slideshow from "../components/Slideshow";

export default function Certificate() {
    return (
        <div className="flex justify-center items-center" 
         style={{ minHeight: "100vh" }}
        >
            <div className="container mx-auto mt-20">
                <div
                    className="flex flex-wrap md:grid md:grid-cols-2 md:grid-rows-1 md:gap-2 mx-3 mb-10"
                    //className="flex flex-wrap "
                    // style={{ minHeight: "90%" }}
                >
                    <div className="md:row-span-1 md:col-span-1 p-5">
                        <div className="text-3xl font-semibold mt-5 mb-5 text-white">Certificate</div>
                        <div className="text-slate-300">These are the certificate I get from freecodecamp and sololearn. I learned web development and programming from those free online resources.You can slide throught to see every  certifications. I add the link below to check out the  validation in original resources.</div>
                    </div>

                    <div className=" md:row-span-1 md:col-span-1 w-full md:h-full">
                    {/* row-span-2 col-span-1 */}
                      <Slideshow/>
                    </div>
                </div>
            </div>
        </div>
    );
}
