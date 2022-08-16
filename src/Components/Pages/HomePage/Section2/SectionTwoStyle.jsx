import styled from "styled-components";

export const Block = styled.div`
width:25%;
height:auto;
margin-top:60px;

@media only screen and (max-width:900px){
  width:50%;
 }

 @media only screen and (max-width:574px){
  width:100%;
 }

`;

export const Img  = styled.img`
display:block;
width:78px;
height:60px;
margin:0px auto 20px;

@media only screen and (max-width:1138px){
  width:60px;
  height:60px;
 }

 @media only screen and (max-width:960px){
  width:50px;
  height:50px;
 }

 @media only screen and (max-width:660px){
  width:40px;
  height:40px;
 }

 @media only screen and (max-width:320px){
  width:35px;
  height:35px;
 }
`;




export const Title  = styled.h4`
  font-size:22px;
  color:var(--color-black);
  font-weight:600;
  margin:10px auto;
  width:max-content;

  @media only screen and (max-width:1180px){
   font-size:20px;
  }

  @media only screen and (max-width:1138px){
    font-size:18px;
   }

   @media only screen and (max-width:960px){
    font-size:16px;
   }

   @media only screen and (max-width:660px){
    font-size:15px;
   }

   @media only screen and (max-width:320px){
    font-size:14px;
   }
`;


export const Text  = styled.p`
  font-size:18px;
  color:#9c9c9c;
  margin:10px auto;
  font-weight400;
  width:max-content;

  @media only screen and (max-width:1200px){
     font-size:16px;
  }

  @media only screen and (max-width:1138px){
    font-size:15px;
   }

   @media only screen and (max-width:1024px){
    font-size:14px;
   }

   @media only screen and (max-width:960px){
    font-size:13px;
   }

   @media only screen and (max-width:320px){
    font-size:12px;
   }
`;
