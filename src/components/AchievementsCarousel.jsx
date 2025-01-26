/* eslint-disable react/prop-types */
import { slides } from "../Database/achievements.json";
import "./AchievementsCarousel.css";
import "/node_modules/swiper/swiper-bundle.min.css";
export default function CarouselComplete({ screenWidth }) {
  return (
    <>
      <div className="w-[300px] md:w-[700px] mx-auto mt-[20px]">
        <Slider {...settings}>
          {slides.map((item, idx) => {
            return (
              <div
                className="border-4 p-3 md:p-6 border-black rounded-xl "
                key={idx}
              >
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    className="cover w-[100%] border-4 border-black rounded-xl"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2 className="py-4 md:py-8 font-bold text-lg md:text-xl font-lemonmilk">
                    {item.sub}
                  </h2>
                  <p className="text-xs font-montserrat">{item.text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
