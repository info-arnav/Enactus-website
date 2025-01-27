import CarouselComplete from "../components/AchievementsCarousel.jsx";
import { slides } from "../Database/news.json";
import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
export default function Achievements() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showcase, setShowcase] = useState([]);
  useEffect(() => {
    if (screenWidth < 768) {
      setShowcase(slides.slice(0, 1));
    } else {
      setShowcase(slides.slice(0, 4));
    }
  }, [screenWidth]);
  return (
    <>
      <div className="text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('/images/YellowBG.png')]">
        OUR ACHIEVEMENTS
      </div>
      <CarouselComplete screenWidth={screenWidth} />
      <div className="flex gap-8 w-[90%] mx-auto mt-[40px] md:mt-[80px] justify-center">
        {showcase.map((item, idx) => {
          return <InstagramEmbed url={item.link} captioned key={idx} />;
        })}
      </div>
    </>
  );
}
