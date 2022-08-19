import styled from "styled-components";
import { Link  as Links} from "react-router-dom";


export const Title = styled.h3`
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



 
`;

// tab css //

export const Tab = styled.div`
 width:100%;
 display:flex;
 justify-content:center;
 
`;
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

export const TabItem = styled.div`
   width:max-content;
   margin:0 10px;
   font-size:20px;
   color:var(--color-black);
   cursor:pointer;
   &:hover{
    color:var(--color-light-green);
    transition:.5s;
   }

   @media only screen and (max-width:992px) {
    font-size:18px;
   }

   @media only screen and (max-width:800px) {
    font-size:16px;
   }
   @media only screen and (max-width:712px) {
    font-size:15px;
   }

   @media only screen and (max-width:660px) {
    font-size:13px;
   }
`;

export const TabContent = styled.div`
  width:100%;
`;

//block css

export const Block = styled.div`
 width:24%;
 height:auto;
 margin-top:30px;


 @media only screen and (max-width:900px){
  width:30%;
  margin-top:10px;

 }

 @media only screen and (max-width:768px){
  width:50%;
 }

 @media only screen and (max-width:500px){
  width:100%;
 }
`;

export const Img = styled.img`
 width:100%;
 height:60%;

;
`

export const Star = styled.div`
width: max-content;
margin:0 auto;
`;



export const Price  = styled.p`
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

export const ButtonContainer = styled.div`
 width:100%;
`

export const Button = styled(Links)`
width:173px;
height:53px;
background:var(--color-light-green);
color:var(--color-white);
font-size:20px;
font-weight:600;
margin:60px auto;
display:block;
cursor:pointer;
border:none;
box-sizing:border-box;
border-radius:4px;
display:flex;
justify-content:center;
align-items:center;

&:hover{
  background:var(--color-white);
  border:1px solid var(--color-light-green);
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

`;






