import React, { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import {
  NavBar,
  NavList,
  NavItem,
  Navlink,
  NavbarButton,
  NavbarDesktop,
  MobileNavbar,
} from "./NavbarElemens";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
      <NavbarButton onClick={() => setOpen(!open)}>
        <FaBars />
      </NavbarButton>
      <NavbarDesktop>
        <NavList>
          {NavbarItems.map((item) => {
            return (
              <NavItem key={item.id}>
                <Navlink to={item.url}>{item.text}</Navlink>
              </NavItem>
            );
          })}
        </NavList>
      </NavbarDesktop>
      {open && (
        <MobileNavbar>
          <NavList>
            {NavbarItems.map((item) => {
              return (
                <NavItem key={item.id}>
                  <Navlink to={item.url}>{item.text}</Navlink>
                </NavItem>
              );
            })}
          </NavList>
        </MobileNavbar>
      )}
    </NavBar>
  );
};

export default Navbar;
