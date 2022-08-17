import styled from "styled-components";


export const Text  = styled.h4`
  font-size:22px;
  color:var(--color-black);
  color: ${props => props.white ? "white" : "var(--color-black)"};
  font-weight:600;
  margin: ${props => props.start ? "10px 0" : "10px auto"};
  width:max-content;

  @media only screen and (max-width:1180px){
   font-size:18px;
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