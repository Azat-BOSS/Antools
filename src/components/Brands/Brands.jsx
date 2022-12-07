import React from "react";
import brandsStyle from "./brands.module.css"

import { dataBrandsImages } from "../../utils/data";

const Brands = () => {
  return ( 
    <div className={brandsStyle.brands}>
      <h4 className={brandsStyle.brands__title}>Trusted more than 150+ brand</h4>
      <div className={brandsStyle.brands__block__images}>
        {dataBrandsImages.map((ill, index)=> (
          <img src={ill.image} alt="icons" key={index} className={brandsStyle.brands__image}/>
        ))}
      </div>
    </div>
  );
}
 
export default Brands;