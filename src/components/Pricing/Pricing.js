import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      cost: 0,
      services: [
        "Softwere Development",
        "Web Development",
        "Digital Marketing",
        "Graphic Design",
        "24/Support",
      ],
    },
    {
      id: 2,
      name: "Medium",
      cost: 9.99,
      services: [
        "Softwere Development",
        "Web Development",
        "Digital Marketing",
        "Graphic Design",
        "24/Support",
      ],
    },
    {
      id: 3,
      name: "Primium",
      cost: 19.99,
      services: [
        "Softwere Development",
        "Web Development",
        "Digital Marketing",
        "Graphic Design",
        "24/Support",
      ],
    },
  ];
  return (
    <div className="my-20 grid md:grid-cols-3 gap-3">
      {pricingOptions.map((pricings) => (
        <PricingCard key={pricings.id} pricings={pricings}></PricingCard>
      ))}
    </div>
  );
};

export default Pricing;
