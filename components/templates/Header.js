import Navbar from "../modules/Navbar";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import { MapPinIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [cites, setCites] = useState("");
  const [status, setStatus] = useState("");
  const [isShowCites, setIsShowCites] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);

  return (
    <div>
      <Navbar />
      <header
        className={`min-h-screen bg-home-header bg-fixed  bg-top flex flex-col items-center justify-center ${styles.header_content}`}
      >
        <div className="p-2 mt-20">
          <h1 className="text-3xl sm:text-5xl text-white font-DanaMedium">
            جستجوی ملک
          </h1>
        </div>
        <div className="w-4/6 mt-7">
          <ul className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 child:border-b child:sm:border-0 child:lg:border-r child:h-full child:my-3  child:flex child:flex-col child:items-center child:justify-center">
            <li className="cursor-pointer lg:border-none">
              <Image
                src="/homeSVG/home1.png"
                width={100}
                height={100}
                className="object-cover w-12 transition hover:-translate-y-1"
              />
              <span className="text-white mt-[10px]">آپارتمان</span>
            </li>
            {/* <div className="w-full h-px sm:w-px sm:h-16 my-5 bg-white/75 "></div> */}
            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home1.png"
                width={100}
                height={100}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">خانه حیاط دار</span>
            </li>
            {/* <div className="w-full h-px sm:w-px sm:h-16 my-5 bg-white/75 "></div> */}
            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home2.png"
                width={100}
                height={100}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">زمین و ملک </span>
            </li>
            {/* <div className="w-full h-px sm:w-px sm:h-16 my-5 bg-white/75 "></div> */}
            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home3.png"
                width={100}
                height={100}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">مغازه</span>
            </li>
            {/* <div className="w-full h-px sm:w-px sm:h-16 my-5 bg-white/75 "></div> */}
            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home4.png"
                width={100}
                height={100}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">واحد اداری</span>
            </li>
            {/* <div className="w-full h-px sm:w-px sm:h-16 my-5 bg-white/75 "></div> */}
            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home6.png"
                width={100}
                height={100}
                className="object-cover w-12 transition hover:-translate-y-2"
              />
              <span className="text-white mt-[10px]">ویلایی</span>
            </li>
          </ul>
        </div>
        <div className=" w-4/6 my-16  ">
          <form
            action="#"
            className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 child:my-5"
          >
            <div className=" flex flex-col relative me-2 lg:col-start-1 lg:col-end-3">
              <label
                htmlFor="city"
                className="absolute right-0 -top-5 text-white text-sm"
              >
                یک مکان را انتخاب کنید
              </label>
              <MapPinIcon className="w-6 absolute right-2 top-2 text-white" />
              <ChevronDownIcon className="w-6 absolute left-2 top-2 text-white " />
              <input
                type="text"
                value={cites}
                placeholder="همه موقعیت ها"
                className="h-10  cursor-pointer bg-transparent border text-sm text-white px-8 child:text-black placeholder:ps-2 placeholder:text-white"
                onClick={() => setIsShowCites(!isShowCites)}
              />
              {isShowCites && (
                <ul
                  type="text"
                  id="city"
                  className="absolute px-5 py-2 right-0 left-0 top-10 child:py-2 child:text-sm child:cursor-pointer bg-white"
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
                    {" "}
                    تبریز{" "}
                  </li>
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                  >
                    تهران{" "}
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
            <div className=" flex flex-col relative me-2 lg:col-start-3 lg:col-end-5">
              <label
                htmlFor="status"
                className="absolute right-0 -top-5 text-white text-sm"
              >
                وضعیت
              </label>
              <PencilSquareIcon className="w-6 absolute right-2 top-2 text-white" />
              <ChevronDownIcon className="w-6 absolute left-2 top-2 text-white " />
              <input
                type="text"
                id="status"
                defaultValue={status}
                placeholder="انتخاب کنید"
                className="h-10 cursor-pointer bg-transparent border text-sm text-white px-10 child:text-black placeholder:ps-2 placeholder:text-white"
                onClick={() => setIsShowStatus(!isShowStatus)}
              />
              {isShowStatus && (
                <ul
                  type="text"
                  id="city"
                  className="absolute px-5 py-2 right-0 left-0 top-10 child:py-2 child:text-sm child:cursor-pointer bg-white"
                  onBlur={() => setIsShowStatus(false)}
                >
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                  >
                    {" "}
                    برای اجاره{" "}
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                  >
                    {" "}
                    برای رهن{" "}
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                  >
                    برای خرید{" "}
                  </li>
                </ul>
              )}
            </div>
            <button className="text-xs h-10 tracking-normal bg-yellow-100 text-black hover:bg-transparent transition border border-yellow-100 hover:text-white font-bold">
              جستجو{" "}
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
