import React from "react";
import { LiaHotjar } from "react-icons/lia";
import { LuSofa } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";

const DetailsHome = () => {
  return (
    <div className="mt-16 ">
      {/* images home */}
      <header className="">
        <div className="">
          <img
            src="/homeImage/house5.jpg"
            alt=""
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </header>

      <section>
        <div className="px-8  border">
          {/* general Information */}
          <div className="my-5 lg:flex lg:items-center lg:justify-evenly">
            <p className="text-2xl text-blue-300 font-bold my-5">
              800.000 تومان
            </p>

            <div className="child:my-4 grid xs:grid-cols-2 lg:grid-cols-4 lg:child:mx-3 ">

              <div className="flex">
                <LiaHotjar className="text-4xl " />
                <p className="flex flex-col ms-2">
                  <span className="text-xs"> گرمایش </span>
                  <span className="text-xs font-bold"> شوفاز </span>
                </p>
              </div>

              <div className="flex">
                <LuSofa className="text-4xl " />
                <p className="flex flex-col ms-2">
                  <span className="text-xs"> محل اقامت </span>
                  <span className="text-xs font-bold"> مبلمان </span>
                </p>
              </div>
              <div className="flex">
                <IoBedOutline className="text-4xl " />
                <p className="flex flex-col ms-2">
                  <span className="text-xs"> تعداد خواب </span>
                  <span className="text-xs font-bold"> 1 اتاق خواب </span>
                </p>
              </div>
              <div className="flex">
                <SlSizeFullscreen className="text-3xl " />
                <p className="flex flex-col ms-2">
                  <span className="text-xs"> اندازه ملک </span>
                  <span className="text-xs font-bold"> 720متر </span>
                </p>
              </div>

            </div>
            <button className="pt-[10px] px-8 pb-2 text-sm  bg-yellow-100">
              درخواست بازدید
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsHome;
