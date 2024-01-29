import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Features from "../components/features/Features";
import Resume from "../components/resume/Resume";
import Projects from "../components/projects/Projects";
import Testimonial from "../components/tesimonial/Testimonial";
import Contact from "../components/contact/Contact";
import FooterBottom from "../components/footer/FooterBottom";
import "../index.css";
import Fade, { Flip, Reveal, Roll, Rotate, Zoom } from "react-reveal";
import Spin from "react-reveal/Spin";

function Home() {
  return (
    <>
      <div className="w-full h-auto bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-lightText px-4">
       
          {" "}
          <Navbar />
        <div className="max-w-screen-xl mx-auto">
          
            <Banner />
          <Zoom duration={1500}>
          {/* <Fade top> */}
          <Features /></Zoom>
          {/* </Fade> */}
          <Fade left>
           <Resume /></Fade>
          <Fade right>
            <Projects />
          </Fade>
          <Fade top>
            <Testimonial />
          </Fade>
          <Fade bottom>
            <Contact /></Fade>
          <FooterBottom />
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Home;
