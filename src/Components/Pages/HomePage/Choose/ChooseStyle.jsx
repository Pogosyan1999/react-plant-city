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

@media only screen and (max-width:800px){
    width:50%;
   }

 
`;

export const ImgContainer = styled.div`
width:50px;
height:50px;

@media only screen and (max-width:900px) {
    width:40px;
    height:40px;
   }

   @media only screen and (max-width:660px) {
    width:30px;
    height:30px;
   }
`;

export const Img  = styled.img`
width:100%;
height:100%;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 800;
  color: var(--color-white);
  width: 100%;
  text-align:center;


  @media only screen and (max-width:1179px){
    font-size:40px;
  }

  @media only screen and (max-width:1024px){
    font-size:35px;
  }

  @media only screen and (max-width:992px){
    font-size:30px;
  }

  @media only screen and (max-width:800px){
    font-size:28px;
  }

  @media only screen and (max-width:712px){
    font-size:26px;
  }

  @media only screen and (max-width:660px){
    font-size:25px;
  }

  @media only screen and (max-width:575px){
    font-size:20px;
 
  }

  @media only screen and (max-width:475px){
    font-size:18px;
  }

  @media only screen and (max-width:375px){
    font-size:15px;
  }

  @media only screen and (max-width:320px){
    
    font-weight:400
  }

`;

export const H5 = styled.h5`
font-size:24px;
font-weight:700;
margin:10px 0;

@media only screen and (max-width:900px){
   font-size:22px;
  }
  @media only screen and (max-width:800px){
    font-size:20px;
   }

   @media only screen and (max-width:660px){
    font-size:18px;
   }

   @media only screen and (max-width:500px){
    font-size:16px;
   }
`;



export const P = styled.p`
font-size:22px;

@media only screen and (max-width:900px){
    font-size:20px;
   }

   @media only screen and (max-width:800px){
    font-size:18px;
   }

   @media only screen and (max-width:660px){
    font-size:16px;
   }

   @media only screen and (max-width:500px){
    font-size:15px;
   }

`;