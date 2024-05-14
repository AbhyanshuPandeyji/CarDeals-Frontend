import React from "react";
import filter from "../../assets/filter.svg";
import ProductCard from "../../components/ProductCard";
import { carDetails } from "../../constants/CarDetails";

function ProductGridHome() {
  const sortFilters = ["Price Low to High", "Price High to Low", "Price"];
  return (
    <>
      <div className="flex justify-end gap-x-10 my-14">
        <div className="flex justify-center items-center">
          <span className="text-2xl text-[#717171]">Filter</span>
          <img
            src={filter}
            className="ml-4 border-2 border-[#717171] rounded-md py-[8px] px-[12px]"
          />
        </div>
        <div className="flex justify-center items-center">
          <span className="text-2xl text-[#717171]">Sort By</span>
          <select className="text-xl text-[#717171] border-2 border-[#717171] rounded-md py-1 px-[10px] ml-4 price-filter">
            {sortFilters.map((item, index) => (
              <option key={index} className="text-xl text-[#717171]">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {carDetails.map((item, index) => {
          return (
            <ProductCard
              imgSrc={item.img}
              carName={item.cname}
              carPrice={item.carPrice}
              emiStart={item.emiStartAmnt}
              regYear={item.regYear}
              kms={item.kms}
              fuelType={item.fuelType}
              regState={item.regState}
            />
          );
        })}
        
      </div>
      <div className="flex justify-center w-full mt-12">
            <button className="bg-black text-white rounded-[20px] px-10 py-2">View All</button>
        </div>
    </>
  );
}

export default ProductGridHome;
