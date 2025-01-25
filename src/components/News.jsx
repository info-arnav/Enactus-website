import { slides } from "../Database/news.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
export default function News() {
  return (
    <>
      <div className="flex w-[70%] mx-auto mt-[40px] md:mt-[80px]">
        {slides.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col justify-center bg-white shadow-xl p-6"
            >
              <img src={item.image} className="cover w-[100%]" />
              <div className="flex flex-col items-center">
                <h2 className="py-4 font-bold text-sm md:text-xl font-lemonmilk">
                  {item.sub}
                </h2>
                <p className="text-[10px] md:text-sm font-montserrat">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
