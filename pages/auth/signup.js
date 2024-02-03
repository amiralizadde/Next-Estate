import NavbarAuth from "@/components/modules/NavbarAuth";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { createUser } from "@/services/axios/requests/UserAuth";
import swal from "sweetalert";
import { useRouter } from "next/router";

const signup = () => {
  let router = useRouter()
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const createUserHandler =async (e) => {
    e.preventDefault();
    let data = {
      name,
      lastname,
      username,
      email,
      password,
    };

    await createUser(data)
      .then((response) => {
        swal({
          title: "Good",
          text: response,
          icon: "success",
        });
        router.replace('/')
      })
      .catch((err) => {
        swal({
          title: "oh!",
          text: err,
          icon: "warning",
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <HeaderAuth /> */}
      <div className="my-24 min-h-96 w-[500px] border ">
        <NavbarAuth />

        <form action="#" className="p-10" onSubmit={createUserHandler}>
          <input
            type="text"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder="نام   "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" نام  خانوادگی   "
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder="نام کاربری  "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" رمز عبور "
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type="password"
            className="border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3"
            placeholder=" تکرار رمز عبور "
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className=" text-black/75 text-justify my-2">
            داده های شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب سایت،
            مدیریت دسترسی به حساب شما، و برای اهداف دیگری که در ما توضیح داده
            شده است، استفاده خواهد شد
            <span className="hover:text-blue-500 cursor-pointer underline ">
              سیاست حفظ حریم خصوصی.
            </span>
          </div>

          <button className="bg-yellow-100 w-full my-3 text-center text-sm font-bold py-2 rounded">
            عضویت
          </button>

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
