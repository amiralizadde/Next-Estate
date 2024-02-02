import HeaderAuth from "@/components/modules/HeaderAuth";
import NavbarAuth from "@/components/modules/NavbarAuth";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeaderAuth />
      <div className="my-24 min-h-96 w-[500px] border ">
        <NavbarAuth />

        <form action="#" className="p-10">
          <input
            type="text"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder="نام کاربری | ایمیل"
          />
          <input
            type="email"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" ایمیل"
          />
          <input
            type="password"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" رمز عبور "
          />
          <input
            type="password"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" تکرار رمز عبور "
          />
          <div className=" text-black/75 text-justify my-2">
            داده های شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب سایت،
            مدیریت دسترسی به حساب شما، و برای اهداف دیگری که در ما توضیح داده
            شده است، استفاده خواهد شد
            <span className="hover:text-blue-500 cursor-pointer underline ">
              سیاست حفظ حریم خصوصی.
            </span>
          </div>

          <Link href="/">
            <button className="bg-yellow-100 w-full my-3 text-center text-sm font-bold py-2 rounded">
              عضویت
            </button>
          </Link>

          <div className=" text-center flex flex-col items-center justify-center mt-5">
            <p className="text-sm text-black/50 py-4">
              <span className=""> ورود توسط شبکه های اجتماعی </span>
              <span className="py-4  flex items-center justify-center child:mx-4   child:text-xl">
                <span className="border rounded-full p-1 ">
                  <PiTelegramLogoBold className="w-[18px] h-[18px] " />
                </span>
                <span className="border rounded-full p-1 ">
                  <FaFacebookF className="w-[18px] h-[18px] " />
                </span>
              </span>
            </p>
            <p className="text-sm text-black/50 w-1/2">
              با ایجاد حساب/ورود
              <span className="text-blue-500 cursor-pointer mx-1">
                شرایط و ضوابط
              </span>
              ما را قبول میکنید
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
