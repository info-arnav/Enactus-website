import partner_1 from "/images/partners/partner-1.jpeg";
import partner_2 from "/images/partners/partner-2.png";
import partner_3 from "/images/partners/partner-3.png";
import partner_4 from "/images/partners/partner-4.jpg";
import partner_5 from "/images/partners/partner-5.png";
import partner_6 from "/images/partners/partner-6.svg";

import team_home from "/images/hero-bg.jpeg";
import enactus_about from "/images/Enactus_about.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[40vh] md:h-[48vh] lg:h-[58vh] flex overflow-hidden items-center">
        <img
          src={team_home}
          alt="cover"
          className="w-full h-full object-cover absolute"
          style={{ transformOrigin: "center" }} // Ensures scaling happens from the center
        />
        {/* <div className="absolute top-0 w-full h-full bg-gradient-to-l from-neutral-950 to-transparent"></div> */}
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

      <div className="h-auto md:h-[44vh] lg:h-[38vh] w-full flex flex-col items-center justify-center px-4 md:px-8 py-8 gap-4 text-center">
        <h1 className="font-moderniz text-2xl md:text-4xl">WHAT IS ENACTUS</h1>
        <p className="text-sm md:text-lg text-[#1F1F1F] font-montserrat">
          Enactus is a network of leaders committed to using business as a
          catalyst for positive social and environmental impact. We educate,
          inspire, and support young people to use innovation and
          entrepreneurship to solve the world&apos;s biggest problems.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row h-[28vh] md:h-[34vh] lg:h-[38vh] relative">
        <div className="ease-in-out duration-300 transition-all hover:shadow-[inset_0_0_30px_rgba(0,0,0,1)] group flex-1 bg-[#FFCC00] md:py-0 relative overflow-hidden">
          <p className="ease-in-out duration-300 transition group-hover:opacity-0 opacity-1 font-moderniz text-enacblk absolute flex justify-center items-center text-center h-[100%] w-[100%]">
            UPLIFT
          </p>
          <p className="text-xs ease-in-out duration-300 transition opacity-0 group-hover:opacity-100 font-montserrat flex absolute text-enacblk justify-center items-center text-center h-[100%] w-[100%] px-4 bg-cover">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            excepturi officiis? Minus sequi dolor doloribus quis cupiditate
            dolorem nisi veniam culpa iste, aspernatur, vero reprehenderit! Quam
            doloribus facere amet mollitia.
          </p>
        </div>
        <div className="ease-in-out duration-300 transition hover:shadow-[inset_0_0_40px_rgba(0,0,0,1)] group flex-1 bg-[#484848] md:py-0 relative overflow-hidden">
          <p className="ease-in-out duration-300 transition group-hover:opacity-0 opacity-1 font-moderniz text-[#FFC000] absolute flex justify-center items-center text-center h-[100%] w-[100%]">
            ENACT
          </p>
          <p className="text-xs ease-in-out duration-300 transition opacity-0 group-hover:opacity-100 font-montserrat flex absolute text-white justify-center items-center text-center h-[100%] w-[100%] px-4 bg-cover">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            excepturi officiis? Minus sequi dolor doloribus quis cupiditate
            dolorem nisi veniam culpa iste, aspernatur, vero reprehenderit! Quam
            doloribus facere amet mollitia.
          </p>
        </div>
        <div className="ease-in-out duration-300 transition hover:shadow-[inset_0_0_30px_rgba(0,0,0,1)] group flex-1 bg-[#FFCC00] md:py-0 relative overflow-hidden">
          <p className="ease-in-out duration-300 transition group-hover:opacity-0 opacity-1 font-moderniz text-enacblk absolute flex justify-center items-center text-center h-[100%] w-[100%]">
            ADVANCE
          </p>
          <p className="text-xs ease-in-out duration-300 transition opacity-0 group-hover:opacity-100 font-montserrat flex absolute text-enacblk justify-center items-center text-center h-[100%] w-[100%] px-4 bg-cover">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            excepturi officiis? Minus sequi dolor doloribus quis cupiditate
            dolorem nisi veniam culpa iste, aspernatur, vero reprehenderit! Quam
            doloribus facere amet mollitia.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-center">
          <h1 className="font-moderniz text-2xl md:text-4xl w-full text-center">
            ABOUT US
          </h1>
          <p className="font-montserrat text-sm md:text-lg text-enacblk text-pretty text-justify">
            Enactus NSUT is a student-led organization dedicated to using
            entrepreneurial action and technology to uplift underserved
            communities and drive sustainable development. We develop impactful
            projects that tackle social challenges and create opportunities for
            growth, empowering marginalized groups. Through innovative tech
            solutions in education, healthcare, and financial inclusion, we aim
            to foster meaningful change and build a more inclusive, resilient
            society. Our initiatives improve lives and equip communities with
            the skills and resources needed to thrive in a rapidly changing
            world.
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
      <div className="flex mx-auto w-[90%] md:w-[90%] overflow-hidden select-none">
        <div className="flex items-center justify-around whitespace-nowrap w-full animate-tickerSlide">
          {[
            partner_1,
            partner_2,
            partner_3,
            partner_4,
            partner_5,
            partner_6,
          ].map((item, key) => {
            return (
              <div
                key={key}
                className="grid place-items-center w-[clamp(20rem,1rem+40vmin,40rem)] p-[calc(clamp(10rem,1rem+20vmin,20rem)/40)]"
              >
                <img
                  src={item}
                  className="object-contain w-full h-full rounded-xs aspect-video"
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-around whitespace-nowrap w-full animate-tickerSlide">
          {[
            partner_1,
            partner_2,
            partner_3,
            partner_4,
            partner_5,
            partner_6,
          ].map((item, key) => {
            return (
              <div
                key={key}
                className="grid place-items-center w-[clamp(20rem,1rem+40vmin,40rem)] p-[calc(clamp(10rem,1rem+20vmin,20rem)/40)]"
              >
                <img
                  src={item}
                  className="object-contain w-full h-full rounded-xs aspect-video"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
