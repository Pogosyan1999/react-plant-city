import styled from "styled-components";
import { NavLink as Links } from "react-router-dom";

export const NavBar = styled.nav`
  width: 100%;
  heiight: 100%;

  @media only screen and (max-width: 899px) {
    order: 3;
  }
`;

export const NavbarDesktop = styled.div`
width:100%;

@media only screen and (max-width: 899px) {
  display:none;
}

`

export const NavList = styled.ul`
  list-style: none;
  margin-top:15px;
  padding: 0;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (min-width: 900px) and (max-width: 991px) {
    justify-content: center;
  }

  @media only screen and (max-width: 899px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.li`
  margin-left: 22px;
  @media only screen and (max-width: 899px) {
    display: block;
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;

export const Navlink = styled(Links)`
  font-weight: 600;
  font-size: 18px;
  color: var(--color-black);
  display: block;

  @media (min-width: 1024px) and (max-width: 1180px) {
    font-size: 15px;
  }

  @media (min-width: 992px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media (min-width: 900px) and (max-width: 991px) {
    font-size: 12px;
  }

  @media (min-width: 712px) and (max-width: 899px) {
    font-size: 16px;
  }

  @media (min-width: 640px) and (max-width: 712px) {
    font-size: 14px;
  }

  @media (min-width: 360px) and (max-width: 639px) {
    font-size: 12px;
  }

  @media (min-width: 320px) and (max-width: 359px) {
    font-size: 11px;
  }
`;


export const NavbarButton = styled.button`
  width: max-content;
  background: none;
  outline: none;
  border: none;
  color: var(--color-black);
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 30px;
  top: 28px;
  display: none;

  @media only screen and (max-width: 899px) {
    display: block;
    top:35px;
  }

  @media (min-width: 712px) and (max-width: 799px) {
    font-size: 16px;
    right: 25px;
    top:35px;
  }

  @media (min-width: 640px) and (max-width: 712px) {
    font-size: 15px;
    right: 20px;
    top:35px;
  }

  @media (min-width: 500px) and (max-width: 639px) {
    font-size: 14px;
    right: 10px;
    top:37px;
  }

  @media (min-width: 360px) and (max-width: 499px) {
    font-size: 13px;
    right: 10px;
    top:28px;
  }

  @media (min-width: 320px) and (max-width: 359px) {
    font-size: 13px;
    right: 10px;
    top:28px;
  } ;
`;

export const MobileNavbar = styled.div`
 width:100%;
 height:100%;
`;