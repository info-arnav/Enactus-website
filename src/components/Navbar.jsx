/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import enac_logo from "/images/enacLogo.jpg";

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
  const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return screenWidth;
  };
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
    <nav
      className={`fixed top-0 w-full font-moderniz z-50 md:relative ${navExtend ? "h-full" : "h-auto"}`}
    >
      {navExtend && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-40"
          onClick={() => {
            if (!innerClicked) {
              setNavExtend(false);
              innerClicked = false;
            }
          }}
        />
      )}

      <div
        className={
          "fixed z-50 md:relative md:flex md:flex-row justify-between md:h-12"
        }
      >
        <img src={enac_logo} className="hidden md:inline-block h-16 -mt-2" />

        <button
          className="md:hidden mt-4 ml-4 bg-white w-[3.25rem] p-4 rounded-[200px] cursor-pointer absolute z-10"
          onClick={(e) => {
            e.stopPropagation();
            extend();
          }}
        >
          {navExtend ? (
            <FaXmark className="text-xl color-enacblk" />
          ) : (
            <FaAlignJustify className="text-xl color-enacblk" />
          )}
        </button>
        {useScreenWidth() < 768 ? (
          <AnimatePresence initial={false}>
            {navExtend ? (
              <motion.div
                className="inner navbar bg-white min-h-[100%] fixed pt-[70px]"
                initial={{ x: "-100%" }}
                animate={{ transform: "translateX(0%)" }}
                exit={{ transform: "translateX(-100%)" }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              >
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
              </motion.div>
            ) : null}
          </AnimatePresence>
        ) : (
          <div className="inner block navbar">
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
        )}
      </div>
    </nav>
  );
}
