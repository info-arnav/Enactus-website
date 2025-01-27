import React from "react";
import {Presidents} from "../Database/Db.js";
import {VicePresidents} from "../Database/Db.js";
import {ExecutiveDirectors} from "../Database/Db.js";
import {Directors} from "../Database/Db.js";
import {Technical} from "../Database/Db.js";
import {Design} from "../Database/Db.js";
import { GeneralSecretary } from "../Database/Db.js";
import { Secretary } from "../Database/Db.js";
import Card from "../components/Card.jsx";

const Imagecard=({props})=>{
  return  (<div className="flex flex-col md:flex-row flex-wrap gap-8 h-auto w-full mx-auto items-center justify-center ">
              {props.map((member, index) => (
                <Card member={member} index={index} />
              ))}
          </div>);
}
const Titlename=({props})=>{
  // console.log(props);
  return (<div
  className=" text-center font-moderniz h-auto flex justify-center items-center text-4xl md:text-5xl lg:text-8xl"
>
  {props}
</div>);
}
const PostCard=(props)=>{
  return( <div className=" py-5 my-5 flex flex-col justify-center items-center gap-4">
      <Titlename props={props.title}/>
      <Imagecard props={props.data}/>
  </div>);
}
const Team = () => {


  return (
    <div className="team-section text-gray-800 h-auto">
      <div className=" mb-2 md:block text-center font-moderniz border-t-[10px] md:border-t-[25px] border-b-[10px] md:border-b-[25px] py-[6%] border-enacblk text-xl md:text-5xl font-bold bg-[url('/images/YellowBG.png')]">
        OUR TEAM
      </div>
      <PostCard title="Presidents" data={Presidents}/>
      <PostCard title="Vice Presidents" data={VicePresidents}/>
      <PostCard title="Executive Directors" data={ExecutiveDirectors}/>
      <PostCard title="Directors" data={Directors}/>
      <PostCard title="Technical Directors" data={Technical}/>
      <PostCard title="Design Directors" data={Design}/>
      <PostCard title="General Secretary" data={GeneralSecretary}/>
      <PostCard title="Secretary" data={Secretary}/>

    </div>
  );
};

export default Team;
