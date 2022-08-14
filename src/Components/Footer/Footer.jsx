import React from "react";
import { Container } from "../Container/Container";
import {
  FooterImg,
  FooterItem,
  FooterList,
  FooterTitle,
  ImgContainer,
  MinContainer,
  FooterLink,
  FooterText,
  Span,
  FooterInput,
  FooterForm,
  FooterButton,
} from "./FoooterStyle";
import {
  FooterContacts,
  FooterProducts,
  FooterShop,
  FooterNeedHelp,
} from "./FooterItems";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <ImgContainer>
        <FooterImg src="img/Logo.svg" alt="img" />
      </ImgContainer>
      <Container>
        <MinContainer>
          <FooterList>
            <FooterTitle>Products</FooterTitle>
            {FooterProducts.map((item) => {
              return (
                <FooterItem key={item.id}>
                  <FooterLink href={item.url}>{item.text}</FooterLink>
                </FooterItem>
              );
            })}
          </FooterList>
        </MinContainer>
        <MinContainer>
          <FooterList>
            <FooterTitle>Shop</FooterTitle>
            {FooterShop.map((item) => {
              return (
                <FooterItem key={item.id}>
                  <FooterLink href={item.url}>{item.text}</FooterLink>
                </FooterItem>
              );
            })}
          </FooterList>
        </MinContainer>
        <MinContainer>
          <FooterList>
            <FooterTitle>Need Help?</FooterTitle>
            {FooterNeedHelp.map((item) => {
              return (
                <FooterItem key={item.id}>
                  <FooterLink href={item.url}>{item.text}</FooterLink>
                </FooterItem>
              );
            })}
          </FooterList>
        </MinContainer>
        <MinContainer>
          <FooterList>
            <FooterTitle>Need Help?</FooterTitle>
            {FooterContacts.map((item) => {
              return (
                <FooterItem key={item.id}>
                  <FooterLink href={item.url}>{item.text}</FooterLink>
                </FooterItem>
              );
            })}
          </FooterList>
        </MinContainer>
        <MinContainer>
          <FooterList>
            <Span>
              <FooterTitle>Join Us</FooterTitle>
            </Span>
            <FooterItem>
              <FooterText>
                Get first access to sales and
                <br /> new products
              </FooterText>
            </FooterItem>
            <FooterItem>
              <FooterForm>
                <FooterItem>
                  <FooterInput
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                  />
                </FooterItem>
                <FooterItem>
                  <FooterButton>Submit</FooterButton>
                </FooterItem>
              </FooterForm>
            </FooterItem>
          </FooterList>
        </MinContainer>
      </Container>
    </footer>
  );
};

export default Footer;
