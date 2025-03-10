import Link from "next/link";
import { SiFacebook, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";

export default function Contact() {
    return (
        <div className="h-[100px] w-full" 
        // style={{ minHeight: "70px" }}
        >
            <div className="mx-auto py-3 bg-slate-900">
                <div className="mx-auto text-3xl font-semibold text-center text-white">
                    Contact me
                </div>
                <div className="mx-auto  text-center w-3/5 my-5 text-slate-300">
                    I like to make friends with people who share similar interests so
                    feel free to follow my account on social media platforms.
                    Let&apos;s share our knowledge and experiences.
                </div>
                <div className="bg-slate-200 w-2/6 h-1 mx-auto my-5"></div>
                <div className="w-3/5 sm:w-2/6 mx-auto mt-5 mb-2 flex justify-around">
                    <div className="w-8">
                        <Link
                            href="https://www.facebook.com/profile.php?id=100058734147054"
                            target="_blank"
                        >
                        <SiFacebook className="text-3xl text-white"/>
                        </Link>
                    </div>
                    <div className="w-8">
                        <Link
                            href="https://github.com/HowardHarrison"
                            target="_blank"
                        >
                        <SiGithub className="text-3xl text-white"/>
                        </Link>
                    </div>               
                    <div className="w-8">
                        <Link
                            href="https://leetcode.com/u/HowardHarrison/"
                            target="_blank"
                        >
                        <SiLeetcode className="text-3xl text-white"/>    
                        </Link>
                    </div>
                    <div className="w-8">
                        <Link
                            href="https://www.linkedin.com/in/thurein-win-htun-98235a221/"
                            target="_blank"
                        >
                        <SiLinkedin  className="text-3xl text-white"/>    
                        </Link>
                    </div>             
                </div>
            </div>
        </div>
    );
}
