import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "UI Designer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">console.log("Welcome!");
</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Rajveer</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate web developer dedicated to transforming ideas into
          digital realities. With a strong foundation in coding and a creative
          mindset, I craft innovative and user-friendly websites that leave a
          lasting impact. Let's build something extraordinary together!
        </p>
        <h2 className="font-extrabold text-white">Hire me <a className="text-green-300" href="https://www.fiverr.com/chiranjeev55/full-stack-web-developement" >here</a></h2>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
