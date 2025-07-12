
const teamMembers = [
    {
      name: "Ayoub EL Montassir",
      role: "Chief Executive Officer - Founder",
      image: "/ayoub.png",
      smalllogo: "/small_logo.png"
    },
    {
      name: "Benaissa Amari",
      role: "Chief Executive Officer - Founder",
      image: "/amari.jpg",
      smalllogo: "/small_logo.png"
    },
    {
      name: "Rymane Rachid",
      role: "Chief Operating Officer - Co-Founder",
      image: "/aymane.jpg",
      smalllogo: "/small_logo.png"
    },
    {
      name: "Rachid Hamidi",
      role: "Media Buyer | Social media marketing",
      image: "/rachid.png",
      smalllogo: "/small_logo.png"
    },
    {
      name: "Mohammed El khalfi",
      role: "UI UX | Mobile apps & web Developer",
      image: "/mohamed.jpg",
      smalllogo: "/small_logo.png"
    },
    {
      name: "Amine Imjaane",
      role: "Graphic designer",
      image: "/amine.jpg",
      smalllogo: "/small_logo.png"
    },
    {
      name: "Omar Mansouri",
      role: "Filmaker - Video editor & Photographer",
      image: "/omar.png",
      smalllogo: "/small_logo.png"
    }
  ];import React from 'react';

const TeamSection = () => {


  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lemon:wght@400&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .stroked-text {
          -webkit-text-stroke: 2px black;
          text-stroke: 2px white;
          text-shadow: 
            -2px -2px 0 white,
            2px -2px 0 white,
            -2px 2px 0 white,
            2px 2px 0 white,
            -2px 0 0 white,
            2px 0 0 white,
            0 -2px 0 white,
            0 2px 0 white;
        }
        
        .font-Lemon {
          font-family: 'Lemon', cursive;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          {/* Main Title */}
          <h1 className="lg:text-7xl text-4xl font-medium font-poppins text-black">Meet the team</h1>

          {/* Subtitle with outline and rotated style */}
          <p className="lg:text-4xl text-2xl  text-white mt-2 -rotate-2 font-Lemon italic tracking-tight leading-[0.9] stroked-text">
            Maybe you know them
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full">
          {/* Flowing Wave Lines - Matching Figma Design */}
          {/* SVG Wave */}
          <svg
            className="absolute -top-[150px] h-[500px] left-0 w-[100%] z-0"
            viewBox="0 0 690 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C120,0 240,200 360,100 C480,0 600,200 720,100 C840,0 960,200 1080,100 C1200,0 1320,200 1440,100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* First Row - 3 members */}
          <div className="flex justify-center items-start mb-40 relative z-10">
            <div className="flex items-start space-x-40">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="text-center flex-shrink-0 group">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden mb-8 mx-auto bg-white shadow-2xl ring-4 ring-white transition-transform duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <img src={member.smalllogo} className="w-10 h-10  rounded-full" alt="WedoTech Logo" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl leading-tight">{member.name}</h3>
                  <p className="text-base text-gray-600 max-w-56 leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - 4 members */}
          <div className="flex justify-center items-start relative z-10">
            <div className="flex items-start space-x-32">
              {teamMembers.slice(3).map((member, index) => (
                <div key={index} className="text-center flex-shrink-0 group">
                  <div className="relative w-44 h-44 rounded-full overflow-hidden mb-8 mx-auto bg-white shadow-2xl ring-4 ring-white transition-transform duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <img src={member.smalllogo} className="w-10 h-10  rounded-full" alt="WedoTech Logo" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl leading-tight">{member.name}</h3>
                  <p className="text-base text-gray-600 max-w-56 leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-400px lg:hidden block">
                <svg
            className="absolute -top-[150px] h-[500px] left-0 w-[100%] z-0"
            viewBox="0 0 690 200"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C120,0 240,200 360,100 C480,0 600,200 720,100 C840,0 960,200 1080,100 C1200,0 1320,200 1440,100"
              stroke="black"
              strokeWidth="2"
              fill="none"
            />
          </svg>  
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="lg:hidden relative">
          {/* All members in single column */}
          <div className="flex flex-col items-center space-y-20 relative z-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center flex-shrink-0 group">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 mx-auto bg-white shadow-2xl ring-4 ring-white transition-transform duration-300 ">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                    <img src={member.smalllogo} className="w-8 h-8  rounded-full" alt="WedoTech Logo" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">{member.name}</h3>
                <p className="text-base text-gray-600 max-w-72 leading-relaxed px-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;