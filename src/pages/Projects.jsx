/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="h-full">
        <h1 className="text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('/images/YellowBG.png')]">
          OUR PROJECTS
        </h1>
        {windowWidth > 760 ? (
          <>
            <section className=" w-full  h-[100%] ">
              {/* annotsav */}
              <article className="group project-container">
                <img
                  src="/images/projects/annotsav_bg.png"
                  alt=""
                  className="group-hover:blur-lg project-bg-img"
                />
                <p className="group-hover:opacity-100 project-text text-annotsavGreen">
                  <span className="highlight1">Annotsav</span> is an innovative
                  initiative by{" "}
                  <span className="text-enactusYellow font-extrabold">
                    Enactus NSUT
                  </span>{" "}
                  aimed at revolutionizing both{" "}
                  <span className=" highlight1">agriculture </span> and{" "}
                  <span className=" highlight1">
                    {" "}
                    personal gardening practices
                  </span>
                  . We address challenges like{" "}
                  <span className=" highlight1">water scarcity</span> and{" "}
                  <span className=" highlight1">inefficient irrigation</span>{" "}
                  for farmers. We also offer customized{" "}
                  <span className="highlight1">table pots</span> with select
                  plants, designed to enhance study tables and creative
                  workspaces. Additionally, we produce in-house{" "}
                  <span className="highlight1">fertilizer balls</span> to
                  support plant health. Our mission is to enhance agricultural
                  productivity, promote environmental conservation, and improve
                  the livelihoods of farming communities.
                </p>

                <div className="group-hover:opacity-100 opacity-0 flex absolute justify-center bottom-10 text-xl gap-4 w-full inset-x-0">
                  <a
                    href="https://www.linkedin.com/company/project-annotsav"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#0a66c2" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/annotsav.enactusnsut/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-pink-400"></i>
                  </a>
                  <a href="https://annotsav.myshopify.com/" target="_blank">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </article>
              {/* clair */}
              <article className="group project-container h-[440px]">
                <img
                  src="/images/projects/clair_bg.jpg"
                  className="group-hover:blur-lg project-bg-img"
                />
                <p className="group-hover:opacity-100 project-text text-clairBlue">
                  Project <span className="highlight1">Clair</span> is our
                  initiative to tackle the pressing issue of
                  <span className="highlight1"> air pollution</span> in North
                  India, where stubble burning is a major contributor. We
                  started by developing an air purifier to provide a quick and
                  effective way to combat polluted air. However, realizing the
                  need for a long-term, sustainable solution,{" "}
                  <span className="highlight1">
                    we turned stubble—a key pollutant—into opportunity
                  </span>
                  . By repurposing it, we have created eco-friendly products
                  like{" "}
                  <span className="highlight1">
                    plates, table mats, coasters, air-purifying bags, and
                    air-freshener pouches
                  </span>
                  . Through these efforts, we have not only reduced pollution
                  but also promoted sustainable living, proving that small
                  changes can lead to big impacts.
                </p>
                <div className="group-hover:opacity-100 opacity-0 flex absolute justify-center bottom-5 text-xl gap-4 w-full inset-x-0">
                  <a
                    href="https://www.instagram.com/clair.enactusnsut/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-pink-400"></i>
                  </a>
                  {/* <a href="" target="_blank">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a> */}
                </div>
              </article>
              {/* satva */}
              <article className="group project-container">
                <img
                  src="/images/projects/satva_bg.png"
                  alt=""
                  className="group-hover:blur-lg project-bg-img"
                />
                <p className="group-hover:opacity-100 project-text text-satvaBrown">
                  <span className="highlight1">Satva</span> is a project by{" "}
                  <span className="text-yellow-600 font-extrabold">
                    Enactus NSUT
                  </span>
                  , born from a simple idea, to turn coffee waste into something
                  beautiful and useful. In India we end up with{" "}
                  <span className="highlight1">
                    millions of tonnes of waste every year
                  </span>
                  . Satva takes this waste and turns it into stylish, everyday
                  products like{" "}
                  <span className="highlight1">mugs, kulhads, and candles</span>
                  . By working with potters and artisans in Uttam Nagar and
                  Kanpur, we are helping to{" "}
                  <span className="highlight1">create jobs</span> and{" "}
                  <span className="highlight1">uplift local communities</span>.
                </p>
                <div className="group-hover:opacity-100 opacity-0 flex absolute justify-center bottom-10 text-xl gap-4 w-full inset-x-0">
                  <a
                    href="https://www.linkedin.com/company/satva-brews/"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#0a66c2" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/satva.brews/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-pink-400"></i>
                  </a>
                  <a href="https://satva.enactus.in/" target="_blank">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </article>
            </section>
          </>
        ) : (
          <>
            <section>
              {/* annotsav */}
              <div className="  flex-col rounded-xl mx-[5%] my-[5%] bg-[#3CB043]">
                <div className="  pt-[20px] ">
                  <h1 className="flex justify-center l-[32%]  text-white text-center text-lg  font-bold font-moderniz ">
                    Annotsav
                  </h1>
                </div>
                <p className="mt-[-4%] text-center text-xs font-montserrat  text-white  py-[4%] px-[8%] ">
                  Annotsav is an innovative initiative by Enactus NSUT aimed at
                  revolutionizing both agriculture and personal gardening
                  practices. We address challenges like water scarcity and
                  inefficient irrigation for farmers. We also offer customized
                  table pots with select plants, designed to enhance study
                  tables and creative workspaces. Additionally, we produce
                  in-house fertilizer balls to support plant health. Our mission
                  is to enhance agricultural productivity, promote environmental
                  conservation, and improve the livelihoods of farming
                  communities.
                </p>

                <div className=" flex  justify-center  text-sm pb-4 gap-4 w-full inset-x-0">
                  <a
                    href="https://www.linkedin.com/company/project-annotsav"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#0a66c2" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/annotsav.enactusnsut/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-pink-400"></i>
                  </a>
                  <a href="https://annotsav.vercel.app/" target="_blank">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              {/* Clair */}
              <div className="  flex-col rounded-xl mx-[5%] my-[5%] bg-[#002D62]">
                <div className="  pt-[20px] ">
                  <h1 className="flex justify-center l-[32%]  text-white text-center text-lg  font-bold font-moderniz ">
                    Clair
                  </h1>
                </div>
                <p className="mt-[-4%] text-center text-xs font-montserrat  text-white  py-[4%] px-[8%] ">
                  Project Clair is our initiative to tackle the pressing issue
                  of air pollution in North India, where stubble burning is a
                  major contributor. We started by developing an air purifier to
                  provide a quick and effective way to combat polluted air.
                  However, realizing the need for a long-term, sustainable
                  solution, we turned stubble—a key pollutant—into opportunity.
                  By repurposing it, we have created eco-friendly products like
                  plates, table mats, coasters, air-purifying bags, and
                  air-freshener pouches. Through these efforts, we have not only
                  reduced pollution but also promoted sustainable living,
                  proving that small changes can lead to big impacts.
                </p>
                <div className=" flex  justify-center  text-sm pb-4 gap-4 w-full inset-x-0">
                  <a
                    href="https://www.instagram.com/clair.enactusnsut/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-pink-400"></i>
                  </a>
                  {/* <a href="" target="_blank">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a> */}
                </div>
              </div>
              {/* Satva */}
              <div className="  flex-col rounded-xl mx-[5%] my-[5%] bg-[#6F4E37]">
                <div className="  pt-[20px] ">
                  <h1 className="flex justify-center l-[32%]  text-white text-center text-lg  font-bold font-moderniz ">
                    Satva
                  </h1>
                </div>
                <p className="mt-[-4%] text-center text-xs font-montserrat  text-white  py-[4%] px-[8%] ">
                  Satva is a project by Enactus NSUT, born from a simple idea,
                  to turn coffee waste into something beautiful and useful. In
                  India we end up with millions of tonnes of waste every year.
                  Satva takes this waste and turns it into stylish, everyday
                  products like mugs, kulhads, and candles. By working with
                  potters and artisans in Uttam Nagar and Kanpur, we are helping
                  to create jobs and uplift local communities.
                </p>

                <div className=" flex  justify-center  text-sm pb-4 gap-4 w-full inset-x-0">
                  <a
                    href="https://www.linkedin.com/company/satva-brews/"
                    target="_blank"
                  >
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#0a66c2" }}
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/satva.brews/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram text-pink-400"></i>
                  </a>
                  <a href="https://satva.enactus.in/" target="_blank">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
}
