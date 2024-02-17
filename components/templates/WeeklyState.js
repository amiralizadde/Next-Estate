import React from "react";
import Image from "next/image";
import styles from "../../styles/home.module.css";

const WeeklyState = () => {
  return (
    <div className=" py-28">
      <div>
        <h1 className="text-center text-5xl tracking-normal font-bold font-shekari">
          املاک پیشنهادی این هفته{" "}
        </h1>
        <p className="text-center text-gray-400 mt-2">
          املاک ویژه با قیمت های مناسب از تمام شهرهای ایران
        </p>
      </div>

      <div
        className={`px-16 transition grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 child:cursor-pointer child:transition  lg:max-h-screen grid-rows-weekly9 md:grid-rows-weekly4 lg:grid-rows-2 lg:px-48 lg:py-10  gap-2 ${styles.weeklyState}`}
      >
        <div className="relative row-start-1 row-end-2 md:col-start-1 md:col-end-3   md:row-start-1 md:row-end-2   lg:col-start-3 lg:col-end-5   lg:row-start-1 lg:row-end-2">
          <img
            src="/weekly/weekly1.jpg"
            className="h-full object-cover w-full "
            width={100}
            height={100}
          />

          <p className="absolute top-3 right-2 p-1 rounded text-white text-sm font-bold z-20 bg-black/50">
            برای رهن
          </p>
          <p className="absolute right-2 bottom-8  font-DanaMedium text-white w-1/2 text-xl">
            خیابان ایثار میدان امیر کبیر
          </p>
          <p className="absolute right-2 bottom-2   text-white/75 text-base">
            ایلام_تهران , AF
          </p>
          <p className="absolute left-2 bottom-1   bg-white rounded py-1 px-2 font-bold">
            900 تومان
          </p>
        </div>

        <div className="relative row-start-2 row-end-4 md:col-start-2 md:col-end-3   md:row-start-2 md:row-end-3   lg:col-start-2 lg:col-end-3   lg:row-start-1 lg:row-end-2">
          <img
            src="/weekly/weekly2.jpg"
            className="h-full object-cover  w-full "
            width={100}
            height={100}
          />
          <p className="absolute top-3 right-2 p-1 rounded text-white text-sm font-bold z-20 bg-black/50">
            برای رهن
          </p>
          <p className="absolute right-2 bottom-8  font-DanaMedium text-white w-1/2 text-xl">
            خیابان ایثار میدان امیر کبیر
          </p>
          <p className="absolute right-2 bottom-2   text-white/75 text-base">
            ایلام_تهران , AF
          </p>
          <p className="absolute left-2 bottom-1   bg-white rounded py-1 px-2 font-bold">
            900 تومان
          </p>
        </div>
        <div className="relative row-start-4 row-end-6 md:col-start-1 md:col-end-2   md:row-start-2 md:row-end-4   lg:col-start-1 lg:col-end-2   lg:row-start-1 lg:row-end-3">
          <img
            src="/weekly/weekly3.jpg"
            className="h-full object-cover    w-full "
            width={100}
            height={100}
          />
          <p className="absolute top-3 right-2 p-1 rounded text-white text-sm font-bold z-20 bg-black/50">
            برای رهن
          </p>
          <p className="absolute right-2 bottom-8  font-DanaMedium text-white w-1/2 text-xl">
            خیابان ایثار میدان امیر کبیر
          </p>
          <p className="absolute right-2 bottom-2   text-white/75 text-base">
            ایلام_تهران , AF
          </p>
          <p className="absolute left-2 bottom-1   bg-white rounded py-1 px-2 font-bold">
            900 تومان
          </p>
        </div>
        <div className="relative row-start-6 row-end-8 md:col-start-2 md:col-end-3   md:row-start-3 md:row-end-4   lg:col-start-4 lg:col-end-5   lg:row-start-2 lg:row-end-3">
          <img
            src="/weekly/weekly4.jpg"
            className="h-full object-cover    w-full "
            width={100}
            height={100}
          />
          <p className="absolute top-3 right-2 p-1 rounded text-white text-sm font-bold z-20 bg-black/50">
            برای رهن
          </p>
          <p className="absolute right-2 bottom-8  font-DanaMedium text-white w-1/2 text-xl">
            خیابان ایثار میدان امیر کبیر
          </p>
          <p className="absolute right-2 bottom-2   text-white/75 text-base">
            ایلام_تهران , AF
          </p>
          <p className="absolute left-2 bottom-1   bg-white rounded py-1 px-2 font-bold">
            900 تومان
          </p>
        </div>
        <div className="relative row-start-8 row-end-9 md:col-start-1 md:col-end-3   md:row-start-4 md:row-end-5   lg:col-start-2 lg:col-end-4   lg:row-start-2 lg:row-end-3">
          <img
            src="/weekly/weekly5.jpg"
            className="h-full object-cover  w-full "
            width={100}
            height={100}
          />
          <p className="absolute top-3 right-2 p-1 rounded text-white text-sm font-bold z-20 bg-black/50">
            برای رهن
          </p>
          <p className="absolute right-2 bottom-8  font-DanaMedium text-white w-1/2 text-xl">
            خیابان ایثار میدان امیر کبیر
          </p>
          <p className="absolute right-2 bottom-2   text-white/75 text-base">
            ایلام_تهران , AF
          </p>
          <p className="absolute left-2 bottom-1   bg-white rounded py-1 px-2 font-bold">
            900 تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyState;
