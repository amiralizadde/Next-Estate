import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { SlCallEnd } from "react-icons/sl";
import { TiMessage } from "react-icons/ti";

import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const index = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 p-16">
      <div>
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
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
            <p className="text-sm"><IoLocationOutline className="me-2"/> <span> تهران - خیابان ولیعصر - کوچه ولدی </span>  </p>
            <p className="text-sm my-2"><SlCallEnd className="me-2"/>  <span> تماس با ما : 09010159609 </span> </p>
            <p className="text-sm my-2"> <TiMessage className="me-2"/> <span>  alizadeamir1373@gmail.com </span> </p>
            <p className="text-sm text-black/75"> فراموش نکنید که ما را دنبال کنید : </p>
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
