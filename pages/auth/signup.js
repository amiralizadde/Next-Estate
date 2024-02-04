import NavbarAuth from "@/components/modules/NavbarAuth";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { createUser } from "@/services/axios/requests/UserAuth";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useFormik } from "formik";

const signup = () => {
  let router = useRouter();

  let form = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length < 4) {
        errors.name = "Invalid name ...";
      }
      if (!values.lastname) {
        errors.lastname = "Required";
      } else if (values.lastname.length < 4) {
        errors.lastname = "Invalid lastname";
      }

      if (!values.username) {
        errors.username = "Required";
      } else if (values.username.length < 4) {
        errors.username = "Invalid username";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 4) {
        errors.password = "Invalid password";
      }

      if (!values.repeatPassword) {
        errors.repeatPassword = "Required";
      } else if (values.password !== values.repeatPassword) {
        errors.password = "Invalid password";
        errors.repeatPassword = "Invalid password";
      }

      console.log("errors -> ", errors);
      return errors;
    },

    onSubmit: (values) => {
      createUserHandler(values);
    },
  });

  useEffect(() => {
    console.log("form -> ", form, form.errors.email, form.touched.email);
  }, [form.touched.email]);

  const createUserHandler = async (data) => {
    await createUser(data)
      .then((response) => {
        swal({
          title: "Good",
          text: response,
          icon: "success",
        });
        router.replace("/");
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

        <form className="p-10" onSubmit={form.handleSubmit}>
          <input
            type="text"
            name="name"
            className={`${
              form.errors.name && form.touched.name && " border-red-600"
            } border  w-full p-2 placeholder:ps-2  placeholder:text-sm my-3`}
            placeholder="نام   "
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="text"
            name="lastname"
            className={`${
              form.errors.lastname && form.touched.lastname && " border-red-600"
            }  border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3`}
            placeholder=" نام  خانوادگی   "
            value={form.values.lastname}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="text"
            name="username"
            className={`${
              form.errors.username && form.touched.username && " border-red-600"
            } border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3`}
            placeholder="نام کاربری  "
            value={form.values.username}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="email"
            name="email"
            className={`${
              form.errors.email && form.touched.email && "border-red-600"
            }  border  w-full p-2 placeholder:ps-2 placeholder:text-sm my-3`}
            placeholder=" ایمیل"
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="password"
            name="password"
            className={`${
              form.errors.password && form.touched.password && "border-red-600"
            } border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3`}
            placeholder=" رمز عبور "
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="password"
            name="repeatPassword"
            className={`${
              form.errors.repeatPassword &&
              form.touched.repeatPassword &&
              "border-red-600"
            } border w-full p-2 placeholder:ps-2 placeholder:text-sm my-3`}
            placeholder=" تکرار رمز عبور "
            value={form.values.repeatPassword}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <div className=" text-black/75 text-justify my-2">
            داده های شخصی شما برای پشتیبانی از تجربه شما در سراسر این وب سایت،
            مدیریت دسترسی به حساب شما، و برای اهداف دیگری که در ما توضیح داده
            شده است، استفاده خواهد شد
            <span className="hover:text-blue-500 cursor-pointer underline ">
              سیاست حفظ حریم خصوصی.
            </span>
          </div>

          <button
            type="submit"
            className="bg-yellow-100 w-full my-3 text-center text-sm font-bold py-2 rounded"
          >
            عضویت
          </button>
        </form>

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
      </div>
    </div>
  );
};

export default signup;
