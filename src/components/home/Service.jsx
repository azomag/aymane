import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import Aymane from "../../assets/team/Aymane.svg";
import Ayoub from "../../assets/team/Ayoub.svg";
import polygone from '../../assets/services/Polygon.svg';
import NoirBlanc from "../../assets/services/NoirBlanc.svg";
import doubleQuotes from '../../assets/services/doubleQuotes.svg'
import { ChevronRight } from "lucide-react";

const Service = () => {
  // Services data
  const services = [
    {
      name: "Web Design",
      isActive: true,
      className: "w-[147px] h-[37px] top-[133px] left-[104px]",
      textClass: "top-[134px] left-[120px]",
    },
    {
      name: "Social Media",
      isActive: false,
      className:
        " flex justify-center items-center w-[156px] h-9 top-44 left-10",
      textClass: "top-[181px] left-[62px]",
    },
    {
      name: "Paid Ads",
      isActive: false,
      className:
        " flex justify-center items-center w-[114px] h-9 top-[216px] left-[90px] rotate-[-2.19deg]",
      textClass: "top-[219px] left-[105px]",
    },
    {
      name: "Content Creation",
      isActive: true,
      className:
        "flex justify-center items-center w-[200px] h-9 top-[255px] left-10 rotate-[-0.48deg] text-nowrap",
      textClass: "top-[257px] left-[63px] w-[191px]",
    },
    {
      name: "Branding",
      isActive: false,
      className:
        "  flex justify-center items-center w-[113px] h-9 top-[231px] left-[207px] rotate-[19.73deg]",
      textClass: "top-[242px] left-[223px]",
    },
    {
      name: "Marketing",
      isActive: true,
      className:
        " flex justify-center items-center w-[125px] h-9 top-[186px] left-[196px] rotate-[16.50deg]",
      textClass: "top-[196px] left-[212px] whitespace-nowrap",
    },
  ];
  
  return (
    <div className="px-4 md:px-0">
      {/* Services and Stats Section */}
      <section className="w-full flex flex-wrap justify-center gap-6 mt-[50px] 2">
        {/* Services Card */}
        {/* Services Card */}
        <Card className="relative w-[334px] h-[317px] rounded-[17px] shadow-[0px_4px_4px_#c9b8b840,0px_4px_4px_#00000040]">
          <ChevronRight className="absolute right-0 top-2 " size={48} />
          <CardContent className="p-0 relative h-full">
            <div className="absolute w-[216px] top-4 left-6 [-webkit-text-stroke:0.5px_#000000] [font-family:'Unbounded',Helvetica] font-normal text-black text-[32px] tracking-[-0.32px] leading-[30px]">
              Services
            </div>

            {services.map((service, index) => (
              <div
                key={index}
                className={`absolute rounded-[50px] border border-solid border-black shadow-[0px_4px_4px_#00000040]
      ${
        service.isActive
          ? "bg-[#232323] text-white"
          : "bg-transparent text-black"
      }
      ${service.className}
    `}
              >
                <div
                  className={`
        flex items-center justify-center w-[140px] px-2 py-1
        [font-family:'League_Spartan',Helvetica] font-normal text-[22px] tracking-[0] leading-[30px]
        ${service.textClass}
      `}
                >
                  {service.name}
                </div>
              </div>
            ))}

            <div className=" flex items-center justify-center absolute w-10 h-10 top-[214px] left-[45px] bg-[#232323] rounded-[20.17px] rotate-[-0.48deg] shadow-[0px_4px_4px_#00000040]">
              <img className="  " alt="Polygon" src={polygone} />
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="flex flex-col gap-5">
          <Card className="w-[359px] h-[154px] bg-[#232323] rounded-[17px] shadow-[0px_4px_4px_#c9b8b840,0px_4px_4px_#00000040] relative overflow-hidden">
            <CardContent className="p-7">
              <h2 className="[font-family:'Unbounded',Helvetica] font-normal text-white text-[41px] tracking-[-0.41px] leading-[30px]">
                1.2M+
              </h2>
              <p className="mt-5 [font-family:'League_Spartan',Helvetica] font-normal text-white text-base tracking-[0] leading-5">
                Users have interacted with websites <br />
                built by us
              </p>
              <img
                className="w-10 h-[154px] absolute top-0 right-0"
                alt="Element"
                src={NoirBlanc}
              />
            </CardContent>
          </Card>

          <Card className="w-[359px] h-[150px] bg-white rounded-[25px] shadow-[0px_4px_4px_#c9b8b840,0px_4px_4px_#00000040]">
            <CardContent className="p-6">
              <h2 className="[font-family:'Unbounded',Helvetica] font-normal text-black text-[41px] tracking-[-0.41px] leading-[30px]">
                $3M
              </h2>
              <p className="mt-5 [font-family:'League_Spartan',Helvetica] font-normal text-[#232323] text-base tracking-[0] leading-5">
                in funding raised by businisess we&apos;ve <br />
                worked with
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Card */}
        <Card className="w-[339px] h-[315px] bg-white rounded-[25px] shadow-[0px_4px_4px_#c9b8b840,0px_4px_4px_#00000040]">
          <CardContent className="p-0 relative h-full">
            <div className="absolute top-6 py-5  left-6 [-webkit-text-stroke:1.5px_#000000] [font-family:'Yeseva_One',Helvetica] font-normal text-black text-[141px] tracking-[-5.64px] ">
              <img src={doubleQuotes} className="w-16" alt="" />
            </div>
            <div className="absolute w-[296px] h-[130px] top-[90px] left-6">
              <div className="absolute w-[289px] top-[38px] left-1.5 [font-family:'Unbounded',Helvetica] font-semibold text-[#232323] text-[17px] tracking-[0] leading-5">
                The final product exceeded my expectations <br />
                <br />
                Impressed with the results!
              </div>
            </div>
            <div className="absolute w-[89px] h-[42px] top-[238px] left-[31px] flex gap-1">
              <Avatar className="w-[42px] h-[42px]">
                <AvatarImage src={Aymane} alt="User avatar" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="z-40 w-[42px] h-[42px] -ml-5">
                <AvatarImage src={Ayoub} alt="User avatar" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Badge className="z-50 w-[42px] h-[42px] rounded-full bg-[#7e84ff] -ml-5 flex items-center justify-center">
                <span className="[font-family:'Unbounded',Helvetica] font-extrabold text-white text-[11px]">
                  +45
                </span>
              </Badge>
            </div>
          </CardContent>
        </Card>
   
      </section>
    </div>
  );
};

export default Service;
