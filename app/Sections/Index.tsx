import Navbar from "../components/Navbar";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Intro from "./Intro";
import Journey from "./Journey";
 import Skill from "./Skill";

export default function Index() {
    return (
        <div className="bg-blue-950">
            <Navbar />
            <div className="md:snap-y md:snap-mandatory h-screen md:overflow-y-scroll bg-blue-950">
                <section id='home' className="md:snap-start bg-blue-950">
                    <Intro />
                </section>
                  <section id='journey' className="md:snap-start bg-blue-950">
                    <Journey />
                </section>
                <section id='skills' className="md:snap-start bg-blue-950">
                    <Skill />
                </section>
                <section id='certificates' className="md:snap-start bg-blue-950">
                    <Certificate/>
                </section>
                <section id='contact' className="md:snap-start bg-blue-950">
                    <Contact/>
                </section>
            </div>
        </div>
    );
}
