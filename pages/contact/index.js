import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { SlCallEnd } from "react-icons/sl";
import { TiMessage } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { useFormik } from "formik";

const index = () => {
  let form = useFormik({
    initialValues: { name: "", email: "", title: "", message: "" },
    validate:(values)=>{
      let errors = {}
      if (values.name === '' || values.name.length<3) {
        errors.name = " نامعتبر "
      }
      if (values.email === '') {
        errors.email = " نامعتبر "
      }
      if (values.title === '' || values.name.length<3) {
        errors.title = " نامعتبر "
      }
      if (values.message === '' || values.message.length<3) {
        errors.message = " نامعتبر "
      }
      return errors
    }
  });

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 p-16">
        <div>
          <p className="text-2xl"> فرم تماس </p>
          <p className="text-xl text-black/50">
            جهت تماس با ما فرم زیر را پر کنید
          </p>
          <form className="child:w-full py-10 pe-16">
            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-sm">
                نام(ضروری)
              </label>
              <input
                id="name"
                type="text"
                naeme="name"
                value={form.name}
                onChange={form.handleChange.name}
                onBlur={form.onBlur}
                className={`border py-3 ${form.errors.name && form.touched.name && 'border-red-600'}`}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="text-sm">
                ایمیل(ضروری)
              </label>
              <input
                id="email"
                type="text"
                name="email"
                value={form.email}
                onChange={form.handleChange.email}
                className="border py-3 "
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="title" className="text-sm">
                موضوع
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={form.title}
                onChange={form.handleChange.title}
                className="border py-3 "
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="message" className="p-0 m-0 text-xs">
                متن پیام شما
              </label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                name="message"
                value={form.message}
                onChange={form.handleChange.message}
                className="border py-3 "
              ></textarea>
            </div>
            <div>
              <button type="submit" className="border py-2 mt-2 bg-yellow-100 font-bold text-base px-14"> ارسال پیام </button>
            </div>
          </form>
        </div>
        <div>
          <div className="">
            <p className="text-3xl"> درباره شرکت ما </p>
            <p className="text-black/75 my-5 text-justify leading-8 lg:w-3/4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <p className="text-black/75 my-5 text-justify leading-8 lg:w-3/4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش
            </p>
          </div>
          <div className="child:flex border-t pt-5">
            <p className="text-sm">
              <IoLocationOutline className="me-2" />{" "}
              <span> تهران - خیابان ولیعصر - کوچه ولدی </span>{" "}
            </p>
            <p className="text-sm my-2">
              <SlCallEnd className="me-2" />{" "}
              <span> تماس با ما : 09010159609 </span>{" "}
            </p>
            <p className="text-sm my-2">
              {" "}
              <TiMessage className="me-2" />{" "}
              <span> alizadeamir1373@gmail.com </span>{" "}
            </p>
            <p className="text-sm text-black/75">
              {" "}
              فراموش نکنید که ما را دنبال کنید :{" "}
            </p>
            <div className="flex child:text-black mt-3">
              <IoLogoInstagram />
              <FaTelegram className="mx-2" />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
