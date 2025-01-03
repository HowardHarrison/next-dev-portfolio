import Navbar from "../components/Navbar";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Intro from "./Intro";
import Journey from "./Journey";
import Skill from "./Skill";

export default function Index() {
    return (
        <div>
            <Navbar />
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
                <section className="snap-start">
                    <Intro />
                </section>
                <section className="snap-start">
                    <Journey />
                </section>
                <section className="snap-start">
                    <Skill />
                </section>
                <section className="snap-start">
                    <Certificate/>
                </section>
                <section className="snap-start">
                    <Contact/>
                </section>
            </div>
        </div>
    );
}
