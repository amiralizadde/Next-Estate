import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Head from "next/head";

const Index = () => {
  return (
    <>
    <Head>
      <title> درباره ما </title>
    </Head>
    <div className="mt-14">
      <header>
        <div className="relative">
          <div>
            <Image
              src="/about/title-img-1.jpg"
              alt="header about"
              width={1000}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
            <p className="text-white text-4xl z-10"> درباره ما </p>
          </div>
        </div>
      </header>

      {/* main */}
      <main>
        <div className="grid grid-cols-1 xl:grid-cols-2  py-16 px-10 gap-10 child:p-10">
          <div>
            <Image
              src="/about/about-img-1-1.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <p className="font-bold text-xl"> آگاهانه مقایسه و انتخاب کنید </p>
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

          <div>
            <div className="">
              <p className="font-bold text-xl">
                {" "}
                دیدگاه ما. احساس ما برای پیشنهادات خوب.{" "}
              </p>
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
          </div>
          <div>
            <Image
              src="/about/about-img-2-1.jpg"
              alt=""
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <section>
          <div className="my-16 py-16 bg-gray-100">
            <div className="py-14">
              <p className=" text-4xl text-center"> تیم حرفه ای ما </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-5 child:flex child:items-center child:justify-center child:flex-col">
              <div className="">
                <Image src="/about/team-img-1-1.png"  width={1000} height={500} quality={100} className="w-[200px] h-[200px] object-cover" alt="" />
                <p className="mt-2 font-bold text-base"> امیر علی زاده </p>
                <p className="my-3 text-sm"> مدیر دفتر </p>
                <div className="flex child:text-black/50">
                  <IoLogoInstagram />
                  <FaTelegram className="mx-2" />
                  <CiLinkedin />
                </div>
              </div>
              <div>
                <Image src="/about/team-img-3-1.png"  width={1000} height={500} quality={100} className="w-[200px] h-[200px] object-cover" alt="" />
                <p className="mt-2 font-bold text-base"> مینا کریمی </p>
                <p className="my-3 text-sm"> مدیر فروش </p>
                <div className="flex child:text-black/50">
                  <IoLogoInstagram />
                  <FaTelegram className="mx-2" />
                  <CiLinkedin />
                </div>
              </div>
              <div>
                <Image src="/about/team-img-4-1.png"  width={1000} height={500} quality={100} className="w-[200px] h-[200px] object-cover" alt="" />
                <p className="mt-2 font-bold text-base">  هادی علیلو </p>
                <p className="my-3 text-sm"> مدیر عامل </p>
                <div className="flex child:text-black/50">
                  <IoLogoInstagram />
                  <FaTelegram className="mx-2" />
                  <CiLinkedin />
                </div>
              </div>
              <div> 
                <Image src="/about/team-img-5-1.png"  width={1000} height={500} quality={100} className="w-[200px] h-[200px] object-cover" alt="" />
                <p className="mt-2 font-bold text-base">  مریم صالحی  </p>
                <p className="my-3 text-sm"> اپراتور  </p>
                <div className="flex child:text-black/50">
                  <IoLogoInstagram />
                  <FaTelegram className="mx-2" />
                  <CiLinkedin />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>

  );
};

export default Index;
