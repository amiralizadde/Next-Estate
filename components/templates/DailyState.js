import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const DailyState = () => {
  return (
    <section id="daily-state" className=" bg-yellow-100">
      <div className="py-10">
        <p className="text-4xl text-center ">پیشنهادات ویژه هر روز</p>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          loop= 'true'
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="border text-center">
            <div>
              <Image src='/weekly/weekly1.jpg' width={100} height={100} quality={100} className="w-1/2 mx-auto h-1/2" alt="daily-image"/>
            </div>
            <div>
              <p>کوی صفا خیابان پویان 1</p>
              <p>125,000,000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border text-center">Slide 2</SwiperSlide>
          <SwiperSlide className="border text-center">Slide 3</SwiperSlide>
          <SwiperSlide className="border text-center">Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default DailyState;
