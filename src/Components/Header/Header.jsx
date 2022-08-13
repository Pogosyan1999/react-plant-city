import React from "react";
import { HeaderContainer, HeaderLogo } from "./HeaderElemets";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Icons from "./Icons/Icons";

const Header = () => {
  return (
    <header className="headerContainer">
      <HeaderContainer>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <Navbar />
        <Icons />
      </HeaderContainer>
    </header>
  );
};

export default Header;
