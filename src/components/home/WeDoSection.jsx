import React from 'react'
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import pattern from "../../assets/patterns/pattern.svg";
const WeDoSection = () => {
  return (
    <div className="w-full my-16  flex h-[70vh] bg-[#232323] text-white">
      <div className="flex flex-col gap-5 md:px-24 px-5 md:justify-center ">
        <h1 className="sm:text-5xl text-xl md:py-5 py-5  font-poppins font-bold">
          What we do{" "}
        </h1>
        <h5 className="font-league-spartan sm:text-2xl font-semibold">
          Our mission is to help brands grow through a differentiated model and
          a performance mindset.
        </h5>
        <p className="md:w-1/2">
          WeDoTech is a full-service media agency that helps businesses drive
          sustainable growth in the new world of marketing. With a rich heritage
          in performance, we apply that mindset to everything we do; brand
          planning, strategy, integrated media, social, creative, and data.
        </p>
      </div>
      <img src={pattern} className=" h-[70vh]" alt="" />
    </div>
  );
}

export default WeDoSection
