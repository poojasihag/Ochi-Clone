import React from "react";

const About = () => {
  return (
    <div  data-scroll data-scroll-speed=".1" className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
      <h1 className="font-['Neue_Montreal'] text-4xl leading-[4.5vw] tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our aproach : </h1>
          <button className="flex gap-10 uppercase items-center  px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More{" "}<div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
      .
    </div>
  );
};

export default About;
