import React from 'react'
import  bannerImg  from "../../assets/images/contact/pngwing.com.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-inherit flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner