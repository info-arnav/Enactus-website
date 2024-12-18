/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
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
  const [active, setActive] = useState([
    "false",
    "false",
    "false",
    "false",
    "false",
  ]);
  const handler = (idx) => {
    let activeList = ["false", "false", "false", "false", "false"];
    activeList[idx] = "true";
    setActive(activeList);
  };
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
  return (
    <>
      <div
        className={
          "z-10 fixed min-h-[100%] w-[150px] md:w-[100%] md:flex md:flex-row justify-between md:h-12 md:static md:bg-transparent " +
          (navExtend ? "bg-white" : "bg-transparent")
        }
      >
        <img src="../images/enacLogo.jpg" className="hidden md:inline-block" />
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
        <div
          className={
            (navExtend ? "block" : "hidden") +
            " md:block transition-ease-in-out"
          }
        >
          <Button
            state={active[0]}
            value="Home"
            handleClick={() => handler(0)}
          />
          <Button
            state={active[1]}
            value="Projects"
            handleClick={() => handler(1)}
          />
          <Button
            state={active[2]}
            value="Contact"
            handleClick={() => handler(2)}
          />
          <Button
            state={active[3]}
            value="Achievements"
            handleClick={() => handler(3)}
          />
          <Button
            state={active[4]}
            value="Team"
            handleClick={() => handler(4)}
          />
        </div>
      </div>
    </>
  );
}
