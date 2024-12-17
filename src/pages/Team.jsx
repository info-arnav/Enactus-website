import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Team = () => {
  const teamMembers = [
    {
      name: "Alice Smith",
      role: "Frontend Developer",
      description:
        "Passionate about creating intuitive user interfaces and seamless user experiences.",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/alice.smith",
      instagram: "https://www.instagram.com/alice.smith",
      twitter: "https://www.twitter.com/alice_smith",
      github: "https://www.github.com/alicesmith",
    },
    {
      name: "Bob Johnson",
      role: "Backend Developer",
      description:
        "Specializes in creating efficient and scalable backend systems.",
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/bob.johnson",
      instagram: "https://www.instagram.com/bob.johnson",
      twitter: "https://www.twitter.com/bob_johnson",
      github: "https://www.github.com/bobjohnson",
    },
    {
      name: "Charlie Davis",
      role: "DevOps Engineer",
      description:
        "Expert in automating and optimizing infrastructure for cloud-based applications.",
      image:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/charlie.davis",
      instagram: "https://www.instagram.com/charlie.davis",
      twitter: "https://www.twitter.com/charliedavis",
      github: "https://www.github.com/charliedavis",
    },
    {
      name: "Dana Evans",
      role: "UI/UX Designer",
      description:
        "Combines creative design with user research to create visually appealing and user-friendly interfaces.",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/dana.evans",
      instagram: "https://www.instagram.com/dana.evans",
      twitter: "https://www.twitter.com/danaevans",
      github: "https://www.github.com/danaevans",
    },
    {
      name: "Evan Thomas",
      role: "Data Scientist",
      description:
        "Skilled in machine learning and data analysis, focusing on extracting insights from complex data sets.",
      image:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/evan.thomas",
      instagram: "https://www.instagram.com/evan.thomas",
      twitter: "https://www.twitter.com/evanthomas",
      github: "https://www.github.com/evanthomas",
    },
    {
      name: "Fiona Lewis",
      role: "Project Manager",
      description:
        "Expert in agile methodologies and project management, ensuring timely and efficient delivery of projects.",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      facebook: "https://www.facebook.com/fiona.lewis",
      instagram: "https://www.instagram.com/fiona.lewis",
      twitter: "https://www.twitter.com/fionalewis",
      github: "https://www.github.com/fionalewis",
    },
  ];
  return (
    <div className="bg-transparent text-gray-800 py-10">
      <div className="text-center mb-10 font-moderniz">
        <h1 className="text-3xl mb-4 text-yellow-500">OUR TEAM</h1>
        <p className="text-sm text-zinc-600  max-w-screen mx-auto px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 m-20 h-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="h-[56vh] relative flex justify-between flex-col text-left bg-white  rounded-2xl overflow-hidden transform transition hover:shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 p-4 text-left font-moderniz h-auto flex flex-col justify-end items-start bg-opacity-50  text-white">
              <div className="bg-white p-3 rounded-md bg-opacity-75 transition hover:bg-opacity-100">
                <h3 className="text-lg font-semibold text-enacblk">
                  {member.name}
                </h3>
                <p className="text-yellow-500 text-sm mb-2">{member.role}</p>
                <p className="text-xs text-zinc-700">{member.description}</p>
                <div className="flex justify-left items-center space-x-5 text-gray-200 mt-3 w-full h-auto">
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
        ))}
      </div>
    </div>
  );
};

export default Team;
