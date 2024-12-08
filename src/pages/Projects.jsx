function ProjectCell() {
  return (
    <>
      <div className="transition ease-in py-[3%] px-[3%]  hover:bg-[#e11d48] hover:text-white">
        <h1 className="text-center text-3xl font-bold">PROJECT</h1>
        <p className="mt-8">
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
      <div className="text-center border-t-[25px] border-b-[25px] py-[6%] border-enacblk text-5xl font-bold bg-[url('../images/YellowBG.png')]">
        PROJECTS
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
