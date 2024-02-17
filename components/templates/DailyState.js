import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from 'swiper/modules';

const DailyState = ({ dailyStates }) => {
  // console.log('dailyStates -> ' , dailyStates);

  return (
    <section id="daily-state" className=" bg-yellow-100 py-12">
      <div className="py-10">
        <p className="text-5xl text-center font-shekari tracking-wide font-bold">پیشنهادات ویژه هر روز</p>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300:{
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {dailyStates.map((state) => (
            <SwiperSlide className=" text-center">
              <div>
                <img
                  src={`./${state.image}`}
                  width={100}
                  height={100}
                  quality={100}
                  className="w-[270px] mx-auto h-[270px] rounded-full"
                  alt="daily-image"
                />
              </div>
              <div>
                <p className="font-bold my-2 ">{state.values.belvar}</p>
                <p className="text-sm font-bold">
                  {state.values.statusAd === "rent"
                    ? Number(state.values.deposit).toLocaleString()
                    : Number(state.values.price).toLocaleString()}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DailyState;
