import React from "react";
import { LiaHotjar } from "react-icons/lia";
import { LuSofa } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import {
  MdOutlineBedroomChild,
  MdHeight,
  MdOutlineDateRange,
} from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { CiLineHeight } from "react-icons/ci";
import { FaWarehouse } from "react-icons/fa";
import { RxWidth } from "react-icons/rx";
import { CiParking1 } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { TbDog } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { GiExitDoor } from "react-icons/gi";
import { MdAddHome } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { CheckIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { BsSignpost2 } from "react-icons/bs";

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
        <div className="px-5 xs:px-16 lg:pe-24 lg:ps-64  ">
          {/* general Information */}
          <div className="my-5 lg:flex lg:items-center lg:justify-evenly ">
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
          <hr />

          <div className=" py-5  flex items-center justify-between w-full">
            <div className="w-2/3 ">
              <p className="text-xl md:text-4xl">خیابان خیام میدان ولیعصر</p>
              <p className="text-xs mt-4"> ۱۲ بهمن ۱۴۰۲ </p>
            </div>
            <div className="md:me-5 ">
              <p className="text-sm bg-blue-400 w-16 text-center rounded text-white">
                برای رهن
              </p>
              <p className="flex flex-col xs:flex-row mt-4">
                <span className="text-sm"> شناسه ملک : </span>
                <span className="text-sm font-bold "> 1255 </span>
              </p>
            </div>
          </div>

          <hr />

          {/* compelete-features */}

          <div className="grid grid-cols-2  md:grid-cols-3   gap-y-3 gap-x-1">
            <div className="col-start-1 col-span-3 child:font-bold child:text-sm mt-4">
              <p> سال ساخت : </p>
              <p> 1389/11/14 </p>
            </div>

            <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-1 text-xl ">
              مشخصات
            </div>
            <div className="col-start-1 col-span-2 md:col-start-2 md:col-span-2">
              <ul className="grid grid-cols-1 md:grid-cols-2">
                <li className="flex items-center my-2">
                  <MdOutlineBedroomChild className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    اتاق خواب :{" "}
                  </span>
                  <span> 2 </span>
                </li>
                <li className="flex items-center my-2">
                  <FaShower className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    حمام :{" "}
                  </span>
                  <span> 1 </span>
                </li>
                <li className="flex items-center my-2">
                  <SlSizeFullscreen className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    اندازه ملک :{" "}
                  </span>
                  <span> 720متر </span>
                </li>
                <li className="flex items-center my-2">
                  <CiLineHeight className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    طبقه :{" "}
                  </span>
                  <span> 15 </span>
                </li>
                <li className="flex items-center my-2">
                  <FaWarehouse className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    کل طبقات :{" "}
                  </span>
                  <span> 12 </span>
                </li>
                <li className="flex items-center my-2">
                  <FaWarehouse className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    کل طبقات :{" "}
                  </span>
                  <span> 12 </span>
                </li>
                <li className="flex items-center my-2">
                  <LiaHotjar className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    گرمایش :{" "}
                  </span>
                  <span> شوفاز </span>
                </li>
                <li className="flex items-center my-2">
                  <LuSofa className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    محل اقامت :{" "}
                  </span>
                  <span> مبلمان </span>
                </li>
              </ul>

              <hr className="my-5" />

              <ul className="grid grid-cols-1 md:grid-cols-2">
                <li className="flex items-center my-2">
                  <MdHeight className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    ارتفاع سقف :{" "}
                  </span>
                  <span> 3.4متر </span>
                </li>
                <li className="flex items-center my-2">
                  <RxWidth className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    فاصله از مرکز :{" "}
                  </span>
                  <span> مرکز شهر </span>
                </li>
                <li className="flex items-center my-2">
                  <CiParking1 className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    پارکینگ :{" "}
                  </span>
                  <span> دارد </span>
                </li>
                <li className="flex items-center my-2">
                  <MdOutlineDateRange className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    تاریخ انتشار :{" "}
                  </span>
                  <span> 1402/11/10 </span>
                </li>
                <li className="flex items-center my-2">
                  <FaWarehouse className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    کل طبقات :{" "}
                  </span>
                  <span> 12 </span>
                </li>
                <li className="flex items-center my-2">
                  <FaWarehouse className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    کل طبقات :{" "}
                  </span>
                  <span> 12 </span>
                </li>
                <li className="flex items-center my-2">
                  <LiaHotjar className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    گرمایش :{" "}
                  </span>
                  <span> شوفاز </span>
                </li>
                <li className="flex items-center my-2">
                  <LuSofa className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    {" "}
                    محل اقامت :{" "}
                  </span>
                  <span> مبلمان </span>
                </li>
              </ul>
            </div>

            <hr className="my-5 col-start-1 col-span-3 w-full" />

            <div className=" col-start-1 col-span-2 md:col-start-1 md:col-span-1">
              شرایط لیزینگ
            </div>
            <div className=" col-start-1 col-span-2 md:col-start-2 md:col-span-2">
              <ul className="grid grid-cols-1 lg:grid-cols-2">
                <li className="flex items-center my-2">
                  <GiMoneyStack className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    سپرده :
                  </span>
                  <span> 1900 </span>
                </li>
                <li className="flex items-center my-2">
                  <TbDog className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    حیوانات خانگی :
                  </span>
                  <span> غیرمجاز </span>
                </li>
                <li className="flex items-center my-2">
                  <CiDollar className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    شیوه پرداخت :
                  </span>
                  <span> ماهیانه </span>
                </li>
                <li className="flex items-center my-2">
                  <GiExitDoor className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    سکونت :
                  </span>
                  <span> در دوماه </span>
                </li>
              </ul>
            </div>

            <hr className="my-5 col-start-1 col-span-3 w-full" />

            <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-1">
              هزینه ها
            </div>
            <div className="col-start-1 col-span-2 md:col-start-2 md:col-span-2">
              <ul className="grid grid-cols-1 lg:grid-cols-2">
                <li className="flex items-center my-2">
                  <MdAddHome className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    شارژ ساختمان :
                  </span>
                  <span> 110 </span>
                </li>
                <li className="flex items-center my-2">
                  <PiTelevisionSimpleBold className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    شارژ تلویزیون:
                  </span>
                  <span> 80 </span>
                </li>
                <li className="flex items-center my-2">
                  <MdElectricBolt className="text-base text-black/50" />
                  <span className="me-4 ms-1 text-sm text-black/50">
                    پول برق :
                  </span>
                  <span> بعد از دوره </span>
                </li>
              </ul>
            </div>

            <hr className="my-5 col-start-1 col-span-3 w-full" />

            <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-1">
              امکانات
            </div>
            <div className="col-start-1 col-span-2 md:col-start-2 md:col-span-2">
              <ul className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    آب گرم
                  </span>
                </li>

                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    آب گرم
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    آسانسور
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    استخر
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    آشپزخانه مدرن
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    باشگاه بدنسازی
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    بالکن
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    پارکینگ
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    وای فای
                  </span>
                </li>
                <li className="flex items-center my-2">
                  <CheckIcon className="text-base text-black/50 w-5 border border-black rounded-full me-1" />
                  <span className="me-4 ms-1 text-base text-black/50">
                    سنگ گرانیت
                  </span>
                </li>
              </ul>
            </div>

            <hr className="my-5 col-start-1 col-span-3 w-full" />

            <div className="col-start-1 col-span-2 md:col-start-1 md:col-span-1">
              موقعیت
            </div>
            <div className="col-start-1 col-span-2 md:col-start-2 md:col-span-2 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <p className="flex">
                    <MapPinIcon className="w-5 text-black/50 me-2 " />
                    <span className="text-black/50"> آدرس کوتاه: </span>
                  </p>
                  <p className="px-8 my-2"> تهران منطقه نواب </p>
                </div>
                <div>
                  <p className="flex">
                    <MapPinIcon className="w-5 text-black/50 me-2" />
                    <span className="text-black/50"> آدرس دقیق: </span>
                  </p>
                  <p className="px-8 my-2">
                    تهران منطقه نواب کوچه گلستان فرفی پورپرانداخ پلاک 4
                  </p>
                </div>
                <div>
                  <p className="flex my-3">
                    <BsSignpost2 className="mx-1 text-black/50" />
                    <span className="text-black/50 ">کدپستی:</span>
                    <span className="ms-4">158158-15535</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsHome;
