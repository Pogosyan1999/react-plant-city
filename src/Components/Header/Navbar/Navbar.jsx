import React from "react";
import { NavbarItems } from "./NavbarItems";
import { NavBar, NavList, NavItem, Navlink } from "./NavbarElemens";

const Navbar = () => {
  return (
    <NavBar>
      <NavList>
        {NavbarItems.map((item) => {
          return (
            <NavItem key={item.id}>
              <Navlink to={item.url}>{item.text}</Navlink>
            </NavItem>
          );
        })}
      </NavList>
    </NavBar>
  );
};

export default Navbar;
