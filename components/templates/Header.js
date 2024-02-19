import Navbar from "../modules/Navbar";
import styles from "../../styles/home.module.css";
import Image from "next/image";
import { MapPinIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const Header = () => {
  const [cites, setCites] = useState("");
  const [status, setStatus] = useState("");
  const [isShowCites, setIsShowCites] = useState(false);
  const [isShowStatus, setIsShowStatus] = useState(false);
  let router = useRouter()



  useEffect(() => {
    form.setValues({
      ...form.values,
      city:cites,
      statusAd: status
    });
  }, [status]);

  let form = useFormik({
    initialValues:{city:"tehran",statusAd:''},
    validate:(values)=>{
      
      let errors = {}

      if (values.statusAd === '') {
        errors.statusAd = 'یک مورد را انتخاب کنید '
      }
      
      return errors
    },
    onSubmit:(values)=>{
      router.push(`/states?q=${values.statusAd}`)
    }
  })



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
                width={1000}
                height={500}
                className="object-cover w-12 transition hover:-translate-y-1"
              />
              <span className="text-white mt-[10px]">آپارتمان</span>
            </li>
            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home1.png"
                width={1000}
                height={500}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">خانه حیاط دار</span>
            </li>

            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home2.png"
                width={1000}
                height={500}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">زمین و ملک </span>
            </li>

            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home3.png"
                width={1000}
                height={500}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">مغازه</span>
            </li>

            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home4.png"
                width={1000}
                height={500}
                className="object-cover w-12 transition hover:-translate-y-2 "
              />
              <span className="text-white mt-[10px]">واحد اداری</span>
            </li>

            <li className="cursor-pointer">
              <Image
                src="/homeSVG/home6.png"
                width={1000}
                height={500}
                className="object-cover w-12 transition hover:-translate-y-2"
              />
              <span className="text-white mt-[10px]">ویلایی</span>
            </li>
          </ul>
        </div>


        <div className=" w-4/6 my-16  ">
          <form
            
            className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 child:my-5"
            onSubmit={form.handleSubmit}
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
                name='city'
                value={cites}
                onChange={form.handleChange.city}
                placeholder="همه موقعیت ها"
                className="h-10 outline-0 cursor-pointer bg-transparent border text-sm text-white px-8 child:text-black placeholder:ps-2 placeholder:text-white"
                onClick={() => setIsShowCites(!isShowCites)}
                autocomplete="off"
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
                    تهران 
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
                name="statusAd"
                value={status}
                onChange={form.handleChange.statusAd}
                onBlur={form.handleBlur}
                placeholder="انتخاب کنید"
                className="h-10 outline-0 cursor-pointer bg-transparent border text-sm text-white px-10 child:text-black placeholder:ps-2 placeholder:text-white"
                onClick={() => setIsShowStatus(!isShowStatus)}
                autocomplete="off"
              />
               <span className="text-white text-xs">{form.errors.statusAd && form.touched.statusAd && form.errors.statusAd}</span>
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
                      setCites('تهران')
                      setIsShowStatus(false);
                    }}
                  >
                    {" "}
                    برای اجاره{" "}
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setCites('تهران')
                      setIsShowStatus(false);
                    }}
                  >
                    {" "}
                    برای رهن{" "}
                  </li>
                  <li
                    onClick={(e) => {
                      setStatus(e.target.innerHTML);
                      setCites('تهران')
                      setIsShowStatus(false);
                    }}
                  >
                    برای خرید{" "}
                  </li>
                </ul>
              )}
            </div>
            <button type="submit" className="text-xs h-10 tracking-normal bg-yellow-100 text-black hover:bg-transparent transition border border-yellow-100 hover:text-white font-bold">
              جستجو
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
