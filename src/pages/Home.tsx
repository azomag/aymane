import React from "react";
import logocercle from "../assets/logo/logo_cercle.png";
import patternMobile from "../assets/patterns/mobileHomePattern.svg";
import Hero from "../components/home/hero.jsx";
import Service from "../components/home/Service";
import WeDoSection from "../components/home/WeDoSection";
import ServicesSwiper from "../components/home/ServicesSwiper.jsx";
import Navbar from "../components/Layout/Navbar.jsx";
import Footer from "../components/Layout/Footer.jsx";
import SwiperSponsors from "../components/home/SwiperSponsors.jsx";
import BusinessHero from "../components/home/BusinessHero.jsx";
import TeamSection from "../components/home/TeamSection.jsx";
const Home = () => {
  // Navigation items

  return (
    <div className="bg-[#f4f4f4] flex flex-row w-full ">
      <div className="bg-[#f4f4f4] overflow-hidden w-full  relative">
        {/* desktop logo animate */}
        <Navbar />
        <Hero />
        <Service />
        <WeDoSection />
        <div className="bg-white py-12">
          <ServicesSwiper />
        </div>

        <TeamSection />
        <SwiperSponsors />
        <BusinessHero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
