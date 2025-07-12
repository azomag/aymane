import React from 'react';
import { Twitter, Youtube, Instagram, Linkedin, Send } from 'lucide-react';

const StarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.1699 7.49999C21.0944 4.16666 25.9056 4.16667 27.8301 7.5L39.5215 27.75C41.446 31.0833 39.0403 35.25 35.1913 35.25H11.8086C7.95964 35.25 5.55403 31.0833 7.47853 27.75L19.1699 7.49999Z" fill="#FFCF1F"/>
    <path d="M27.8301 39.5C25.9056 42.8333 21.0944 42.8333 19.1699 39.5L7.47852 19.25C5.55402 15.9167 7.95966 11.75 11.8087 11.75H35.1914C39.0404 11.75 41.446 15.9167 39.5215 19.25L27.8301 39.5Z" fill="#FFCF1F"/>
  </svg>
);

const WedoTechFooter = () => {
  return (
    <footer className="bg-[#232323]  font-poppins text-white relative overflow-hidden ">
      {/* Decorative stars positioned to match original */}
      <div className="absolute top-[10%] -right-5 ">
        <StarIcon />
      </div>
      <div className="absolute top-72 left-[40%]  hidden lg:block">
        <StarIcon />
      </div>
      <div className="absolute bottom-[25%] right-[20%] ">
        <StarIcon  />
      </div>
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
        {/* Top section with content */}
        <div className="flex flex-col lg:flex-row justify-between items-start font-poppins pt-10 mb-12 lg:mb-24 space-y-8 lg:space-y-0">
          {/* Left Column - Company Info */}
          <div className="w-full lg:flex-1 lg:max-w-sm">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-3xl lg:text-3xl mb-2 lg:mb-3 font-Lemon font-extrabold">WedoTech</h3>
              <p className="text-gray-300 text-base lg:text-xl">Let's do Tech together !!</p>
            </div>
            
            {/* Email subscription */}
            <div className="flex items-center bg-transparent border border-gray-100 shadow-md shadow-black/40 rounded-full overflow-hidden w-full lg:max-w-xs max-w-[250px]">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-transparent px-4 lg:px-6 py-3 lg:py-4 flex-1 text-sm placeholder-gray-400 focus:outline-none text-white"
              />
              <button className="bg-white text-[#7F85FF] rounded-full p-2 lg:p-3 mr-1 hover:bg-gray-100 transition-colors">
                <Send size={18} className="lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>
          
          {/* Middle Column - Location & Work Time */}
          <div className="w-full lg:flex-1 lg:max-w-md lg:mx-12">
            <div className="mb-6 lg:mb-8">
              <h4 className="text-xl lg:text-2xl italic font-extrabold font-Lemon mb-3 lg:mb-4 text-white tracking-wide">LOCATION</h4>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">Rabat, Morocco - Hassan street Benghazi</p>
            </div>
            
            <div>
              <h4 className="text-xl lg:text-2xl font-extrabold font-Lemon mb-3 lg:mb-4 text-white tracking-wide">WORK TIME</h4>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">Monday to Friday (9:00 AM - 5:00 PM) &</p>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">Saturday (9:00 AM - 12:00 PM)</p>
            </div>
          </div>
          
          {/* Right Column - Social Icons */}
          <div className="lg:flex-shrink-0 lg:relative absolute right-2 top-[30%] lg:top-10 ">
            <div className="flex flex-col  items-end space-x-4 lg:space-x-0 lg:space-y-4">
              {/* Twitter */}
              <a href="#" className="text-white transition-colors p-2">
                <Twitter size={20} className="lg:w-6 lg:h-6" />
              </a>
              
              {/* YouTube */}
              <a href="#" className="text-white transition-colors p-2">
                <Youtube size={20} className="lg:w-6 lg:h-6" />
              </a>
              
              {/* Instagram */}
              <a href="#" className="text-white transition-colors p-2">
                <Instagram size={20} className="lg:w-6 lg:h-6" />
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="text-white transition-colors p-2">
                <Linkedin size={20} className="lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Large background logo */}
        <div className=" pt-32">
          <div className="w-full absolute -left-5 -bottom-[17px] lg:-bottom-[40px] lg:left-[-60px]">
            <img 
              src="/logo_wedotech.png" 
              alt="WedoTech Logo" 
              className="w-[600px] drop-shadow-lg lg:w-[1100px]  lg:mx-0 "
            />
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="absolute lg:bottom-4 bottom-20 right-4 lg:right-20 text-right text-xs lg:text-sm text-gray-500">
        <p className="mb-1">made and designed by WEDOTECH</p>
        <p>All Copyright © Reserved</p>
      </div>
    </footer>
  );
};

export default WedoTechFooter;