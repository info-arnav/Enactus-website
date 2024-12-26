import React, { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
// ScrollSmoother.create({
//   smooth: 1,
//   effects: true,
// });
const Card=({member,index})=>{
  return (
    <div
      key={index}
      className="h-auto w-full max-w-[90vw] sm:max-w-[45vw] lg:max-w-[30vw] relative flex justify-center flex-col text-left bg-red-700 rounded-2xl overflow-hidden transform transition hover:shadow-lg mx-auto"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-[60vh] lg:h-[56vh] object-cover object-center"
      />
      <div className="absolute inset-0 p-4 text-left font-moderniz flex flex-col justify-end items-start bg-opacity-50 text-white">
        <div className="bg-white p-3 rounded-md bg-opacity-75 transition hover:bg-opacity-100">
          <h3 className="text-lg font-semibold text-enacblk">{member.name}</h3>
          <p className="text-yellow-500 text-sm mb-2">{member.role}</p>
          <p className="text-xs text-zinc-700">{member.description}</p>
          <div className="flex justify-start items-center space-x-5 text-gray-200 mt-3 w-full h-auto">
            <FacebookIcon
              className="text-blue-600 scale-125"
              onClick={() => {
                window.open(member.facebook);
              }}
            />
            <InstagramIcon
              className="text-pink-500 scale-110"
              onClick={() => {
                window.open(member.instagram);
              }}
            />
            <XIcon
              className="text-black"
              onClick={() => {
                window.open(member.twitter);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Team = () => {

 if(window.innerWidth>768){
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

  const teamMembers = [
    {
      name: "Alice Smith",
      role: "Frontend Developer",
      description:
        "Passionate about creating intuitive user interfaces and seamless user experiences.",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/alice.smith",
      instagram: "https://www.instagram.com/alice.smith",
      twitter: "https://www.twitter.com/alice_smith",
      github: "https://www.github.com/alicesmith",
    },
    {
      name: "Bob Johnson",
      role: "Backend Developer",
      description:
        "Specializes in creating efficient and scalable backend systems.",
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/bob.johnson",
      instagram: "https://www.instagram.com/bob.johnson",
      twitter: "https://www.twitter.com/bob_johnson",
      github: "https://www.github.com/bobjohnson",
    },
    {
      name: "Charlie Davis",
      role: "DevOps Engineer",
      description:
        "Expert in automating and optimizing infrastructure for cloud-based applications.",
      image:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/charlie.davis",
      instagram: "https://www.instagram.com/charlie.davis",
      twitter: "https://www.twitter.com/charliedavis",
      github: "https://www.github.com/charliedavis",
    },
    // {
    //   name: "Dana Evans",
    //   role: "UI/UX Designer",
    //   description:
    //     "Combines creative design with user research to create visually appealing and user-friendly interfaces.",
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    //   facebook: "https://www.facebook.com/dana.evans",
    //   instagram: "https://www.instagram.com/dana.evans",
    //   twitter: "https://www.twitter.com/danaevans",
    //   github: "https://www.github.com/danaevans",
    // },
    // {
    //   name: "Evan Thomas",
    //   role: "Data Scientist",
    //   description:
    //     "Skilled in machine learning and data analysis, focusing on extracting insights from complex data sets.",
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3",
    //   facebook: "https://www.facebook.com/evan.thomas",
    //   instagram: "https://www.instagram.com/evan.thomas",
    //   twitter: "https://www.twitter.com/evanthomas",
    //   github: "https://www.github.com/evanthomas",
    // },
    // {
    //   name: "Fiona Lewis",
    //   role: "Project Manager",
    //   description:
    //     "Expert in agile methodologies and project management, ensuring timely and efficient delivery of projects.",
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    //   facebook: "https://www.facebook.com/fiona.lewis",
    //   instagram: "https://www.instagram.com/fiona.lewis",
    //   twitter: "https://www.twitter.com/fionalewis",
    //   github: "https://www.github.com/fionalewis",
    // },
  ];

  return (
    <div className="team-section text-gray-800 h-auto ">
       <div className="hidden md:block text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('../images/YellowBG.png')]">
        OUR TEAM
      </div>
      <div
        id="presHeading"
        className=" text-center font-moderniz h-[100vh] flex flex-col justify-center items-center text-3xl "
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
