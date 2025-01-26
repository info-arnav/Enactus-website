import partner_1 from "/images/partners/partner-1.jpeg";
import partner_2 from "/images/partners/partner-2.png";
import partner_3 from "/images/partners/partner-3.png";
import partner_4 from "/images/partners/partner-4.png";
import partner_5 from "/images/partners/partner-5.png";
import partner_6 from "/images/partners/partner-6.svg";
import partner_7 from "/images/partners/partner-7.png";
import partner_8 from "/images/partners/partner-8.png";
import partner_9 from "/images/partners/partner-9.png";
import partner_10 from "/images/partners/partner-10.png";

import team_home from "/images/team_home.png";
import enactus_about from "/images/Enactus_about.jpg";
import Marquee from "react-marquee-slider";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[40vh] md:h-[48vh] lg:h-[55vh] flex items-center">
      <div className="relative w-full h-[40vh] md:h-[48vh] lg:h-[55vh] flex items-center">
        <img
          src={team_home}
          alt="cover"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>

        <div className="h-1/4 md:h-1/3 lg:h-1/2 w-full relative flex flex-col items-start justify-around text-white font-bold text-2xl md:text-4xl lg:text-6xl gap-2 px-2 font-moderniz">
          <div>
            <span className="text-yellow-500">En</span>trepreneurial
          </div>
          <div>
            <span className="text-yellow-500">Act</span>ion
          </div>
          <div>
            <span className="text-yellow-500">US</span>
          </div>
        </div>
      </div>

      <div className="h-auto md:h-[30vh] lg:h-[38vh] w-full flex flex-col items-center justify-center px-4 md:px-8 py-8 gap-4 text-center">
      <div className="h-auto md:h-[30vh] lg:h-[38vh] w-full flex flex-col items-center justify-center px-4 md:px-8 py-8 gap-4 text-center">
        <h1 className="font-moderniz text-2xl md:text-4xl">WHAT IS ENACTUS</h1>
        <p className="text-sm md:text-lg text-[#1F1F1F] font-montserrat">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          distinctio explicabo sint facere similique cupiditate nisi laudantium
          expedita praesentium natus, earum repudiandae repellat. Assumenda
          vero, iste obcaecati ipsa eligendi sit?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          distinctio explicabo sint facere similique cupiditate nisi laudantium
          expedita praesentium natus, earum repudiandae repellat. Assumenda
          vero, iste obcaecati ipsa eligendi sit?
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row h-[28vh] md:h-[34vh] lg:h-[38vh] relative">
        <div className="ease-in-out duration-300 transition-all hover:shadow-[inset_0_0_30px_rgba(0,0,0,1)] group flex-1 bg-[#FFCC00] md:py-0 relative overflow-hidden">
          <p className="ease-in-out duration-300 transition group-hover:opacity-0 opacity-1 font-moderniz text-enacblk absolute flex justify-center items-center text-center h-[100%] w-[100%]">
            UPLIFT
          </p>
          <p className="text-xs ease-in-out duration-300 transition opacity-0 group-hover:opacity-100 font-montserrat flex absolute text-enacblk justify-center items-center text-center h-[100%] w-[100%] px-4 bg-cover">
            Elevating lives and fostering hope—at Enactus, we empower
            communities to overcome challenges through innovative, sustainable
            solutions, paving the way for shared progress and brighter futures.
          </p>
        </div>
        <div className="ease-in-out duration-300 transition hover:shadow-[inset_0_0_40px_rgba(0,0,0,1)] group flex-1 bg-[#484848] md:py-0 relative overflow-hidden">
          <p className="ease-in-out duration-300 transition group-hover:opacity-0 opacity-1 font-moderniz text-[#FFC000] absolute flex justify-center items-center text-center h-[100%] w-[100%]">
            ENACT
          </p>
          <p className="text-xs ease-in-out duration-300 transition opacity-0 group-hover:opacity-100 font-montserrat flex absolute text-white justify-center items-center text-center h-[100%] w-[100%] px-4 bg-cover">
            Turning ideas into impact—Enactus transforms challenges into
            opportunities with purpose-driven actions, blending entrepreneurship
            and social commitment to drive meaningful change.
          </p>
        </div>
        <div className="ease-in-out duration-300 transition hover:shadow-[inset_0_0_30px_rgba(0,0,0,1)] group flex-1 bg-[#FFCC00] md:py-0 relative overflow-hidden">
          <p className="ease-in-out duration-300 transition group-hover:opacity-0 opacity-1 font-moderniz text-enacblk absolute flex justify-center items-center text-center h-[100%] w-[100%]">
            ADVANCE
          </p>
          <p className="text-xs ease-in-out duration-300 transition opacity-0 group-hover:opacity-100 font-montserrat flex absolute text-enacblk justify-center items-center text-center h-[100%] w-[100%] px-4 bg-cover">
            Building tomorrow today—Enactus advances communities through
            innovation, mentorship, and leadership, equipping changemakers to
            shape a resilient, sustainable future.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-center">
          <h1 className="font-moderniz text-2xl md:text-4xl w-full text-center">
            ABOUT US
          </h1>
          <p className="font-montserrat text-sm md:text-lg text-enacblk">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            excepturi officiis? Minus sequi dolor doloribus quis cupiditate
            dolorem nisi veniam culpa iste, aspernatur, vero reprehenderit! Quam
            doloribus facere amet mollitia.
          </p>
        </div>
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
          <img
            src={enactus_about}
            alt=""
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
      </div>
      <h1 className="font-moderniz text-2xl md:text-4xl w-full text-center">
        PARTNERS
      </h1>
      <Marquee velocity={25}>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_1}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_2}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_8}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_4}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_5}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_6}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_7}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_3}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_9}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
        <div className="grid-row place-items-center w-[clamp(10rem,1rem+20vmin,20rem)] p-[calc(clamp(5rem,1rem+20vmin,20rem)/10)]">
          <img
            src={partner_10}
            className="object-contain w-full h-full rounded-xs aspect-video"
          />
        </div>
      </Marquee>
    </>
  );
}
