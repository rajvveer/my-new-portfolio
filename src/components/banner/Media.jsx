import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaInstagram,FaGithub   } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media