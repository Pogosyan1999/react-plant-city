import styled from "styled-components";
import img from "./bg.png";

export const Section = styled.div`
width:100%;
height:600px;
background:url(${img});
background-position:center;
background-size:cover;
position:relative;
`;

export const BgSection = styled.div`
 width:100%;
 height:100%;
 position:absolute;
 background:rgba(0,0,0,0.69);
 top:0;
 left:0;
 padding-top:100px;
 box-sizing:border-box;
`

export const Block = styled.div`
width:20%;
height:auto;
color:var(--color-white);
display:flex;
flex-direction:column;
align-items:center;
`;

export const ImgContainer = styled.div`
width:50px;
height:50px;
`;

export const Img  = styled.img`
width:100%;
height:100%;
`;

export const H5 = styled.h5`
font-size:24px;
font-weight:700;
margin:10px 0;
`;

export const P = styled.p`
font-size:22px;

`;