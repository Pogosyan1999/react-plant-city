import styled from "styled-components";

export const ShopSection = styled.div`
width:100%;
padding:30px 0px;
background:var(--color-light-green);
box-sizing:border-box;
`;

export const MinContainer = styled.div`
 width:100%;
 height:auto;
 display:flex;
 align-items:center;
 
`;

export const TitleContainer = styled.div`
width:80%;
height:auto;
`;


export const Button = styled.button`
 font-size:20px;
 color:var(--color-black);
 width:212px;
 height:55px;
 background:var(--color-white);
 border-radius:4px;
 border:none;
 font-weight:600;
 cursor:pointer;
 display:block;

 &:hover{
    background:transparent;
    border:1px solid var(--color-white);
    color:var(--color-white);
    transition:.5s;
 }
`
