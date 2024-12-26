/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";

import enac_logo from "../../images/enacLogo.jpg";

function Button({ state, value, handleClick }) {
  return (
    <>
      <Link
        to={"/" + (value == "Home" ? "" : value)}
        className={
          "flex flex-col md:inline-block font-lemonmilk text-[10px] md:text-[sm] p-4 " +
          (state == "true"
            ? "bg-enacblk text-white"
            : "bg-transparent text-enacblk hover:bg-enacblk hover:text-white transition ease-in")
        }
        onClick={handleClick}
      >
        {value}
      </Link>
    </>
  );
}
export default function Navbar({ path }) {
  const indexPath = new Map([
    ["/", 0],
    ["/Projects", 1],
    ["/Contact", 2],
    ["/Achievements", 3],
    ["/Team", 4],
  ]);
  const width = window.innerWidth;
  var innerClicked = false;
  const [active, setActive] = useState([
    "false",
    "false",
    "false",
    "false",
    "false",
  ]);
  useEffect(() => {
    setTimeout(() => {
      handler(indexPath.get(path));
    }, Infinity);
  });
  const [navExtend, setNavExtend] = useState(false);
  const extend = () => {
    if (navExtend) {
      setNavExtend(false);
    } else {
      setNavExtend(true);
    }
  };
  const handler = (idx) => {
    let activeList = ["false", "false", "false", "false", "false"];
    activeList[idx] = "true";
    setActive(activeList);
  };
  return (
    <div
      className={
        "md:min-h-[0%] md:min-w-[0%] min-h-[100%] min-w-[100%] md:static fixed md:z-0 z-10 md:bg-transparent " +
        (navExtend ? "bg-[rgba(0,0,0,0.8)]" : "")
      }
      onClick={() => {
        if (navExtend && !innerClicked) {
          setNavExtend(false);
          innerClicked = false;
        }
      }}
    >
      <div
        className={
          "z-10 fixed min-h-[100%] w-[150px] md:w-[100%] md:flex md:flex-row justify-between md:h-12 md:static md:bg-transparent " +
          (navExtend ? "bg-white" : "bg-transparent")
        }
      >
        <img src={enac_logo} className="hidden md:inline-block h-16 -mt-2" />
        <div
          className="md:hidden mt-4 ml-4 bg-white w-[3.25rem] p-4 rounded-[200px] cursor-pointer"
          onClick={extend}
        >
          {navExtend ? (
            <FaXmark className="text-xl color-enacblk" />
          ) : (
            <FaAlignJustify className="text-xl color-enacblk" />
          )}
        </div>
        <div className={(navExtend ? "block" : "hidden") + " inner md:block"}>
          <Button
            state={active[0]}
            value="Home"
            handleClick={() => {
              handler(0);
              if (width <= 640) {
                setNavExtend(false);
              }
            }}
          />
          <Button
            state={active[1]}
            value="Projects"
            handleClick={() => {
              handler(1);
              if (width <= 640) {
                setNavExtend(false);
              }
            }}
          />
          <Button
            state={active[2]}
            value="Contact"
            handleClick={() => {
              handler(2);
              if (width <= 640) {
                setNavExtend(false);
              }
            }}
          />
          <Button
            state={active[3]}
            value="Achievements"
            handleClick={() => {
              handler(3);
              if (width <= 640) {
                setNavExtend(false);
              }
            }}
          />
          <Button
            state={active[4]}
            value="Team"
            handleClick={() => {
              handler(4);
              if (width <= 640) {
                setNavExtend(false);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
