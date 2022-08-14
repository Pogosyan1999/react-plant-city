import React from "react";
import { HeaderContainer } from "../Container/Container";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Icons from "./Icons/Icons";

const Header = () => {
  return (
    <header className="headerContainer">
      <HeaderContainer>
        <Logo />
        <Navbar />
        <Icons />
      </HeaderContainer>
    </header>
  );
};

export default Header;
