import React from "react";
import { Container } from "../../Container/Container";
import {
  Title,
  IconsContainer,
  IconsMinContainer,
  IconsLink,
  TitleContainer,
} from "../FooterStyle";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const FooterIcons = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Follow Us</Title>
      </TitleContainer>
      <IconsContainer>
        <IconsMinContainer>
          <IconsLink href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </IconsLink>
        </IconsMinContainer>
        <IconsMinContainer>
          <IconsLink href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </IconsLink>
        </IconsMinContainer>
        <IconsMinContainer>
          <IconsLink href="https://www.linkedin.com/" target="_blank">
            <GrLinkedinOption />
          </IconsLink>
        </IconsMinContainer>
      </IconsContainer>
    </Container>
  );
};

export default FooterIcons;
