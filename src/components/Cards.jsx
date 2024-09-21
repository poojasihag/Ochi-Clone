import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute rounded-full px-5 py-1 border-2 border-[#b0c859] left-10 bottom-10 text-[#b0c859]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className=" card relative w-full h-full rounded-xl bg-[#192826]  flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute rounded-full px-5 py-1 border-2 left-10 bottom-10 text-zinc-100">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-full h-full rounded-xl bg-[#192826]  flex items-center justify-center ">
          {" "}
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute rounded-full px-5 py-1 border-2 left-10 bottom-10 text-zinc-100">
            BUSINESS BOOTCAMP ALLUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
