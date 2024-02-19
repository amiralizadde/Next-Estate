import React, { useEffect } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const StateBox = ({state}) => {

  // useEffect(()=>{})

  return (
    <Link href={`/states/${state._id}`}>
    <div>
      <div className="relative border">
        <Image
          src={`/${state.image}`}
          className="w-full  h-full object-cover"
          width={1000}
          height={500}
          alt=""
        />
        <p className="absolute top-3 right-3 bg-black/50 text-white px-2">

          {state.values.statusAd === 'rent' && 'اجاره'}
          {state.values.statusAd === 'mortgage' && 'رهن'}
          {state.values.statusAd === 'sell' && 'فروش'}
        
        </p>
        <p className="absolute bottom-3 right-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:right-1">
          شناسه 1112
        </p>
        <p className="absolute bottom-3 left-3  bg-black/50 text-white md:text-xs p-1 md:bottom-1 md:left-1">
        {state.values.statusAd === 'rent' ? Number(state.values.deposit).toLocaleString():Number(state.values.price).toLocaleString()}
         </p>
      </div>
      <div>
        <p className="text-xl font-bold my-2">  {state.values.belvar}  </p>
        {/* <p className="text-black/50"> تهران منطقه 4 </p> */}
        <p className="flex">
          <HomeIcon className="w-4 mx-1" /> <span> {state.values.meterage} متر </span>_
         {state.values.room &&   <span className="mx-1"> {state.values.room} </span>}_
          <span className="mx-1"> مبلمان </span>
        </p>
      </div>
    </div>
    </Link>
  );
};

export default StateBox;
