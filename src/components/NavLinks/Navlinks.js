import React from "react";

const Navlinks = ({ navItem }) => {
  return (
    <li className="mr-12">
      <a className="cursor-pointer" href={navItem.path}>
        {navItem.name}
      </a>
    </li>
  );
};

export default Navlinks;
