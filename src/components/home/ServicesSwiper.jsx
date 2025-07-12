import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import React from "react";
import ads from "../../assets/services/Ads.svg";
import arrowRightWhite from "../../assets/services/arrowRightWhite.svg";
const services = [
  {
    title: "Video Production",
    description:
      "WeDoTech is a full-service media agency that helps businesses...",
    image: ads,
  },
  {
    title: "Branding",
    description:
      "WeDoTech is a full-service media agency that helps businesses...",
    image: ads,
  },
  {
    title: "Graphic Design",
    description:
      "WeDoTech is a full-service media agency that helps businesses...",
    image: ads,
  },
  {
    title: "Paid ADS",
    description:
      "WeDoTech is a full-service media agency that helps businesses...",
    image: ads,
  },
];

export default function ServicesSwiper() {
  
  return (
    <div className=" py-12">
      <div className=" flex flex-col items-center px-4">
        <h1 className="flex items-center text-4xl justify-center py-2 font-poppins font-bold gap-2">
          What we can do
          <img src={arrowRightWhite} className="w-8" alt="" />
        </h1>
        <p className="text-center py-12 md:w-1/2 mx-auto text-sm  md:px-0 md:text-base">
          As a tight-knit team of experts, we craft memorable and emotional
          websites, digital experiences with the passion and precision that
          define Wedotech.
        </p>
      </div>
      <Swiper
        className=""
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ clickable: true }} // ✅ ici
        modules={[Pagination]}
        style={{
          paddingBottom: "60px",
          "--swiper-pagination-color": "#000000", // point actif
          "--swiper-pagination-bullet-inactive-color": "#ccc", // points inactifs
          "--swiper-pagination-bullet-inactive-opacity": 1,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 12 },
          768: { slidesPerView: 2.3, spaceBetween: 16 },
          1024: { slidesPerView: 3.3, spaceBetween: 4 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Card className="w-[320px] rounded-3xl overflow-hidden shadow-lg relative mx-12">
              <div className="relative h-[400px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
                <CardContent className="absolute bottom-0 z-20 text-white p-6 backdrop-blur-xl bg-white/5 rounded-b-2xl">
                  <h2 className="text-lg font-semibold mb-2 capitalize drop-shadow-md">
                    {service.title}
                  </h2>
                  <p className="text-sm mb-4 drop-shadow-sm">
                    {service.description}
                  </p>
                  <Button className="w-full bg-white text-black rounded-full px-6 py-6">
                    View more
                  </Button>
                </CardContent>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
