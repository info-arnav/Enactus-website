function ProjectCell() {
  return (
    <>
      <div className="transition ease-in py-[8%] px-[8%]  hover:bg-[#e11d48] hover:text-white">
        <h1 className="text-center text-lg md:text-3xl font-bold font-moderniz">
          PROJECT
        </h1>
        <p className="text-xs md:text-sm md:mt-8 font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          accusantium soluta praesentium atque! Nostrum iure assumenda,
          accusantium vero incidunt omnis hic repudiandae maxime ut. Excepturi
          non accusamus possimus dolore fugiat.
        </p>
      </div>
    </>
  );
}
export default function Projects() {
  return (
    <>
      <div className="text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('/images/YellowBG.png')]">
        OUR PROJECTS
      </div>
      <ProjectCell />
      <ProjectCell />
      <ProjectCell />
      <ProjectCell />
      <ProjectCell />
      <ProjectCell />
    </>
  );
}
