import FeatureItems from "@/components/modules/FeatureItems";
import { featuresItemHome } from "@/db/db";
import { createAd } from "@/services/axios/requests/states";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

export default function index({ name }) {
  const [features, setFeatures] = useState([]);
  const [imageInput , setImage] =useState(null)

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
      imageState: "",
      BuildingCharge:0
    },

    onSubmit: (values) => {
      createStateAd(values);
    },
  });

  useEffect(() => {
    console.log("features->", features);
  }, [features]);

  const addFeatures = (checked, feature) => {
    checked
      ? setFeatures((prevState) => [...prevState, feature])
      : setFeatures((prevState) => {
          return prevState.filter((featureItem) => {
            return featureItem.id !== feature.id;
          });
        });
  };

  const createStateAd = async (e) => {
    e.preventDefault()
    // let data = {
    //   userdata,
    //   features
    // };
    console.log('image ->' ,imageInput);
    const newform = new FormData();
     newform.append("data", 'amir');
     newform.append("file", imageInput);

    try {
      await fetch('./api/states/createAd',{
        method:"POST",
        headers: {
          "Content-Type":"multipart/form-data; boundary:'------WebKitFormBoundaryg7okV37G7Gfll2hf--",
        },
        body:newform
      }).then(res=>{
        console.log('res -> ' , res);
      })

    } catch (error) {
        console.log('err->',err);
    }

  

    // await createAd(form)
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => {
    //     console.log("err ->", err);
    //   });
  };

  return (




    <div className="min-h-screen mt-14 px-10 py-16 bg-gray-900">
      <form
        action="./api/states/createAd"
        className="border border-red-600  p-5  bg-yellow-100 "
        onSubmit={createStateAd}
      >
        <div className="grid gap-2  items-center xs:grid-cols-2 lg:grid-cols-2 child:border child:p-2 child:w-full child:text-xs md:child:text-sm child:placeholder:text-black child:bg-gray-100/75 child:font-bold child:rounded">
          {/*  وضعیت آگهی */}
          <select
            className=""
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

          <select
            className=""
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

          <select
            className=""
            name="city"
            defaultValue="-1"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          >
            <option value="tehran"> تهران </option>
          </select>

          <select
            className=""
            name="heating"
            defaultValue="-1"
            value={form.values.heating}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          >
            <option value="-1"> نوع گرمایش </option>
            <option value="tehran"> بخاری </option>
            <option value="tehran"> شوفاز </option>
          </select>

          <input
            type="number"
            className=""
            name="meterage"
            value={form.values.meterage}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder=" متراز ملک "
          />

          <input
            type="number"
            className=""
            name="room"
            value={form.values.room}
            placeholder="تعدد اتاق"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="text"
            className=""
            name="codePost"
            value={form.values.codePost}
            placeholder="  کد پستی "
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="number"
            className=""
            name="floor"
            value={form.values.floor}
            placeholder=" طبقه چندم "
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <input
            type="number"
            className=""
            name="allFloor"
            value={form.values.allFloor}
            placeholder=" کل طبقات"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          {form.values.statusAd === "sell" && (
            <select
              className=""
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
          )}

          {form.values.statusAd === "rent" ? (
            <div className="depositInput outline-0 w-full h-full  flex items-center justify-between">
              <input
                type="text"
                className="w-full h-full bg-transparent  me-2  placeholder:text-black text-xs xs:text-sm px-2"
                placeholder=" ودیعه "
                name="deposit"
                value={form.values.deposit}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <input
                type="text"
                className="w-full h-full bg-transparent  ms-2  placeholder:text-black text-xs xs:text-sm px-2"
                placeholder=" اجاره "
                name="monthlyRent"
                value={form.values.monthlyRent}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
          ) : (
            <input
              type="text"
              className=""
              placeholder=" مبلغ پیشنهادی "
              name="price"
              value={form.values.price}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          )}

          {(form.values.statusAd === "rent" ||
            form.values.statusAd === "mortgage") && (
            <input
              type="number"
              name='BuildingCharge'
              className=""
              placeholder=" شارز ساختمان "
              value={form.values.BuildingCharge}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          )}

          <input
            type="file"
            id="imgState"
            name="imageState"
            onChange={e=>setImage(e.target.files[0])}
            // value={form.values.imageState}
            // onChange={(e) => form.setFieldValue("imageState", e.currentTarget.files[0])}
            // onBlur={form.handleBlur}
          />

          <input
            type="text"
            className="col-start-1 lg:col-start-1 xs:col-span-2  "
            name="belvar"
            placeholder=" بلوار/میدان "
            value={form.values.belvar}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <textarea
            className=" col-start-1 xs:col-span-2  "
            name="fullAddress"
            placeholder=" آدرس  "
            value={form.values.fullAddress}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />

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
  );
}

export async function getStaticProps(context) {
  console.log("context add new State page ->", context.params);

  return {
    props: { name: "amir" },
  };
}
