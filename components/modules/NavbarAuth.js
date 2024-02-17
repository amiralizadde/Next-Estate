import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavbarAuth = () => {

    let router = useRouter()

  return (
    <div className="">
      <nav className=" flex items-center justify-center w-full h-[54px]">

        <div className="grid grid-cols-2  w-full h-full child:flex child:items-center child:justify-center  ">
          <Link href="/auth/signin" className={` ${router.pathname === '/auth/signin' ? 'text-blue-400 border-b-0' : 'border'} text-lg font-bold`}>
            ورود
          </Link>
          <Link href="/auth/signup" className={` ${router.pathname === '/auth/signup' ? 'text-blue-400 border-b-0' : 'border'} text-lg font-bold`}>
            عضویت
          </Link>
          {/* <Link href="/auth/passwordRecovery" className={` ${router.pathname === '/auth/passwordRecovery' ? 'text-blue-400 border-b-0' : 'border'} text-lg font-bold`}>
            بازیابی رمز
          </Link> */}

        </div>

        {/* <div className=" h-full  text-center flex items-center justify-center w-1/3">
          
        </div>
        <div className=" h-full  text-center flex items-center justify-center w-1/3">
        
        </div>
        <div className=" h-full  text-center flex items-center justify-center w-1/3">
        
        </div> */}
      </nav>
    </div>
  );
};

export default NavbarAuth;
