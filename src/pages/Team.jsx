import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Team = () => {
    const teamMembers = [
        { name: "Jocelyn Schleifer", role: "Software Engineer", description: "There are many variations of passages of Lorem Ipsum available.", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Jocelyn Schleifer", role: "Software Engineer", description: "There are many variations of passages of Lorem Ipsum available.", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Jocelyn Schleifer", role: "Software Engineer", description: "There are many variations of passages of Lorem Ipsum available.", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Jocelyn Schleifer", role: "Software Engineer", description: "There are many variations of passages of Lorem Ipsum available.", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Jocelyn Schleifer", role: "Software Engineer", description: "There are many variations of passages of Lorem Ipsum available.", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Jocelyn Schleifer", role: "Software Engineer", description: "There are many variations of passages of Lorem Ipsum available.", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      ];
    
      return (
        <div className="bg-transparent text-gray-800 py-10 ">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-yellow-500">OUR TEAM</h1>
            <p className="text-lg text-gray-600 max-w-screen mx-auto px-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 m-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-left bg-white shadow-lg rounded-sm overflow-hidden transform transition hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-yellow-500 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-500">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-400">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-4 text-gray-500 mb-4">
                    <FacebookIcon className='text-blue-600 ' />
                    <InstagramIcon className='text-pink-500'/>
                    <XIcon className='text-black'/>
                </div>

              </div>
            ))}
          </div>
        </div>
      );
}

export default Team
