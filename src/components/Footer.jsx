import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {

    return  <footer className="w-full flex flex-wrap gap-10 p-8 text-enacblk">
    <div className="w-full md:w-1/6 flex flex-col items-center md:items-start">
      <img src="images/symbol_enactus.png" alt="Logo" className="h-12" />
      <div className="flex gap-3 text-gray-200 mt-4">
        <FacebookIcon className="text-blue-600 scale-125" />
        <InstagramIcon className="text-pink-500 scale-110" />
        <XIcon className="text-black" />
        <YouTubeIcon className="text-red-600 scale-125" />
      </div>
    </div>
    <div className='flex justify-between lg:justify-normal w-full'>
        <div className="w-1/2 md:w-1/6 font-montserrat lg:mr-16">
        <h1 className="font-bold mb-4">Explore</h1>
        <ul className="space-y-2">
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
        </ul>
        </div>
        <div className="w-1/2 md:w-1/6 font-montserrat">
        <h1 className="font-bold mb-4 text-right md:text-right lg:text-left">Resources</h1>
        <ul className="space-y-2 text-right md:text-right lg:text-left">
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
        </ul>
        </div>
    </div>
  </footer>
}