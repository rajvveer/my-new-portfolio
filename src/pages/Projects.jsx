import React from "react";
import Title from "../components/layouts/Title";
import {
  projectOne,
  projectThree,
  HaQademy,
  Lalit,
  Crypto,
  Chat,
  FM,
  Movie,
  QR,
  Youtube,
  drum,
  ToDo,
  Cal,
  Weather,
  twitter,
} from "../assets/index";
import ProjectsCard from "../components/projects/ProjectsCard";
import { Link } from "react-router-dom";
import { TfiArrowLeft } from "react-icons/tfi";

const Projects = () => {
  return (
    <>
      <div className="absolute top-5 right-[100%] left-5 text-[35px] p-[15px] cursor-pointer ">
        <Link to={"/"}>
          <TfiArrowLeft />
        </Link>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <section
          id="projects"
          className="w-full py-20 border-b-[1px] border-b-black"
        >
          <div className="flex justify-center items-center text-center">
            <Title
              title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
              des="My Projects"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            <ProjectsCard
              title="Full Stack Blog App"
              des="A complete full stack blog application made by using MERN with all the features like login, register, adding a blog,and others.
          Credentals:-temperoryemail777@gmail.com,
          pass:-901071ss,
        Read:-will take some time while loading beacuse backend is deloyed on render"
              src={projectOne}
              Link="https://frontend-tau-one-11.vercel.app/"
            />
            <ProjectsCard
              title="HaQademy Business website"
              des="A digital agency website made for my italian client with modern scroll anmations and a beautiful navbar."
              src={HaQademy}
              Link="https://relaxed-clafoutis-a0f5dc.netlify.app/"
            />
            <ProjectsCard
              title="Solar System"
              des="A complete 3d interactive Solar system made by using HTML,CSS,JS,Where a user can see the speed of plaets,with multiple filters."
              src={projectThree}
              Link="https://venerable-dieffenbachia-168c6a.netlify.app/"
            />
            <ProjectsCard
              title="Virtual Assistant"
              des="A virtual assistant completely made by using javascript.The assistant will do the task u ask it to do.Some promts u can ask it:-Open Instagram, open youtube etc.
          CAUTION:- It only wsorks in chrome'dont know why:)'"
              Link="https://658bebcb38826a3ef3269ac5--capable-gumdrop-ac172e.netlify.app/"
              src={Lalit}
            />
            <ProjectsCard
              title="FullStack ChatApp"
              des="A fullstack chat app made by using Reach as a frotend and nodeJs as backend and MongoDb.A app where user can chat with his friends and send emoji too!.
          Credentials:-Usename=NewTest,Pass=12345678"
              src={Chat}
              Link="https://public-gold-seven.vercel.app/"
            />
            <ProjectsCard
              title="Crypto App"
              des=" a web3 crypto application using Codegeeko api with modern price chart."
              src={Crypto}
              Link="https://65950145e4b44f630aed9baf--silver-blini-dfafcc.netlify.app/"
            />
            <ProjectsCard
              title="MovieSphere"
              des="A React marvel, showcasing my coding finesse. Elevating the movie experience with smooth UI, dynamic components, and flawless interactivity."
              src={Movie}
              Link="https://classy-puppy-edb497.netlify.app/"
            />
            <ProjectsCard
              title="QR-Code Generator"
              des="My QR-Code Generator creation in React, demonstrating technical expertise in crafting user-friendly interfaces and efficient code for seamless experiences."
              src={QR}
              Link="https://unique-bombolone-ad6113.netlify.app/"
            />
            <ProjectsCard
              title="Animated Landing Page"
              des="Animated Landing Page made by using framer motion and modern reveal animations."
              src={FM}
              Link="https://rainbow-puffpuff-09c8c6.netlify.app/"
            />

            <ProjectsCard
              title="YouTube Clone "
              des="A Youtube Clone application made by using ReactJs RapidApi Tailwing css."
              src={Youtube}
              Link="https://youtube-dusky-omega.vercel.app/"
            />
            <ProjectsCard
              title="DrumKit"
              des="DrrumKit made by using HTML,CSS,JS.Was a project of an udemy course."
              src={drum}
              Link="https://65a26b867f41e7ae742d3230--taupe-daffodil-ad65bb.netlify.app/"
            />
            <ProjectsCard
              title="ToDo List"
              des="Simple todo list which uses localstorage."
              src={ToDo}
              Link="https://65a52b835b3d31068cb97cb0--endearing-haupia-010d7c.netlify.app/"
            />
            <ProjectsCard
              title="Calculator"
              des="Just a Simple Calculator."
              src={Cal}
              Link="https://65a680a024fdb2009f7b6a4f--wondrous-lebkuchen-212d62.netlify.app/"
            />
            <ProjectsCard
              title="Weather App"
              des="Effortlessly track weather conditions with our React app powered by OpenWeather API. Intuitive design, real-time updates, and accurate forecasts at your fingertips."
              src={Weather}
              Link="https://65a68e66e5384f12da8ea37b--unique-wisp-7e5f74.netlify.app/"
            />

            <ProjectsCard
              title="Twitter Clone"
              des="A nextJs 13 Web application made by using prisma.Project is made with the help of CodeWithAntonio.
              Credentials:email:-test@gmail.com,pass:-12345678"
              src={twitter}
              Link="https://twitter-clone-master-eta.vercel.app/"
            />
            <ProjectsCard
              title="Analogclock"
              des="Handcrafted analog clock with HTML, CSS, and JS, seamlessly blending vintage aesthetics with modern web design for a timeless experience."
              src="https://rukminim2.flixcart.com/image/850/1000/j8uiljk0/table-clock/y/e/p/twin-bell-alarm-clock-with-night-light-8820s-oneklik-original-imaex2yt2cfhs5ay.jpeg?q=90&crop=false"
              Link="https://65abb5427077ff877a4d9722--comfy-marzipan-8b045a.netlify.app/"
            />
           
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
