/* eslint-disable react/prop-types */
import { projects } from "../Database/projects.json";
function ProjectCell({ name, image, text }) {
  return (
    <>
      <div className="group md:block flex-col rounded-xl bg-[#DE5D83] md:bg-transparent md:static md:rounded[0] md:m-0 mx-[5%] my-[5%]">
        <div className="md:duration-[400ms] md:ease-in md:group-hover:translate-x-[0%] md:translate-x-[70%] md:will-change-transform  md:inline-block md:w-[40%] pt-[20px] parent md:transition-ease-in-out">
          <h1 className="ml-[32%] md:m-[0] inline md:block text-white md:text-black text-center text-lg md:text-3xl font-bold font-moderniz md:-translate-y-[100%]">
            {name}
          </h1>
          <img
            src={image}
            className="md:transition-all inline md:block md:-translate-y-[50%] md:mx-auto md:duration-[800ms] ml-[10px] w-[50px] md:w-[100px] md:opacity-0 md:-translate-x-[900px] md:group-hover:opacity-100 md:group-hover:translate-x-[0%] md:transition-ease-in-out md:group-hover:delay-[220ms] mt-[-2%] md:mt-[0]"
          />
        </div>
        <p className="mt-[-4%] md:mt-[0] md:duration-[400ms] md:ease-in md:group-hover:translate-x-[0%] child md:translate-x-[100%] text-center text-xs md:text-sm font-montserrat md:inline-block text-white md:w-[60%] py-[4%] px-[8%] md:bg-[#DE5D83] md:rounded-lg md:transition-ease-in-out">
          {text}
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
      <div className="mt-[5%]">
        {projects.map((item, idx) => {
          return (
            <ProjectCell
              name={item.name}
              image={item.image}
              text={item.text}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
}
