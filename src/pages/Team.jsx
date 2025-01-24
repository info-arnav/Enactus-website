import React, { useEffect , useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { teamMembers } from "../Database/Db";
import Card from "../components/Card.jsx";
gsap.registerPlugin(useGSAP, ScrollTrigger);
// ScrollSmoother.create({
//   smooth: 1,
//   effects: true,
// });

const Team = () => {




  return (
    <div className="team-section text-gray-800 h-auto ">
      <div className=" md:block text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('/images/YellowBG.png')]">
        OUR TEAM
      </div>
      <div
        id="presHeading"
        className="-mt-56 text-center font-moderniz h-[100vh] flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-8xl"
      >
        PRESIDENTS
      </div>
      <div
        id="pres"
        className="  -mt-56 text-center font-moderniz h-auto relative items-center "
      >
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 h-auto w-full mx-auto items-center justify-center p-8">
          {teamMembers.map((member, index) => (
            <Card member={member} index={index} />
          ))}
        </div>
      </div>
      <div
        id="vpresHeading"
        className=" -mt-52 text-center font-moderniz h-[100vh] flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-8xl "
      >
        VICE PRESIDENT
      </div>

      <div
        id="vpres"
        className="-mt-56 text-center font-moderniz h-auto relative items-center "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 h-auto w-full mx-auto items-center justify-center p-8">
          {teamMembers.map((member, index) => (
            <Card member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
