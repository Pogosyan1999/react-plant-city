import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import {Link as Links} from "react-router-dom";

export const SlideContainer = styled.div`
width:84%;
height:auto;
margin: 60px auto;
`;


export const H3 = styled.h3`
  font-size: 40px;
  font-weight: 600;
  color: var(--color-black);
  width: 100%;
  text-align: center;
  margin-top:60px;

  @media only screen and (max-width:1200px){
    font-size:35px;
  }

  @media only screen and (max-width:1179px){
    font-size:30px;
  }

  @media only screen and (max-width:1024px){
    font-size:25px;
  }

  @media only screen and (max-width:992px){
    font-size:20px;
  }

  @media only screen and (max-width:800px){
    font-size:18px;
  }

  @media only screen and (max-width:712px){
    font-size:16px;
  }

  @media only screen and (max-width:660px){
    font-size:15px;
  }

  @media only screen and (max-width:475px){
    font-size:14px;
  }

  @media only screen and (max-width:375px){
    font-size:13px;
  }

  @media only screen and (max-width:320px){
    font-size:12px;
    font-weight:400
  }
`;

export const ImgContainer1 = styled.div`
width:90%;
height:300px;
background-image: url(${img1});
position:relative;

@media only screen and (max-width:1180px) {
  height:250px;
}
  @media only screen and (max-width:1024px) {
    height:220px;
 }

 @media only screen and (max-width:600px) {
  width:100%;
 }
`;

export const Block = styled.div`
width:100%;
`;
export const ImgContainer2 = styled.div`
width:95%;
height:300px;
background-image: url(${img2});
background-size:cover;
position:relative;

@media only screen and (max-width:1180px) {
  height:250px;
 }

 @media only screen and (max-width:1024px) {
  height:220px;
 }

 @media only screen and (max-width:600px) {
  width:100%;
 }
`;


export const ImgContainer3 = styled.div`
width:95%;
height:300px;
background-image: url(${img3});
background-size:cover;
position:relative;

@media only screen and (max-width:1180px) {
  height:250px;
 }

 @media only screen and (max-width:1024px) {
  height:220px;
 }

 @media only screen and (max-width:600px) {
  width:100%;
 }
`;

export const BgSection = styled.div`
width:100%;
height:100%;
background:rgba(0,0,0,0.40);
position:absolute;
top:0;
left:0;
`;

export const DataContainer = styled.div`
width:170px;
height:40px;
display:flex;
justify-content:center;
align-items:center;
background:rgba(255,255,255, 0.9);
color:var(--color-black);
font-size:20px;
font-weight:bold;

@media only screen and (max-width:1180px) {
  width:160px;
  font-size:18px;
 }

 @media only screen and (max-width:1180px) {
  width:150px;
  font-size:16px;
 }

 @media only screen and (max-width:768px) {
  width:140px;
  font-size:15px;
 }

 @media only screen and (max-width:660px) {
  width:130px;
  height:30px;
  font-size:14px;
 }

`


export const H4  = styled.h4`
  font-size:18px;
  color:var(--color-black);
  font-weight:600;
  width:max-content;

  @media only screen and (max-width:1180px){
   font-size:16px;
  }

  @media only screen and (max-width:1138px){
    font-size:16px;
   }

   @media only screen and (max-width:1024px){
    font-size:14px;
   }

   @media only screen and (max-width:992px){
    font-size:18px;
   }

   @media only screen and (max-width:800px){
    font-size:16px;
   }

   @media only screen and (max-width:768px){
    font-size:15px;
   }

   @media only screen and (max-width:768px) {
    font-size:13px;
   }

   @media only screen and (max-width:600px) {
    margin:20px auto;
    font-size:16px;
   }

   @media only screen and (max-width:500px) {
    font-size:15px;
   }

   @media only screen and (max-width:360px) {
    font-size:14px;
   }
`;


export const P  = styled.p`
  font-size:14px;
  color:#9c9c9c;
  font-weight400;
  width:max-content;

  @media only screen and (max-width:1200px){
     font-size:16px;
  }

  @media only screen and (max-width:1180px) {
    font-size:13px;
   }

  

  @media only screen and (max-width:1138px){
    font-size:12px;
   }

   @media only screen and (max-width:1024px){
    font-size:11px;
   }

   @media only screen and (max-width:992px){
    font-size:14px;
   }

   @media only screen and (max-width:800px){
    font-size:13px;
   }

   @media only screen and (max-width:768px) {
    font-size:12px;
   }

   @media only screen and (max-width:660px) {
    font-size:11px;
   }

   @media only screen and (max-width:600px) {
    text-align:center;
    margin:0 auto;
    font-size:14px;
   }

   @media only screen and (max-width:500px) {
    font-size:13px;
   }

   @media only screen and (max-width:360px) {
    font-size:12px;
   }
`;

export const Button = styled(Links)`
width:160px;
height:50px;
margin-top:20px;
border-radius:4px;
border:1px solid var(--color-light-green);
color:var(--color-black);
display:flex;
justify-content:center;
align-items:center;

&:hover{
  background:var(--color-light-green);
  color:var(--color-white);
  transition:.5s;
}
  @media only screen and (max-width:1179px){
    font-size:18px;
    width: 210px;
  }

 

  @media only screen and (max-width:800px){
    width:160px;
    height:40px;
    font-size:15px;
  }

  @media only screen and (max-width:712px){
    width:140px;
    font-size:14px;
  }

  @media only screen and (max-width:660px){
    width:130px;
    font-size:13px;
    height:35px;
    font-weight:500;
  }

  @media only screen and (max-width:660px){
    font-size:12px;
    width:120px;
  }

`

