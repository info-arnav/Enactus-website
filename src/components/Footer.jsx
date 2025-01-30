import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";


export default function Footer() {
  const date = new Date();
  return (
    <footer className="w-full flex flex-wrap p-8 text-enacblk bg-gradient-to-b from-transparent to-yellow-300">
      <div className="flex w-full justify-between items-center flex-col lg:flex-row">
        <div className=" flex justify-center items-center mb-5 space-x-4 flex-col lg:flex-row lg:w-1/2">
          <img src="images/enacLogo.jpg" alt="Logo" className="h-28 w-28" />
          <p className="font-moderniz font-bold w-full text-center md:w-2/3 text-lg ">Innovate <span className="text-[#FDC025]">ideas</span> , execute <span className="text-[#FDC025]"> plans</span>, achieve <span className="text-[#FDC025]">success</span> </p>
          {/* <button className="bg-black text-yellow-400 rounded-full px-2 py-1">Contact us</button> */}
        </div>
        <div className="flex justify-between md:justify-end ">
          <div className="w-1/2 lg:w-1/3 font-montserrat lg:mr-16 min-w-[80px]">
            <h1 className="font-bold mb-4">Location 📍</h1>
            <ul className="space-y-2">
              <li>
                Netaji Subhash University of Technology,
                <br />
                Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
              </li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-1/3 font-montserrat">
            <h1 className="font-bold mb-4 text-right md:text-right lg:text-left">
              Quick Links
            </h1>
            <ul className="space-y-2 text-right md:text-right lg:text-left">

              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Achievements">Achievements</Link>
              </li>
              <li>
                <Link to="/Team">Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[1.5px] bg-gray-900"></div>
     <div className="flex justify-between w-full flex-col md:flex-row">
      <div className="text-center mt-4">
          © {date.getFullYear()} Enactus NSUT. All rights reserved.
      </div>
      <div>
      <div className="flex justify-center items-center gap-3 text-gray-200 mt-4 flex-col md:flex-row ">
      <span className="text-black">enactus@nsut.ac.in</span>
         <div className="space-x-3"> <a
            href="https://in.linkedin.com/company/enactus-nsut"
            target="_blank"
          >
            <LinkedInIcon className="text-[#0A66C2] scale-125" />
          </a>
          <a href="https://www.instagram.com/enac.nsut/" target="_blank">
            <InstagramIcon className="text-pink-500 scale-110" />
          </a>
          <a href="https://www.x.com/EnactusNSUT/" target="_blank">
            <XIcon className="text-black" />
          </a></div>
        </div>
      </div>
     </div>
    </footer>
  );
}
