import React from 'react'
import { FaInstagram,FaGithub  } from "react-icons/fa";
import  contactImg  from "../../assets/images/istockphoto-1168945108-612x612.jpg";
import { SiFiverr } from "react-icons/si";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-4 lgl:p-8 rounded-lg shadow-inner flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rajveer</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Please feel free to reach out to me using the contact information provided below or through the contact form.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6377768852</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rajveershekhawat626@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="https://www.instagram.com/rajveerr_shekhawat/?hl=en">
            <span className="bannerIcon">
              <FaInstagram />
            </span></a>
            <a href="https://github.com/rajvveer">
            <span className="bannerIcon">
              <FaGithub />
            </span></a>
            <a href="https://www.fiverr.com/chiranjeev55?up_rollout=true">
            <span className="bannerIcon">
              <SiFiverr />
            </span></a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft