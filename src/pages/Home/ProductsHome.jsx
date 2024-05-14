import React from "react";
import ProductGridHome from "./ProductGridHome";


function ProductsHome() {
  
  

  return (
    <div className="container mx-auto py-[5rem]">
      <h2 className="text-center mb-8 text-6xl font-bold">Let's get started</h2>
      <p className="text-[#676767] text-center text-2xl">
        Discover a wide range of new and pre-owned vehicles
      </p>

      <ProductGridHome />

      
    </div>
  );
}

export default ProductsHome;
