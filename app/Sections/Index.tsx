import Navbar from "../components/Navbar";
import Intro from "./Intro";
import Journey from "./Journey";

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
            </div>
        </div>
    );
}
