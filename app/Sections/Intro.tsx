import Image from "next/image";

export default function Intro() {
    return (
        <div
            className="flex justify-center items-center w-full"
            style={{ minHeight: "100vh" }}
        >
            <div className="container mx-auto px-4 mt-20 sm:mt-0">
                <div className="mt-3 flex flex-wrap items-center">
                    <div className="mx-auto w-3/4 sm:w-72 p-4 md:w-80 lg:w-96">
                        <Image
                            src="/profile.jpg"
                            alt="Profile Image"
                            width={250}
                            height={250}
                            className="object-cover w-full h-full rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="mx-auto w-full px-4 md:w-6/12 ">
                        <div className="md:pr-12 text-center md:text-left">
                            <h3 className="text-3xl font-semibold">
                                Thurein Win Htun
                            </h3>

                            <p className="mt-4 text-xl italic leading-relaxed text-gray-800">
                                Software Developer
                            </p>

                            <div className="text-lg">
                                {" "}
                                I love to know how software is built so I always
                                try building my own by following tutorials from
                                online resources. I intended to show my personal
                                projects and achievements throughout my coding
                                journey but I am still working on it so you
                                still won&apos;t see any cool stuff:P
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
    );
}
