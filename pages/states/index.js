import {
  ChevronDownIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "../../styles/states.module.css";
import FeatureItems from "@/components/modules/FeatureItems";
import { featuresItemHome } from "@/db/db";
import { HomeIcon } from "@heroicons/react/24/outline";
import StateModels from "@/models/states";
import UserModels from "@/models/users";

const index = () => {
  const [cites, setCites] = useState("");
  const [status, setStatus] = useState("");
  const [isShowCites, setIsShowCites] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filterdHomeItems, setFilterdHomeItems] = useState([]);

  

  return (
    <div className="mt-20 py-12 px-5">
      <div className="lg:grid grid-cols-2">
        {/* Filtered Items 1 */}
        <div>
          <div className="md:grid md:grid-cols-4 items-center ">
            <div className=" flex flex-col relative me-2  md:col-start-1 md:col-span-1">
              <label
                htmlFor="status"
                className="absolute right-0 -top-5  text-sm"
              >
                وضعیت
              </label>
              <PencilSquareIcon className="w-6 absolute right-2 top-2 " />
              <ChevronDownIcon className="w-6 absolute left-2 top-2  " />
              <input
                type="text"
                id="status"
                defaultValue={status}
                placeholder="انتخاب کنید"
                className="h-10 cursor-pointer bg-transparent border text-sm  px-10 child:text-black placeholder:ps-2"
                onClick={() => setIsShowStatus(!isShowStatus)}
              />
              {isShowStatus && (
                <ul
                  type="text"
                  id="city"
                  className="absolute border border-black z-20 px-5 py-2 right-0 left-0 top-10 child:py-2 child:text-sm child:cursor-pointer bg-white"
                  onBlur={() => setIsShowStatus(false)}
                >
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                  >
                    برای اجاره
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                  >
                    برای رهن
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                  >
                    برای خرید
                  </li>
                </ul>
              )}
            </div>
            <div className="  md:col-start-2 md:col-span-3">
              <ul className=" grid grid-cols-1   sm:grid-cols-3 lg:grid-cols-6 child:border-b child:sm:border-0  child:h-full child:my-1  child:flex child:flex-col child:items-center child:justify-center">
                <li className="cursor-pointer lg:border-none">
                  <Image
                    src="/filteredItems/black.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-1"
                  />
                  <span className="mt-[10px] text-sm text-black/50">
                    آپارتمان
                  </span>
                </li>
                <li className="cursor-pointer">
                  <Image
                    src="/filteredItems/black1.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm text-black/50">
                    خانه حیاط دار
                  </span>
                </li>

                <li className="cursor-pointer">
                  <Image
                    src="/filteredItems/black2.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm text-black/50">
                    زمین و ملک{" "}
                  </span>
                </li>

                <li className="cursor-pointer">
                  <Image
                    src="/filteredItems/black3.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm text-black/50">
                    مغازه
                  </span>
                </li>

                <li className="cursor-pointer">
                  <Image
                    src="/filteredItems/black5.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm text-black/50">
                    واحد اداری
                  </span>
                </li>

                <li className="cursor-pointer">
                  <Image
                    src="/filteredItems/black6.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2"
                  />
                  <span className=" mt-[10px] text-sm text-black/50">
                    ویلایی
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Filtered Items 2 */}

          <div className="grid grid-cols-1 md:grid-cols-4 items-center   mt-3 md:py-5">
            {/* تعیین مکان */}
            <div className="mt-12 md:mt-8 flex flex-col md:col-start-1 md:col-span-1 relative me-2 lg:col-start-1 lg:col-span-1">
              <label
                htmlFor="city"
                className="absolute right-0 -top-5  text-sm"
              >
                یک مکان را انتخاب کنید
              </label>
              <MapPinIcon className="w-6 absolute right-2 top-2 " />
              <ChevronDownIcon className="w-6 absolute left-2 top-2  " />
              <input
                type="text"
                value={cites}
                placeholder="همه موقعیت ها"
                className="h-10  cursor-pointer bg-transparent border text-sm  px-8 child:text-black placeholder:ps-2 "
                onClick={() => setIsShowCites(!isShowCites)}
              />
              {isShowCites && (
                <ul
                  type="text"
                  id="city"
                  className="absolute border border-black z-10 px-5 py-2 right-0 left-0 top-10 child:py-2 child:text-sm child:cursor-pointer bg-white"
                  onBlur={() => setIsShowCites(false)}
                >
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                  >
                    همه موقعیت ها
                  </li>
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                  >
                    تبریز
                  </li>
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                  >
                    تهران
                  </li>
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                  >
                    اصفهان
                  </li>
                </ul>
              )}
              {/* </div> */}
            </div>
            {/* تعیین متراز */}
            <div className="relative flex w-full mt-8  md:col-start-2 md:col-span-1">
              <input
                type="text"
                className="border w-1/2 me-2 p-1 placeholder:text-sm"
                placeholder="حداقل متر "
              />
              <input
                type="text"
                className="border w-1/2 ms-2 p-1 placeholder:text-sm"
                placeholder="حداکثر متر"
              />
              <span className="absolute -top-5 right-0">اندازه</span>
            </div>
            {/* تعیین قیمت */}
            <div className="md:col-start-3 md:col-span-2 md:px-3">
              <p className="my-3">
                حدود قیمت را از <span>{priceRange[0]}</span> تا{" "}
                <span>{priceRange[1]}</span>میلیون تومان{" "}
              </p>
              <RangeSlider
                min={0}
                max={100000000}
                step={1000}
                onInput={setPriceRange}
                className={`${styles.priceRange}`}
              />
            </div>
          </div>
          {/* Filtered Items 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className=" my-5 p-5 lg:px-0 lg:col-start-1 lg:col-span-1 lg:my-0">
              <div className="flex text-sm child:mx-1">
                <p className="w-1/3 ">اتاق </p>
                <span className="border w-[22px] h-[22px] items-center text-base text-center rounded-full">
                  +
                </span>
                <span>0</span>
                <span className="border w-[22px] h-[22px] items-center text-base text-center rounded-full">
                  -
                </span>
              </div>

              <div className="flex text-sm child:mx-1 my-4">
                <p className="w-1/3 "> حمام </p>
                <span className="border w-[22px] h-[22px] items-center text-base text-center rounded-full">
                  +
                </span>
                <span>0</span>
                <span className="border w-[22px] h-[22px] items-center text-base text-center rounded-full">
                  -
                </span>
              </div>
            </div>

            <div className="lg:col-start-2 lg:col-span-3">
              <div className=" grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 ps-5">
                {featuresItemHome.map((feature) => (
                  <FeatureItems feature={feature} />
                ))}
              </div>
            </div>

            <div></div>
            <div></div>
          </div>

          <button className="my-8 border bg-yellow-100 pt-3 pb-2 px-14 text-sm font-bold">
            نتایج فیلتر
          </button>

          {/* show Homes Items */}
          <div className="child:my-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
            <div>
              <div className="relative border">
                <img
                  src="/homeImage/house1.jpg"
                  className="w-full  h-full object-cover"
                  alt=""
                />
                <p className="absolute top-3 right-3 bg-black/50 text-white px-2">
                  برای اجاره
                </p>
                <p className="absolute bottom-3 right-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:right-1">
                  شناسه 1112
                </p>
                <p className="absolute bottom-3 left-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:left-1">
                  900,000 تومان
                </p>
              </div>
              <div>
                <p className="text-xl font-bold my-2">
                  خیابان طالقانی میدان ولیعصر
                </p>
                <p className="text-black/50"> تهران منطقه 4 </p>
                <p className="flex">
                  <HomeIcon className="w-4 mx-1" /> <span>700متر</span>_
                  <span className="mx-1"> 2 </span>_
                  <span className="mx-1"> مبلمان </span>
                </p>
              </div>
            </div>

            <div>
              <div className="relative border">
                <img
                  src="/homeImage/house2.jpg"
                  className="w-full  h-full object-cover"
                  alt=""
                />
                <p className="absolute top-3 right-3 bg-black/50 text-white px-2">
                  برای اجاره
                </p>
                <p className="absolute bottom-3 right-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:right-1 ">
                  شناسه 1112
                </p>
                <p className="absolute bottom-3 left-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:left-1 ">
                  900,000 تومان
                </p>
              </div>
              <div>
                <p className="text-xl font-bold my-2">
                  خیابان طالقانی میدان ولیعصر
                </p>
                <p className="text-black/50"> تهران منطقه 4 </p>
                <p className="flex">
                  <HomeIcon className="w-4 mx-1" /> <span>700متر</span>_
                  <span className="mx-1"> 2 </span>_
                  <span className="mx-1"> مبلمان </span>
                </p>
              </div>
            </div>

            <div>
              <div className="relative border">
                <img
                  src="/homeImage/house3.jpg"
                  className="w-full  h-full object-cover"
                  alt=""
                />
                <p className="absolute top-3 right-3 bg-black/50 text-white px-2">
                  برای اجاره
                </p>
                <p className="absolute bottom-3 right-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:right-1 ">
                  شناسه 1112
                </p>
                <p className="absolute bottom-3 left-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:left-1 ">
                  900,000 تومان
                </p>
              </div>
              <div>
                <p className="text-xl font-bold my-2">
                  خیابان طالقانی میدان ولیعصر
                </p>
                <p className="text-black/50"> تهران منطقه 4 </p>
                <p className="flex">
                  <HomeIcon className="w-4 mx-1" /> <span>700متر</span>_
                  <span className="mx-1"> 2 </span>_
                  <span className="mx-1"> مبلمان </span>
                </p>
              </div>
            </div>

            <div>
              <div className="relative border">
                <img
                  src="/homeImage/house4.jpg"
                  className="w-full  h-full object-cover"
                  alt=""
                />
                <p className="absolute top-3 right-3 bg-black/50 text-white px-2">
                  برای اجاره
                </p>
                <p className="absolute bottom-3 right-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:right-1">
                  شناسه 1112
                </p>
                <p className="absolute bottom-3 left-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:left-1">
                  900,000 تومان
                </p>
              </div>
              <div>
                <p className="text-xl font-bold my-2">
                  خیابان طالقانی میدان ولیعصر
                </p>
                <p className="text-black/50"> تهران منطقه 4 </p>
                <p className="flex">
                  <HomeIcon className="w-4 mx-1" /> <span>700متر</span>_
                  <span className="mx-1"> 2 </span>_
                  <span className="mx-1"> مبلمان </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="hidden lg:block border border-r-2 border-blue-700">
          Map
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps (context){

  let states =await UserModels.findOne({ username :"amir12"})
  console.log('context -> ' ,context);

  return{
    props:{name:'amir'}
  }
}


export default index;
