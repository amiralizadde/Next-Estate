import React from "react";
import Image from "next/image";

const Cites = () => {
  return (
    <div className="my-16">
      <div>
        <div className="my-16">
          <p className="text-3xl text-black text-center">یک شهر را برای شروع کار انتخاب کنید.</p>
          <p></p>
        </div>
        <ul className="grid grid-cols-1 xs:grid-cols-2 xs:child:h-[300px] xs:child:w-[200px]  sm:child:h-[350px] sm:child:w-[250px] md:grid-cols-3 md:child:h-[300px] md:child:w-[200px]  lg:grid-cols-5 lg:child:h-[280px] lg:child:w-[200px] lg:px-16 xl:px-40 sm:px-10 child:h-[80vh] child:mx-5 child:mt-3 child:relative">
          <li className="relative flex flex-col items-center justify-center border">
            <Image
              src="/cites/ardabil.jpg"
              className="object-cover w-full h-full"
              width={1000}
              height={500}
              quality={100}
              alt="اردبیل"
            />
            <div className="absolute  top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center border bg-black/45  z-30">
              <p className="text-6xl  text-white text-center md:text-4xl">5</p>
              <p className="text-white text-center mb-4">املاک</p>
              <div className='h-px w-16 bg-yellow-100'></div>
              <p className="text-white text-2xl mt-4 md:text-xl">اردبیل</p>
            </div>
          </li>
          <li className="relative flex flex-col items-center justify-center">
            <Image
              src="/cites/ilam.jpg"
              className="object-cover w-full h-full"
              width={1000}
              height={500}
              quality={100}
              alt="ایلام"
            />
            <div className="absolute  top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center border bg-black/45  z-30">
              <p className="text-6xl  text-white text-center md:text-4xl">9</p>
              <p className="text-white text-center mb-4">املاک</p>
              <div className='h-px w-16 bg-yellow-100'></div>
              <p className="text-white text-2xl mt-4 md:text-xl">ایلام</p>
            </div>
          </li>
          <li className="relative flex flex-col items-center justify-center">
            <Image
              src="/cites/ormye.jpg"
              className="object-cover w-full h-full"
              width={1000}
              height={500}
              quality={100}
              alt="ارومیه"
            />
            <div className="absolute  top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center border bg-black/45  z-30">
              <p className="text-6xl  text-white text-center md:text-4xl">3</p>
              <p className="text-white text-center mb-4">املاک</p>
              <div className='h-px w-16 bg-yellow-100'></div>
              <p className="text-white text-2xl mt-4 md:text-xl">ارومیه</p>
            </div>
          </li>
          <li className="relative flex flex-col items-center justify-center">
            <Image
              src="/cites/tabriz.jpg"
              className="object-cover w-full h-full"
              width={1000}
              height={500}
              quality={100}
              alt="تبریز"
            />
            <div className="absolute  top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center border bg-black/45  z-30">
              <p className="text-6xl  text-white text-center md:text-4xl">6</p>
              <p className="text-white text-center mb-4">املاک</p>
              <div className='h-px w-16 bg-yellow-100'></div>
              <p className="text-white text-2xl mt-4 md:text-xl">تبریز</p>
            </div>
          </li>
          <li className="relative flex flex-col items-center justify-center">
            <Image
              src="/cites/tehran.jpg"
              className="object-cover w-full h-full"
              width={1000}
              height={500}
              quality={100}
              alt="تهران"
            />
            <div className="absolute  top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-center border bg-black/45  z-30">
              <p className="text-6xl md:text-4xl text-white text-center">8</p>
              <p className="text-white text-center mb-4">املاک</p>
              <div className='h-px w-16 bg-yellow-100'></div>
              <p className="text-white text-2xl md:text-xl mt-4">تهران</p>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Cites;
