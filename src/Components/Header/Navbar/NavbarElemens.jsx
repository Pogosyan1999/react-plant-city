import styled from "styled-components";
import {NavLink as Links} from 'react-router-dom';

export const NavBar  = styled.nav`
  width:100%;
  heiight:100%;
  
`;

export const NavList = styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
justify-content:end;
align-items:center;

`;

export const NavItem = styled.li`
  margin-left:22px;
  
`;

export const Navlink = styled(Links)`
  font-weight:600;
  font-size:18px;
  color:var(--color-black);

`