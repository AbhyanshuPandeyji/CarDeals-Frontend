import React from "react";
import firstTag from "../../assets/best_price.png";
import secTag from "../../assets/document.png";
import thirdTag from "../../assets/payment.png";

const ProcessCard = ({ imgSrc, title, subtext }) => {
  return (
    <div className="flex justify-center flex-col items-center px-8 bg-[#CAFFAE] rounded-[40px] py-10 2xl:py-[4.5rem]">
      <img src={imgSrc} className="w-24" />
      <p className="text-3xl my-3 text-center font-bold	">{title}</p>
      <span className="text-center text-xl w-[90%] font-normal	">{subtext}</span>
    </div>
  );
};

function Process() {
  return (
    <div className=" py-[5rem] container mx-auto">
      <h2 className="text-center mb-14 text-6xl font-bold">
        Process of buying used car
      </h2>
      <div className="flex gap-x-10">
        <ProcessCard
          imgSrc={firstTag}
          title="Get price online"
          subtext="Provide details about your car to help us assess its condition accurately"
        />
        <ProcessCard
          imgSrc={secTag}
          title="Easy documentation"
          subtext="Buying your car is quick and easy with our simple documentation process"
        />
        <ProcessCard
          imgSrc={thirdTag}
          title="Car pick up &amp; payment"
          subtext="Well ensure smooth pickup and payment to avoid any inconvenience for you"
        />
      </div>
    </div>
  );
}

export default Process;
