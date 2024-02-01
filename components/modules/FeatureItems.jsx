import Image from "next/image";
import React, { useEffect, useState } from "react";

const FeatureItems = ({feature}) => {
  
 const {featureItem}=feature

 
  return (
      <div>
        <input type="checkbox" className="my-3"/>
        <label htmlFor="" className="text-xs ">{featureItem}</label>
      </div>
  );
};

export default FeatureItems;
