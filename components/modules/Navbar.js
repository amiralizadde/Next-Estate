import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  let router = useRouter();

  return (
    <navbar className=" bg-white lg:bg-black fixed right-0 top-0 left-0 z-40 ">
      <div className="max-lg:container w-full flex items-center justify-between  h-[70px]  lg:h-[60px] lg:px-9">
        <div className="lg:hidden">
          <Bars3Icon
            className="w-5 text-black"
            onClick={() => setIsShowMenu(!isShowMenu)}
          />
        </div>
        <div className="flex w-auto">
          <Link href="/" className="text-xl font-bold text-black lg:text-white">
            <span className="text-yellow-100">ZU</span>
            <span>HAUS</span>
          </Link>

          <ul className="hidden lg:flex  items-center justify-start text-white child:pe-5 child:ms-4  child:font-Dana child:text-base ms-5">
            <Link
              href="/"
              className={`${
                router.pathname === "/" ? "text-yellow-100" : "text-white"
              }`}
            >
              خانه
            </Link>
            <Link
              href="/states"
              className={`${
                router.pathname === "/states" ? "text-yellow-100" : "text-white"
              }`}
            >
              آگهی های ملک
            </Link>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className="flex ">
          <button className="hidden   relative lg:flex items-center justify-center mx-2 rounded border text-center border-yellow-100 py-2 child:text-white pe-6 ps-8">
            <p className="hover:text-yellow-100">
              <span className=" text-2xl right-3 absolute">+</span>
              <span className="text-xs font-Dana font-bold ">افزودن ملک</span>
            </p>
          </button>
          <Link href='/auth/signin' className="py-2 px-[11px] border  border-black rounded-sm lg:border-white ">
            <UserIcon className="w-5 lg:text-white" />
          </Link>
        </div>
      </div>
      {/* ---collaps Menu ---- */}
      {isShowMenu ? (
        <div className="lg:hidden">
          <div
            className={`container transition-all overflow-hidden ${styles.showMenu}`}
          >
            <ul className="child:flex child:items-center child:border-b child:py-[9px] child:relative">
              <li className="">
                <p className="text-sm">خانه</p>
                <ChevronLeftIcon className="w-3 absolute right-1/2" />
              </li>
              <li>
                <p className="text-sm">آگهی های ملک</p>
                <ChevronLeftIcon className="w-3 absolute right-1/2" />
              </li>
              <li>
                <p className="text-sm">درباره ما</p>
                <ChevronLeftIcon className="w-3 absolute right-1/2" />
              </li>
              <li>
                <p className="text-sm">تماس با ما</p>
                <ChevronLeftIcon className="w-3 absolute right-1/2" />{" "}
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </navbar>
  );
};

export default Navbar;
