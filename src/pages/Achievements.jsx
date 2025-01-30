import { slides } from "../Database/news.json";
import { achievements } from "../Database/achievements.json";
import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
export default function Achievements() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showcase, setShowcase] = useState([]);
  const [slidesCount, setSlidesCount] = useState(3);
  useEffect(() => {
    setShowcase(slides);
    if (screenWidth < 768) {
      setSlidesCount(1);
    } else {
      setSlidesCount(3);
    }
  }, [screenWidth]);
  return (
    <>
      <div className="text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('/images/YellowBG.png')]">
        OUR ACHIEVEMENTS
      </div>
      <>
        <div
          className="w-[300px] md:w-[700px] mx-auto mt-[20px]"
        >
          <Swiper
            style={{
              "--swiper-theme-color": "black",
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            cssMode={true}
            navigation={screenWidth > 768 ? true : false}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Autoplay, Pagination]}
          >
            {achievements.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="mx-auto w-full pb-[50px]">
                    <div className="shadow-lg">
                      <div className="justify-center flex">
                        <img src={item.image} className="cover"  />
                      </div>
                      <div className="flex flex-col items-center bg-white p-4 md:p-10 ">
                        <h2 className="pb-4 md:pb-8 font-bold text-lg md:text-xl font-lemonmilk">
                          {item.sub}
                        </h2>
                        <p className="text-sm font-montserrat">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
      <div className=" w-[90%]  pb-10 mx-auto mt-[40px] md:mt-[80px] justify-center">
        <Swiper
          style={{
            "--swiper-theme-color": "black",
          }}
          spaceBetween={20}
          slidesPerView={slidesCount}
          loop={true}
          cssMode={true}
          navigation={screenWidth > 768 ? true : false}
          autoplay={{
            delay: 8000,
            disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {showcase.map((item, idx) => {
            return (
              <>
                <SwiperSlide key={idx}>
                  <InstagramEmbed
                    url={item.link}
                    captioned
                    key={idx}
                    height={750}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
