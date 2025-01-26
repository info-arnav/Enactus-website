/* eslint-disable react/prop-types */
import { slides } from "../Database/achievements.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AchievementsCarousel.css";
import "/node_modules/swiper/swiper-bundle.min.css";
export default function CarouselComplete({ screenWidth }) {
  return (
    <>
      <div className="w-[300px] md:w-[700px] mx-auto mt-[20px]">
        <Swiper
          style={{
            "--swiper-theme-color": "black",
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          cssMode={true}
          navigation={screenWidth > 768}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {slides.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="mx-auto w-[80%] md:w-[70%] pb-[50px]">
                  <div className="shadow-lg">
                    <div className="justify-center flex">
                      <img src={item.image} className="cover" />
                    </div>
                    <div className="flex flex-col items-center bg-white p-4 md:p-10 ">
                      <h2 className="pb-4 md:pb-8 font-bold text-lg md:text-xl font-lemonmilk">
                        {item.sub}
                      </h2>
                      <p className="text-xs font-montserrat">{item.text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
