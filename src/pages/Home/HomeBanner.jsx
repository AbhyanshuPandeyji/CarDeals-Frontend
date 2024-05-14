import React from "react";
import scroll from '../../assets/scroll.png'

function HomeBanner() {
  return (
    <div className="home-banner p-10 flex flex-col justify-between">
      <div className="flex flex-col justify-center items-baseline gap-y-8 banner-txt">
        <h1 className="text-white text-[80px] leading-[6rem]">
          Experience the thrill <br />
          of the road with our
          <br /> top-notch cars!"
        </h1>
        <p className="text-white text-3xl">Buy a quality second-hand car</p>
        <button className="text-white banner-btn text-xl py-2 px-4">
          {" "}
          Buy - +91 9264492644
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-white text-center">Scroll down to explore</p>
        <img className="w-5 mt-[13px]" src={scroll} />
      </div>
    </div>
  );
}

export default HomeBanner;
