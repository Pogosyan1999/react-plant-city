import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

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
`;


export const ImgContainer3 = styled.div`
width:95%;
height:300px;
background-image: url(${img3});
background-size:cover;
position:relative;
`;

export const BgSection = styled.div`
width:100%;
height:100%;
background:rgba(0,0,0,0.40);
position:absolute;
top:0;
left:0;
`;


export const H4  = styled.h4`
  font-size:18px;
  color:var(--color-black);
  font-weight:600;
  width:max-content;

  @media only screen and (max-width:1180px){
   font-size:2px;
  }

  @media only screen and (max-width:1138px){
    font-size:16px;
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


export const P  = styled.p`
  font-size:14px;
  color:#9c9c9c;
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

