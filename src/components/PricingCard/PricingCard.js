import React from "react";
import PricingCardServices from "../PricingCardServices/PricingCardServices";
const PricingCard = ({ pricings }) => {
  return (
    <div className="bg-indigo-300 rounded-lg">
      <h2 className="text-7xl p-10 font-bold text-white">
        ${pricings.cost}
        <span className="text-2xl">/month</span>
      </h2>
      <p className="text-4xl pb-10 font-bold">{pricings.name}</p>
      <div className="pb-20 pl-40 flex items-center">
        <PricingCardServices services={pricings.services}></PricingCardServices>
      </div>
      <button className="bg-indigo-500 text-white font-bold py-2 w-10/12 mb-10 rounded-lg">
        Buy Now
      </button>
    </div>
  );
};

export default PricingCard;
