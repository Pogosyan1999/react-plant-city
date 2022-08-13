import styled from "styled-components";
import {Link as Links} from 'react-router-dom';

export const IconsContainer = styled.div`
width:max-content;
height:100%;
display:flex;
align-items:center;
justify-content:end;
padding-top:10px;
padding-left:30px;
`;

export const Button = styled.button`
 width:max-content;
 height:auto;
 border:none;
 outline:none;
 background:none;
 cursor:pointer;
 display:block;
 font-size:20px;
 transition:.5s;
 &:hover{
    color:var(--color-light-green);
 }
`;

export const UserLink = styled(Links)`
 color:var(--color-black);
 display:block;
 font-size:24px;
 margin:0 22px;

`;

export const ShopLink = styled(Links)`
 padding:5px 30px;
 background:#618916;
 display:flex;
 align-items:center;
 border-radius:4px;
 font-weight:400
 font-size:16px;
 color:var(--color-black);
 
`;

export const Span = styled.span`
  display:block;
  font-size:24px;
  margin-right:5px
`;

export const Input = styled.input`
width:0;
height:0;
padding: 0 20px;
box-sizing:border:box;
visibility:hidden;
box-sizing:border-box;
outline:none;
border:1px solid grey;
border-radius:50px;
margin-top:-5px;
`;


