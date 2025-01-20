import React from "react";
import logo from "../assets/logo.svg";
import ConnectButton from "./ConnectButton";

const Header = () => {
  return (
    <header className="lg:flex md:flex hidden justify-between items-center w-[90%] mx-auto my-12">
      <img src={logo} alt="" className="w-[200px]" />
      <ConnectButton />
    </header>
  );
};

export default Header;
