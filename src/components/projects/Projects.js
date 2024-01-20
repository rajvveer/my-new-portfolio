import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree,HaQademy,Lalit,Crypto,Chat, Youtube, twitter } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
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
          Link = "https://frontend-tau-one-11.vercel.app/"
        />
        <ProjectsCard
          title="HaQademy Business website"
          des="A digital agency website made for my italian client with modern scroll anmations and a beautiful navbar."
          src={HaQademy}
          Link="https://relaxed-clafoutis-a0f5dc.netlify.app/"
        />
        <ProjectsCard
              title="YouTube Clone "
              des="A Youtube Clone application made by using ReactJs RapidApi Tailwing css."
              src={Youtube}
              Link="https://youtube-dusky-omega.vercel.app/"
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
          Link='https://public-gold-seven.vercel.app/'
        />
        <ProjectsCard
              title="Twitter Clone"
              des="A nextJs 13 Web application made by using prisma.Project is made with the help of CodeWithAntonio.
              Credentials:email:-test@gmail.com,pass:-12345678"
              src={twitter}
              Link="https://twitter-clone-master-eta.vercel.app/"
            />
      </div>
      <h1 className="text-center mt-[2.5rem] text-[30px] font-sans ">Browse all my projects portfolio <Link className="text-green-300" to={'/projects'}>here</Link></h1>
    </section>
  );
};

export default Projects;
