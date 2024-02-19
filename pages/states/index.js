import {
  ChevronDownIcon,
  MapPinIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import styles from "../../styles/states.module.css";
import FeatureItems from "@/components/modules/FeatureItems";
import { featuresItemHome } from "@/db/db";
import { HomeIcon } from "@heroicons/react/24/outline";
import StateModels from "@/models/states";
import UserModels from "@/models/users";
import connectionToDB from "@/utils/db";
import StateBox from "@/components/modules/StateBox";
import { useRouter } from "next/router";
import { filterData } from "@/utils/util";
import MapState from "@/components/templates/state";

const index = (props) => {
  const {states} = props
  const [dataStates, setDataStates] = useState([...states]);
  const [typeState, setTypeState] = useState([]);

  const [cites, setCites] = useState("");
  const [status, setStatus] = useState("");
  const [isShowCites, setIsShowCites] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);
  const [maxMetrage, setMaxMetrage] = useState(null);
  const [minMetrage, setMinMetrage] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000000000]);
  const [room, setRoom] = useState(0);
  const [shower, setShower] = useState(0);
  const [filterdHomeItems, setFilterdHomeItems] = useState([]);

  let router = useRouter();

  let apartment = useRef();
  let home = useRef();
  let land = useRef();
  let shop = useRef();
  let AdministrativeUnit = useRef();
  let villa = useRef();

  useEffect(() => {
    if (router.query.q) {
      const newStates = dataStates.filter((state) => {
        return state.values.statusAd === "rent";
      });
      setDataStates(newStates);
    }
  }, [router.query]);

  const addTypeState = (type) => {
    const isExist = typeState.some((state) => {
      return state === type;
    });
    if (isExist) {
      setTypeState((prevState) => {
        return prevState.filter((state) => {
          return state !== type;
        });
      });
    } else {
      setTypeState((prevState) => [...prevState, type]);
    }
  };

  const addFeatures = (checked, feature) => {
    checked
      ? setFilterdHomeItems((prevState) => [...prevState, feature])
      : setFilterdHomeItems((prevState) => {
          return prevState.filter((featureItem) => {
            return featureItem.id !== feature.id;
          });
        });
  };

  useEffect(() => {
    console.log("dataStates -> ", dataStates);
  }, [dataStates]);

  const filterdata = () => {

    const data = {
      status,
      priceRange,
      room,
      typeState,
    };
    const filteredData = filterData(data, states);

    setDataStates(filteredData);
  };

  return (
    <div className="mt-20 py-12 px-5">
      <div className="lg:grid grid-cols-2">
        {/* Filtered Items 1 */}
        <div>
          <div className="md:grid md:grid-cols-4 items-center ">
            <div className=" flex relative flex-col   md:col-start-1 md:col-span-1 ">
              <div
                className=" relative me-2 w-full "
                onClick={() => setIsShowStatus(!isShowStatus)}
              >
                <label
                  htmlFor="status"
                  className="absolute right-0 -top-5  text-sm"
                >
                  وضعیت
                </label>
                <PencilSquareIcon className="w-6 absolute right-2 top-2 cursor-pointer" />
                <ChevronDownIcon className="w-6 absolute left-2 top-2  cursor-pointer" />
                <input
                  type="text"
                  id="status"
                  defaultValue={status}
                  placeholder="انتخاب کنید"
                  className="h-10 cursor-pointer bg-transparent border w-full text-sm  px-10 child:text-black placeholder:ps-2"
                  autocomplete="off"
                />
              </div>
              {isShowStatus && (
                <ul
                  type="text"
                  id="city"
                  className="absolute border border-black z-20 child:ps-2  py-2 right-0 left-0 top-10 child:py-2 child:text-sm child:cursor-pointer bg-white"
                  onBlur={() => setIsShowStatus(false)}
                >
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                    className="hover:bg-green-100"
                  >
                    برای اجاره
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                    className="hover:bg-green-100"
                  >
                    برای رهن
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setIsShowStatus(false);
                    }}
                    className="hover:bg-green-100"
                  >
                    برای فروش
                  </li>
                </ul>
              )}
            </div>
            <div className="  md:col-start-2 md:col-span-3">
              <ul className=" grid grid-cols-1   sm:grid-cols-3 lg:grid-cols-6 child:border-b child:sm:border-0  child:h-full child:my-1  child:flex child:flex-col child:items-center child:justify-center">
                <li
                  className="cursor-pointer"
                  ref={apartment}
                  onClick={(e) => {
                    addTypeState("apartment");
                    apartment.current.classList.toggle("child:font-bold");
                  }}
                >
                  <Image
                    src="/filteredItems/black.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-1"
                  />
                  <span className="mt-[10px] text-sm ">آپارتمان</span>
                </li>
                <li
                  className="cursor-pointer"
                  ref={home}
                  onClick={(e) => {
                    addTypeState("home");
                    home.current.classList.toggle("child:font-bold");
                  }}
                >
                  <Image
                    src="/filteredItems/black1.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm ">خانه حیاط دار</span>
                </li>

                <li
                  className="cursor-pointer"
                  ref={land}
                  onClick={(e) => {
                    addTypeState("land");
                    land.current.classList.toggle("child:font-bold");
                  }}
                >
                  <Image
                    src="/filteredItems/black2.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm ">زمین و ملک </span>
                </li>

                <li
                  className="cursor-pointer"
                  ref={shop}
                  onClick={(e) => {
                    addTypeState("shop");
                    shop.current.classList.toggle("child:font-bold");
                  }}
                >
                  <Image
                    src="/filteredItems/black3.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm ">مغازه</span>
                </li>

                <li
                  className="cursor-pointer"
                  ref={AdministrativeUnit}
                  onClick={(e) => {
                    addTypeState("AdministrativeUnit");
                    AdministrativeUnit.current.classList.toggle(
                      "child:font-bold"
                    );
                  }}
                >
                  <Image
                    src="/filteredItems/black5.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2 "
                  />
                  <span className=" mt-[10px] text-sm ">واحد اداری</span>
                </li>

                <li
                  className="cursor-pointer"
                  ref={villa}
                  onClick={(e) => {
                    addTypeState("villa");
                    villa.current.classList.toggle("child:font-bold");
                  }}
                >
                  <Image
                    src="/filteredItems/black6.png"
                    width={100}
                    height={100}
                    className="object-cover w-12 transition hover:-translate-y-2"
                  />
                  <span className=" mt-[10px] text-sm ">ویلایی</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Filtered Items 2 */}

          <div className="grid grid-cols-1 md:grid-cols-4 items-center   mt-3 md:py-5">
            {/* تعیین مکان */}
            <div className="mt-12 md:mt-8 flex flex-col md:col-start-1 md:col-span-1 relative me-2 lg:col-start-1 lg:col-span-1">
              <div
                className=" relative me-2 w-full "
                onClick={() => setIsShowCites(!isShowCites)}
              >
                <label
                  htmlFor="city"
                  className="absolute right-0 -top-5  text-sm"
                >
                  یک مکان را انتخاب کنید
                </label>
                <MapPinIcon className="w-6 absolute right-2 top-2 cursor-pointer" />
                <ChevronDownIcon className="w-6 absolute left-2 top-2  cursor-pointer" />
                <input
                  type="text"
                  value={cites}
                  placeholder="همه موقعیت ها"
                  className="h-10 w-full cursor-pointer bg-transparent border text-sm  px-8 child:text-black placeholder:ps-2 "
                />
              </div>
              {isShowCites && (
                <ul
                  type="text"
                  id="city"
                  className="absolute border border-black z-10  py-2 right-0 left-0 top-10 child:py-2 child:text-sm child:cursor-pointer bg-white"
                  onBlur={() => setIsShowCites(false)}
                >
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                    className="hover:bg-green-100 ps-2"
                  >
                    همه موقعیت ها
                  </li>
                  <li
                    onClick={(e) => {
                      setCites(e.target.innerHTML);
                      setIsShowCites(false);
                    }}
                    className="hover:bg-green-100 ps-2"
                  >
                    تهران
                  </li>
                </ul>
              )}
              {/* </div> */}
            </div>
            {/* تعیین متراز */}
            {/* <div className="relative flex w-full mt-8  md:col-start-2 md:col-span-1">
              <input
                type="text"
                value={minMetrage}
                onChange={e=>e.target.value}
                className="border w-1/2 me-2 p-1 placeholder:text-sm"
                placeholder="حداقل متر "
              />
              <input
                type="text"
                value={maxMetrage}
                onChange={e=>e.target.value}
                className="border w-1/2 ms-2 p-1 placeholder:text-sm"
                placeholder="حداکثر متر"
              />
              <span className="absolute -top-5 right-0">اندازه</span>
            </div> */}
            {/* تعیین قیمت */}
            <div className="md:col-start-3 md:col-span-2 md:px-3">
              <p className="my-3">
                حدود قیمت را از <span>{priceRange[0].toLocaleString()}</span> تا{" "}
                <span>{priceRange[1].toLocaleString()}</span> تومان{" "}
              </p>
              <RangeSlider
                min={0}
                max={1000000000}
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
                <span
                  className="border w-[22px] h-[22px] items-center text-base text-center rounded-full cursor-pointer"
                  onClick={() => setRoom((prevState) => prevState + 1)}
                >
                  +
                </span>
                <span>{room}</span>
                <span
                  className="border w-[22px] h-[22px] items-center text-base text-center rounded-full cursor-pointer"
                  onClick={() => setRoom((prevState) => prevState - 1)}
                >
                  -
                </span>
              </div>

              <div className="flex text-sm child:mx-1 my-4">
                <p className="w-1/3 "> حمام </p>
                <span
                  className="border w-[22px] h-[22px] items-center text-base text-center rounded-full cursor-pointer"
                  onClick={() => setShower((prevState) => prevState + 1)}
                >
                  +
                </span>
                <span>{shower}</span>
                <span
                  className="border w-[22px] h-[22px] items-center text-base text-center rounded-full cursor-pointer"
                  onClick={() => setShower((prevState) => prevState - 1)}
                >
                  -
                </span>
              </div>
            </div>

            <div className="lg:col-start-2 lg:col-span-3">
              <div className=" grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 ps-5">
                {featuresItemHome.map((feature) => (
                  <FeatureItems feature={feature} addFeatures={addFeatures} />
                ))}
              </div>
            </div>

            <div></div>
            <div></div>
          </div>

          <button
            onClick={filterdata}
            className="my-8 border bg-yellow-100 pt-3 pb-2 px-14 text-sm font-bold"
          >
            نتایج فیلتر
          </button>

          {/* show Homes Items */}
          <div className="child:my-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-5">
            {dataStates.length ? (
              dataStates.map((state) => <StateBox state={state} />)
            ) : (
              <p> متاسفانه آگهی مطابق با درخواست شما وجود ندارد </p>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="hidden lg:block    p-5">
          <div className="w-full h-screen sticky top-5">
            <MapState />
          </div>
        </div>

      </div>
    </div>
  );
};
 
export async function getStaticProps() {
  connectionToDB();
  const states = await StateModels.find({});

  return {
    props: {
      states: JSON.parse(JSON.stringify(states)),
    },
  };
}

export default index;
