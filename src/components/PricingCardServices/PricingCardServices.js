import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const PricingCardServices = ({ services }) => {
  return (
    <div>
      {services.map((service) => (
        <p className="flex text-xl">
          <CheckCircleIcon className="h-6 w-6 text-green-600" /> {service}
        </p>
      ))}
    </div>
  );
};

export default PricingCardServices;
