import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <footer className="h-[40vh] w-full flex items-center  text-enacblk p-8 gap-10">
      <div className="h-3/4 w-1/6">
        <img src="images/symbol_enactus.png" alt="" className="h-12" />
        <div className="flex flex-col mt-5 md:mt-[0] md:flex-row space-y-5 md:space-x-3 md:justify-left items-center md:items-baseline text-gray-200 mt-4 w-auto md:w-full h-full md:h-auto">
          <FacebookIcon className="text-blue-600 scale-110" />
          <InstagramIcon className="text-pink-500 scale-110" />
          <XIcon className="text-black" />
          <YouTubeIcon className="text-red-600 " />
        </div>
      </div>
      <div className="h-3/4 w-1/6 font-montserrat">
        <h1 className="font-bold mb-7">Explore</h1>
        <ul className="text-xs md:text-sm space-y-1 md:space-y-0">
          <li>Design</li>
          <li>Prototyping</li>
          <li>Development features</li>
          <li>Design systems</li>
          <li>Collaboration features</li>
          <li>Design process</li>
          <li>FigJam</li>
        </ul>
      </div>
      <div className=" h-3/4 w-1/6 font-montserrat ">
        <h1 className="font-bold mb-7">Resources</h1>
        <ul className="text-xs md:text-sm space-y-1 md:space-y-0">
          <li>Blog</li>
          <li>Best practices</li>
          <li>Colors</li>
          <li>Color wheel</li>
          <li>Support</li>
          <li>Developers</li>
          <li>Resource library</li>
        </ul>
      </div>
    </footer>
  );
}
