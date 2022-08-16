import React from "react";
import { FooterImg, ImgContainer } from "./FooterStyle";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterIcons from "./FooterIcons/FooterIcons";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <ImgContainer>
        <FooterImg src="img/Logo.svg" alt="img" />
      </ImgContainer>
      <FooterLinks />
      <FooterIcons/>
    </footer>
  );
};

export default Footer;
