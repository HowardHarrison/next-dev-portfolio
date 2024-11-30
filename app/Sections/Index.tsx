import Intro from "./Intro";
// import Projects from "./Projects";

export default function Index() {
    return(
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <section className="snap-start">
                <Intro/>
            </section>
            {/* <section className="snap-start">
                <Projects/>
            </section> */}
        </div>
    )
}