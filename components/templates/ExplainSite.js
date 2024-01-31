import React from "react";
import Image from "next/image";

const ExplainSite = () => {
  return (
    <div className="bg-[#f9f7f6] py-24">
      <div>
        <h1 className="text-3xl text-center">شرح عملکرد سایت</h1>
        <p className="text-center my-1 text-black-25 ">
          مراحل جستجو و خرید ملک را مشاهده کنید
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:px-16 md:px-32  pt-12">
        <div className="relative  flex flex-col items-center justify-center">
          <Image src="/performance/performance1.png" width={100} height={100} className="w-60 h-40 my-5" quality={100}/>
          <p className="text-xl font-bold  tracking-normal">یک دسته را انتخاب کنید</p>
          <p className="mt-2 w-3/4 text-center text-gray-600 md:text-sm">
            نوع ملک خود ( آپارتمان ، ویلا و ... ) - شهر ملک و وضعیت ملک ( اجاره
            - رهن یا خرید ) را انتخاب کنید و جستجو نمایید
          </p>
          <span className="hidden md:block absolute right-10 top-3 rounded-full w-7 text-center text-xl text-black bg-yellow-100">1</span>
        </div>
        <div className="relative  flex flex-col items-center justify-center">
          <Image src="/performance/performance2.png" width={100} height={100} className="w-60 h-40 my-5" quality={100} />
          <p className="text-xl font-bold">ملک مورد نظر را پیدا کنید</p>
          <p className="mt-2 w-3/4 text-center text-gray-600 md:text-sm">
            تمام مشخصات ملک از قبیل مساحت ، تعداد خواب و کلیه امکانات ملک را
            مشاهده کنید
          </p>
          <span className="hidden md:block absolute right-10 top-3 rounded-full w-7 text-center text-xl text-black bg-yellow-100">2</span>
        </div>
        <div className="relative  flex flex-col items-center justify-center">
          <Image src="/performance/performance3.png" width={100} height={100} className="w-60 h-40 my-5" quality={100}/>
          <p className="text-xl font-bold">درخواست بازدید ملک</p>
          <p className="mt-2 w-3/4 text-center text-gray-600 md:text-sm">درخواست بازدید ملک را بدهید و در صورت پسند با ما معامله کنید .</p>
          <span className="hidden md:block absolute right-10 top-3 rounded-full w-7 text-center text-xl text-black bg-yellow-100">3</span>
        </div>
      </div>
    </div>
  );
};

export default ExplainSite;
