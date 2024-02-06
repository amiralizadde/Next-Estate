import Image from "next/image";
import React, { useEffect, useState } from "react";

const FeatureItems = ({ feature, addFeatures }) => {
  const { id, featureItem, name } = feature;

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        className="my-3"
        value={name}
        onClick={(e) =>addFeatures(e.target.checked , feature) }
        
      />
      <label htmlFor={id} className="text-xs ">
        {featureItem}
      </label>
    </div>
  );
};

export default FeatureItems;
