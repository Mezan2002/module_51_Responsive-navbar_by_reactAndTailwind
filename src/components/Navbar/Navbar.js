import React, { useState } from "react";
import Navlinks from "../NavLinks/Navlinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Shop", path: "/shop" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About", path: "/about" },
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-purple-300">
      <div className=" md:hidden z-10" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <XMarkIcon className="h-20 pl-10 w-20" />
        ) : (
          <Bars3Icon className="h-20 pl-10 w-20" />
        )}
      </div>
      <ul
        className={`text-3xl z-0 bg-purple-300 py-10 font-bold md:flex justify-center w-full duration-500 ease-in absolute md:static ${
          toggle ? "top-16" : "top-[-250px]"
        }`}
      >
        {navItems.map((navItem) => (
          <Navlinks key={navItem.id} navItem={navItem}></Navlinks>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
