import FeatureItems from "@/components/modules/FeatureItems";
import { featuresItemHome } from "@/db/db";
import { createAd } from "@/services/axios/requests/states";
import {useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";

export default function Index({ name }) {
  let router = useRouter()
  const [features, setFeatures] = useState([]);
  const [imageInput, setImage] = useState(null);

 

  const form = useFormik({
    initialValues: {
      statusAd: "",
      typeState: "",
      city: "tehran",
      deposit: "",
      monthlyRent: "",
      price: "",
      meterage: "",
      belvar: "",
      fullAddress: "",
      codePost: "",
      heating: "",
      paymentMethod: "",
      room: "",
      floor: "",
      allFloor: "",
      imageState: File,
      BuildingCharge: "",
    },

    validate: (values) => {
      let errors = {};

      if (values.statusAd === "-1" || values.statusAd === "") {
        errors.statusAd = " اجباری ";
      }
      if (values.typeState === "-1" || values.typeState === "") {
        errors.typeState = " اجباری ";
      }

      if (values.heating === "-1" || values.heating === "") {
        errors.heating = " اجباری ";
      }

      if (values.meterage > 10_000 || values.meterage < 20) {
        errors.meterage = " نا معتبر ";
      }

      if (values.room > 20 || values.room === "") {
        errors.room = " نا معتبر ";
      }

      if (
        values.codePost.length > 8 ||
        values.codePost.length < 4 ||
        values.codePost === ""
      ) {
        errors.codePost = " نا معتبر ";
      }

      if (values.floor > values.allFloor) {
        errors.floor = " نا معتبر ";
      }

      if (values.allFloor > 40) {
        errors.allFloor = " نا معتبر ";
      }

      // if (values.deposit > 5_000_000_000) {
      //   errors.deposit = " نا معتبر ";
      // }
      // if (values.statusAd values.monthlyRent < 100_000) {
      //   errors.monthlyRent = " نا معتبر ";
      // }

      if (values.price > 500_000_000_000) {
        errors.price = " نا معتبر ";
      }
      if (values.BuildingCharge > 10_000_000) {
        errors.BuildingCharge = " نا معتبر ";
      }

      if (
        values.belvar.length > 30 ||
        values.belvar === "" ||
        values.belvar.length < 4
      ) {
        errors.belvar = " نا معتبر ";
      }
      if (
        values.fullAddress.length > 100 ||
        values.fullAddress === "" ||
        values.fullAddress.length < 4
      ) {
        errors.fullAddress = " نا معتبر ";
      }
      if (values.imageState === null) {
        errors.imageState = " نا معتبر ";
      }

      return errors;
    },

    onSubmit: (values) => {
      let img = values.imageState;
      delete values.imageState;
      createStateAd(values, img);
    },
  });

  const isLogin =async ()=>{
    await fetch('/api/auth/me')
    .then(res=>{
      if (res.status === 401) {
        return router.replace('/auth/signin')
      }
    })
    
  }

 useEffect(()=>{
    isLogin()
  },[])


  const addFeatures = (checked, feature) => {
    checked
      ? setFeatures((prevState) => [...prevState, feature])
      : setFeatures((prevState) => {
          return prevState.filter((featureItem) => {
            return featureItem.id !== feature.id;
          });
        });
  };

  const createStateAd = async (values, img) => {
    let data = {
      values,
      features,
    };

    const newform = new FormData();
    newform.append("data", JSON.stringify(data));
    newform.append("file", img);

    await fetch("./api/states/createAd", {
      method: "POST",
      header: {
        "Content-Type":
          "multipart/form-data; boundary:'------WebKitFormBoundaryg7okV37G7Gfll2hf--",
      },
      body: newform,
    })
      .then((res) => {
        console.log("res ->", res);
      })
      .catch((err) => {
        console.log("err ->", err);
      });

    // await createAd(form)
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err ->", err);
    //   });
  };

  return (
    <>
    <Head>
      <title> فرم آگهی </title>
    </Head>
    <div className="min-h-screen mt-14 px-10 py-16 ">
      <form className="  p-5  bg-yellow-100 " onSubmit={form.handleSubmit}>
        <div className="grid gap-2  items-center xs:grid-cols-2 lg:grid-cols-2  child:w-full child:text-xs md:child:text-sm child:placeholder:text-black  child:font-bold child:rounded">
          <div className="relative">
            <select
              className=" w-full p-2"
              name="statusAd"
              defaultValue="-1"
              value={form.values.statusAd}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              <option value="-1"> وضعیت آگهی ملک را مشخص کنید </option>
              <option value="rent"> اجاره </option>
              <option value="mortgage"> رهن </option>
              <option value="sell"> فروش </option>
            </select>
            {form.errors.statusAd && form.touched.statusAd && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          <div className="relative">
            <select
              className=" w-full p-2"
              name="typeState"
              defaultValue="-1"
              value={form.values.typeState}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              <option value="-1"> نوع ملک را مشخص کنید </option>
              <option value="apartment"> آپارتمان </option>
              <option value="home"> خانه حیاط دار </option>
              <option value="land"> زمین و ملک </option>
              <option value="shop"> مغازه </option>
              <option value="AdministrativeUnit"> واحد اداری </option>
              <option value="villa"> ویلایی </option>
            </select>
            {form.errors.typeState && form.touched.typeState && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          <div className="relative">
            <select
              className="w-full p-2"
              name="city"
              defaultValue="tehran"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              <option value="tehran"> تهران </option>
            </select>
            {form.errors.city && form.touched.city && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          <div className="relative">
            <select
              className="w-full p-2"
              name="heating"
              defaultValue="-1"
              value={form.values.heating}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              <option value="-1"> نوع گرمایش </option>
              <option value="heater"> بخاری </option>
              <option value="shofaj"> شوفاز </option>
            </select>
            {form.errors.heating && form.touched.heating && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          <div className="relative ">
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              name="meterage"
              value={form.values.meterage}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder=" متراز ملک "
            />
            {form.errors.meterage && form.touched.meterage && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              name="room"
              value={form.values.room}
              placeholder="تعدد اتاق"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.room && form.touched.room && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              name="codePost"
              value={form.values.codePost}
              placeholder="  کد پستی "
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.codePost && form.touched.codePost && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              name="allFloor"
              value={form.values.allFloor}
              placeholder=" کل طبقات"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.allFloor && form.touched.allFloor && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              name="floor"
              value={form.values.floor}
              placeholder=" طبقه چندم "
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.floor && form.touched.floor && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          {form.values.statusAd === "sell" && (
            <div className="relative">
              <select
                className="p-2 w-full"
                name="paymentMethod"
                value={form.values.paymentMethod}
                defaultValue="-1"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                <option value="-1"> شیوه پرداخت </option>
                <option value="tehran"> قسطی </option>
                <option value="tehran"> نقدی </option>
                <option value="tehran"> توافقی </option>
              </select>
              {form.errors.paymentMethod && form.touched.paymentMethod && (
                <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
              )}
            </div>
          )}

          {form.values.statusAd === "rent" ? (
            <div className="depositInput outline-0 w-full h-full  flex items-center justify-between">
              <input
                type="text"
                className={`${
                  form.errors.deposit &&
                  form.touched.deposit &&
                  "border-2 border-red-600"
                } w-full h-full bg-transparent  me-2  placeholder:text-black text-xs xs:text-sm px-2 bg-white`}
                placeholder=" ودیعه "
                name="deposit"
                value={form.values.deposit}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <input
                type="text"
                className={`${
                  form.errors.monthlyRent &&
                  form.touched.monthlyRent &&
                  "border-2 border-red-600"
                }w-full h-full bg-transparent  ms-2  placeholder:text-black text-xs xs:text-sm px-2 bg-white`}
                placeholder=" اجاره "
                name="monthlyRent"
                value={form.values.monthlyRent}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
          ) : (
            <div className="relative">
              <input
                type="text"
                className="p-2 w-full placeholder:text-black"
                placeholder=" مبلغ پیشنهادی "
                name="price"
                value={form.values.price}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.errors.price && form.touched.price && (
                <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
              )}
            </div>
          )}

          {(form.values.statusAd === "rent" ||
            form.values.statusAd === "mortgage") && (
            <div className="relative">
              <input
                type="text"
                name="BuildingCharge"
                className="w-full p-2 placeholder:text-black"
                placeholder=" شارز ساختمان "
                value={form.values.BuildingCharge}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.errors.BuildingCharge && form.touched.BuildingCharge && (
                <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
              )}
            </div>
          )}

          <div className="relative">
            <input
              type="file"
              id="imgState"
              className="p-2 w-full bg-white"
              name="imageState"
              onChange={(e) => {
                form.setFieldValue("imageState", e.currentTarget.files[0]);
              }}
              onBlur={form.handleBlur}
            />
            {form.errors.imageState && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>

          <div className="relative col-start-1 lg:col-start-1 xs:col-span-2">
            <input
              type="text"
              className="w-full p-2 placeholder:text-black"
              name="belvar"
              maxLength={30}
              placeholder=" بلوار/میدان "
              value={form.values.belvar}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.belvar && form.touched.belvar && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>
          <div className="relative col-start-1 xs:col-span-2  bg-white">
            <textarea
              className="w-full h-full p-2 placeholder:text-black outline-none"
              name="fullAddress"
              placeholder=" آدرس  "
              maxLength={100}
              value={form.values.fullAddress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.fullAddress && form.touched.fullAddress && (
              <MdError className="absolute left-5 text-2xl top-2 text-red-600" />
            )}
          </div>
          <div className="col-start-1 col-span-1 xs:col-span-2">
            <h1 className="text-2xl m-2"> امتیازات </h1>
            <div className=" grid  grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 ps-5">
              {featuresItemHome.map((feature) => (
                <FeatureItems
                  key={feature.id}
                  feature={feature}
                  addFeatures={addFeatures}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center  ">
          <button
            type="submit"
            className="w-[300px] px-14 py-2 bg-white font-bold"
          >
            ایجاد آگهی
          </button>
        </div>
      </form>
    </div>
    </>

  );
}


