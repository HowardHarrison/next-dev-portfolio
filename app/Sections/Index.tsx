import Head from "next/head";
import Navbar from "../components/Navbar";
// import Certificate from "./Certificate";
// import Contact from "./Contact";
import Intro from "./Intro";
// import Journey from "./Journey";
// import Skill from "./Skill";

export default function Index() {
    return (
        <div>
            <Head>
  <meta name="keywords" content="Next.js, SEO, React, JavaScript" />
  <meta name="author" content="Thurein Win Htun" />
  <meta property="og:title" content="Portfolio | Thurein Win Htun" />
  <meta property="og:description" content="This is the portfolio website I made to showcase my skills and coding journey." />
  <meta property="og:image" content="/profile.jpg" />
  <meta property="og:url" content="https://thurein-dev-portfolio.vercel.app" />
</Head>
            <Navbar />
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
                <section id='home' className="snap-start">
                    <Intro />
                </section>
                 {/* <section id='journey' className="snap-start">
                    <Journey />
                </section>
                <section id='skills' className="snap-start">
                    <Skill />
                </section> */}
                {/* <section id='certificates' className="snap-start">
                    <Certificate/>
                </section>
                <section id='contact' className="snap-start">
                    <Contact/>
                </section> */}
            </div>
        </div>
    );
}
