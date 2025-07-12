import React from "react";
import arowRightUp from "../../assets/others/arowRightUp.svg";
import fleuryImg from "../../assets/Home/fleuryImg.png";
import sofumartImg from "../../assets/Home/sofumartImg.png";
import heritageLogo from "../../assets/Home/heritageLogo.png";
import keonixLogo from "../../assets/Home/keonixLogo.png";
import GootoLoo from "../../assets/Home/GootoLoo.png";
import {Button} from "../../components/ui/button";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import logocercle from "../../assets/logo/logo_cercle.png";
import patternMobile from "../../assets/patterns/mobileHomePattern.svg";
const hero = () => {
  const logos = [
    {
      src: fleuryImg,
      alt: "Fleury",
      height: "37px",
    },
    {
      src: sofumartImg,
      alt: "Sofumart",
      height: "5px",
    },
    {
      src: heritageLogo,
      alt: "Heritage",
      height: "47px",
    },
    {
      src: keonixLogo,
      alt: "Keonix",
      height: "74px",
    },
    { src: GootoLoo, alt: "Component", height: "60px" },
  ];
  // Process steps data
  const processSteps = [
    {
      number: "1",
      title: "Book a Free Call",
    },
    {
      number: "2",
      title: "Get a Custom Content Plan",
    },
    {
      number: "3",
      title: "Watch Your Brand Grow",
    },
  ];
  const marqueeVariants = {
    animate: {
      x: [0, -1400], // se déplace vers la gauche
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35, // durée du cycle complet
          ease: "linear", // mouvement fluide
        },
      },
    },
  };

  // Partner logos data
  const partnerLogos = [
    { src: "/580b57fcd9996e24bc43c51f-1.png", alt: "Partner logo" },
    { src: "/58480fd7cef1014c0b5e4943-1.png", alt: "Partner logo" },
    { src: "/meta-logo-1.png", alt: "Meta logo" },
    { src: "/58481021cef1014c0b5e494b-2.png", alt: "Partner logo" },
    { src: "/62c6bc25eee9410fe137d91f-1.png", alt: "Partner logo" },
    { src: "/58481021cef1014c0b5e494b-2.png", alt: "Partner logo" },
  ];

  return (
    <div className="relative">
      {/* desktop logo animate */}
      <img
        src={logocercle}
        alt="logoCircle"
        className="hidden md:block lg:block absolute right-4 bottom-52 h-32 w-auto mb-8 mr-8 lg:mb-16 lg:mr-16 xl:h-40 xl:mb-12 xl:mr-12 shadow- animate-spin-slow"
      />
      <img
        src={patternMobile}
        alt="patternMobile"
        className="h-24 hidden md:block top-[45%] ms-4  absolute left-2  "
      />

      {/* mobile logo animate */}
      <img
        src={logocercle}
        alt="logoCircle"
        className="h-90 block md:hidden top-[40%]  absolute right-1  h-20 mb-8 mr-8 lg:mb-16 lg:mr-16 xl:h-40 xl:mb-12 xl:mr-12 shadow- animate-spin-slow"
      />
      <img
        src={patternMobile}
        alt="patternMobile"
        className="h-90 block md:hidden  top-[40%] ms-4  absolute left-2  "
      />
      {/* Hero Section */}
      <section className="  relative ow-full max-w-[1073px] px-4 mx-auto mt-[100px] text-center">
        <div className="relative">
          <h1 className="text-[36px] sm:text-[48px] md:text-[118px] md:font-normal font-thin leading-tight md:leading-[108px] [-webkit-text-stroke:2px_#000000] [font-family:'Mallanna',Helvetica]  text-black text-center tracking-[0]">
            We drive growth to
            <br />
            your Business
          </h1>

          {/* Fleche en haut à droite */}
          <div className="md:hidden absolute md:top-[65%] md:right-[7%]  top-[65%] right-[9%]  ">
            <img alt="Arrow" src={arowRightUp} className="w-6   " />
          </div>
          <div className="hidden md:flex  absolute top-[65%] right-[7%] ">
            <img className="" alt="Vector" src={arowRightUp} />
          </div>
        </div>

        {/* Paragraphe intro */}
        <p className="[font-family:'League_Spartan',Helvetica] font-normal text-black text-base sm:text-lg leading-6 sm:leading-7 mt-6 sm:mt-10">
          We are a global, full-service media agency that grows{" "}
          <br className="hidden sm:block" />
          ambitious brands&nbsp;through reinvention.
        </p>

        {/* Bouton CTA */}
        <div className="relative mt-[40px] flex justify-center">
          <Button className="relative flex items-center justify-between w-[175px] h-[58px] bg-[#232323] rounded-full border border-black shadow-[0px_4px_4px_#00000040] font-normal text-white text-xl font-['League_Spartan'] px-5">
            Let&apos;s Talk
            <div className="absolute top-2 right-2 w-[41px] h-[41px] bg-[#7e84ff] rounded-full flex items-center justify-center">
              <MoveUpRight className="w-7 h-7 text-white" />
            </div>
          </Button>
        </div>
      </section>

      {/* Brand Logos */}
      <section className=" w-full flex items-center justify-center gap-8  md:mt-[150px] mt-[300px]">
        <motion.div
          className="w-full overflow-hidden  py-10"
          variants={marqueeVariants}
          animate="animate"
          style={{ width: "fit-content" }}
        >
          <div className="relative w-full">
            {/* --- Dégradés de masquage --- */}

            <motion.div className="flex items-center space-x-24">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  className="object-cover"
                  alt={logo.alt}
                  src={logo.src}
                  className={`h-[${logo.height}] object-cover`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default hero;
