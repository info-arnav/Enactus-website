import React, { useEffect , useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { teamMembers } from "../Database/Db";
import Card from "../Components/Card";
gsap.registerPlugin(useGSAP, ScrollTrigger);
// ScrollSmoother.create({
//   smooth: 1,
//   effects: true,
// });

const Team = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      // Check if the width has changed and reload the page
      if (newWidth !== windowWidth) {
        setWindowWidth(newWidth);
        window.location.reload(); // Reload the page
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // for large screen size
  if (windowWidth > 768) {
    useGSAP(() => {
      const tl = gsap.timeline();

      // Define common scrollTrigger settings
      const scrollTriggerConfig = {
        scrub: 1,
      };
      // Reset initial states
      tl.set("#presHeading", { scale: 1 });
      tl.set("#pres", { opacity: 0 });
      tl.set("#vpresHeading", { scale: 1 });
      tl.set("#vpres", { opacity: 0 });
      // pres heading
      tl.to("#presHeading", {
        scrollTrigger: {
          ...scrollTriggerConfig,
          trigger: "#presHeading",
          start: "top top",
          end: "10% top",
        },
        scale: 4,
        duration: 2,
      });

      // presidents
      tl.fromTo(
        "#pres",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            ...scrollTriggerConfig,
            trigger: "#presHeading",
            start: "7% top", // Starts when the `presHeading` animation ends
            end: "50% center",
          },
        },
      );

      // Fade out presidents
      tl.fromTo(
        "#pres",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            ...scrollTriggerConfig,
            trigger: "#vpresHeading",
            start: "20% center",
            end: "30% center",
          },
        },
      );

      // vice-presi heading
      tl.to("#vpresHeading", {
        scrollTrigger: {
          ...scrollTriggerConfig,
          trigger: "#vpresHeading",
          start: "-10% center",
          end: "10% top",
        },
        scale: 2,
        duration: 2,
      });

      // vice presidents
      tl.fromTo(
        "#vpres",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            ...scrollTriggerConfig,
            trigger: "#vpresHeading",
            start: "-8% top", // Starts when the `presHeading` animation ends
            end: "50% center",
          },
        },
      );

      // Fade out vice-presidents
      tl.fromTo(
        "#vpres",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            ...scrollTriggerConfig,
            trigger: "#vpres",
            start: "40% center",
            end: "70% center",
          },
        },
      );
    });
  }

  return (
    <div className="team-section text-gray-800 h-auto ">
      <div className=" md:block text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('../images/YellowBG.png')]">
        OUR TEAM
      </div>
      <div
        id="presHeading"
        className="-mt-56 text-center font-moderniz h-[100vh] flex flex-col justify-center items-center text-3xl "
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
        className=" -mt-52 text-center font-moderniz h-[100vh] flex flex-col justify-center items-center text-3xl "
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
