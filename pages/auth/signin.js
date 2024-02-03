import NavbarAuth from "@/components/modules/NavbarAuth";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import HeaderAuth from "@/components/modules/HeaderAuth";

const signin = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <HeaderAuth /> */}
      <div className="my-24 min-h-96 w-[500px] border ">
        <NavbarAuth />

        <form action="#" className="p-10">
          <input
            type="text"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm"
            placeholder="نام کاربری | ایمیل"
          />
          <input
            type="password"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" رمز عبور "
          />
          <div className="flex items-center my-2">
            <input type="checkbox" id="rememberUserPassword" />
            <label htmlFor="rememberUserPassword" className="text-xs mx-2">
              مرا به خاطر بسپار
            </label>
          </div>
          <div>
            <Link
              href="/auth/passwordRecovery"
              className="text-black/50 text-sm"
            >
              رمز عبور خود را فراموش کرده اید؟
            </Link>
          </div>

          <div className="bg-yellow-100 w-full my-3 text-center text-sm font-bold py-2 rounded">
            <Link href="/"> ورود </Link>
          </div>

          <div className=" text-center flex flex-col items-center justify-center mt-5">
            <p className="text-sm text-black/50 py-4">
              <span className=""> ورود توسط شبکه های اجتماعی </span>
              <span className="py-4  flex items-center justify-center child:mx-4   child:text-xl">
                <span className="border rounded-full p-1 ">
                  <FaGoogle className="w-[18px] h-[18px] " />
                </span>
                <span className="border rounded-full p-1 ">
                  <FaFacebookF className="w-[18px] h-[18px] " />
                </span>
              </span>
            </p>
            <p className="text-sm text-black/50 w-1/2">
              با ایجاد حساب/ورود
              <span className="text-blue-500 cursor-pointer">
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

export default signin;
