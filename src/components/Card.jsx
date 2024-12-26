import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
function Card({member , index}) {
    return (
        <div
          key={index}
          className="h-auto w-full max-w-[90vw] sm:max-w-[45vw] lg:max-w-[30vw] relative flex justify-center flex-col text-left bg-red-700 rounded-2xl overflow-hidden transform transition hover:shadow-lg mx-auto"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[60vh] lg:h-[56vh] object-cover object-center"
          />
          <div className="absolute inset-0 p-4 text-left font-moderniz flex flex-col justify-end items-start bg-opacity-50 text-white">
            <div className="bg-white p-3 rounded-md bg-opacity-75 transition hover:bg-opacity-100">
              <h3 className="text-lg font-semibold text-enacblk">{member.name}</h3>
              <p className="text-yellow-500 text-sm mb-2">{member.role}</p>
              <p className="text-xs text-zinc-700">{member.description}</p>
              <div className="flex justify-start items-center space-x-5 text-gray-200 mt-3 w-full h-auto">
                <FacebookIcon
                  className="text-blue-600 scale-125"
                  onClick={() => {
                    window.open(member.facebook);
                  }}
                />
                <InstagramIcon
                  className="text-pink-500 scale-110"
                  onClick={() => {
                    window.open(member.instagram);
                  }}
                />
                <XIcon
                  className="text-black"
                  onClick={() => {
                    window.open(member.twitter);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Card;
