import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ state, value, handleClick }) {
  return (
    <>
      <Link
        to={"/" + (value == "Home" ? "" : value)}
        className={
          "p-4 inline-block font-bold text-sm " +
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
export default function Navbar() {
  const [active, setActive] = useState([
    "true",
    "false",
    "false",
    "false",
    "false",
    "false",
  ]);
  const handler = (idx) => {
    let activeList = ["false", "false", "false", "false", "false", "false"];
    activeList[idx] = "true";
    setActive(activeList);
  };
  return (
    <>
      <div className="flex justify-between h-12">
        <img src="../images/enacLogo.jpg" />
        <div>
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
            value="Partners"
            handleClick={() => handler(3)}
          />
          <Button
            state={active[4]}
            value="Achievements"
            handleClick={() => handler(4)}
          />
          <Button
            state={active[5]}
            value="Team"
            handleClick={() => handler(5)}
          />
        </div>
      </div>
    </>
  );
}
