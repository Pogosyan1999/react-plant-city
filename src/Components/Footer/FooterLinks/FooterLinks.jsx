import React from "react";
import FooterForm from "../Form/FooterForm";
import { Container } from "../../Container/Container";
import {
  FooterItem,
  FooterList,
  Title,
  MinContainer,
  FooterLink,
  FooterText,
  Span,
} from "../FooterStyle";
import {
  FooterContacts,
  FooterProducts,
  FooterShop,
  FooterNeedHelp,
} from "./FooterItems";

const FooterLinks = () => {
  return (
    <Container>
      <MinContainer>
        <FooterList>
          <Title>Products</Title>
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
          <Title>Shop</Title>
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
          <Title>Need Help?</Title>
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
          <Title>Need Help?</Title>
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
            <Title>Join Us</Title>
          </Span>
          <FooterItem>
            <FooterText>
              Get first access to sales and
              <br /> new products
            </FooterText>
          </FooterItem>
          <FooterItem>
             <FooterForm/>
          </FooterItem>
        </FooterList>
      </MinContainer>
    </Container>
  );
};

export default FooterLinks;
