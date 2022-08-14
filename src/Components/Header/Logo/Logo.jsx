import React from "react";
import { Link } from "react-router-dom";
import { LogoContainer,LogoImg } from "./LogoElements";

const Logo = () => {
  return (
    <LogoContainer>
        <Link to  = '/'>
           <LogoImg src = "img/logo.svg" alt  = 'Logo'/>
        </Link>
    </LogoContainer>
  );
};

export default Logo;
