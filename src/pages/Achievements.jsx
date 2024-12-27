import CarouselComplete from "../components/AchievementsCarousel";
import News from "../components/News";
export default function Achievements() {
  return (
    <>
      <div className="text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('../images/YellowBG.png')]">
        OUR ACHIEVEMENTS
      </div>
      <CarouselComplete />
      <News />
    </>
  );
}
