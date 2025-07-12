import React from 'react';

const LogoSlider = () => {
  // Logo data - you can replace these with your actual logo URLs
  const logos = [
    {
      name: "MongoDB",
      logo: "/logos/mongodb.png"
    },
    
    {
      name: "Google",
      logo: "/logos/google.png"
    },
    {
      name: "Microsoft",
      logo: "/logos/microsoft.png"
    },
    {
      name: "Meta",
      logo: "/logos/meta.png"
    },
  
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Sliding container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter  hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Fallback for broken images
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-full h-full bg-gray-200 rounded text-gray-500 text-sm font-medium">
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;