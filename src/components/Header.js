import React from "react";

import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="felx items-center">
        <img alt="Fylo" className="w-20 md:w-32" src={Logo}></img>
      </div>
      <div className="flex items-center gap-8 md:gap-14">
        <p className="text-white text-base">Features</p>
        <p className="text-white text-base">Team</p>
        <p className="text-white text-base">Sign In</p>
      </div>
    </div>
  );
};

export default Header;
