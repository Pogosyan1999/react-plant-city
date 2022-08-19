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

 @media only screen and (max-width:992px){
   flex-direction:column;
   justify-content:center;
 }
 
`;

export const TitleContainer = styled.div`
width:80%;
height:auto;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 800;
  color: var(--color-white);
  width: 100%;
  text-align: start;


  @media only screen and (max-width:1179px){
    font-size:40px;
  }

  @media only screen and (max-width:1024px){
    font-size:35px;
  }

  @media only screen and (max-width:992px){
    font-size:30px;
    text-align:center;
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

export const Text  = styled.h4`
  font-size:22px;
  color:var(--color-black);
  color: #fff;
  font-weight:600;

  @media only screen and (max-width:1180px){
   font-size:18px;
  }

  
   @media only screen and (max-width:992px){
       text-align:center;
     }

   @media only screen and (max-width:960px){
    font-size:15px;
   }

   @media only screen and (max-width:660px){
    font-size:14px;
   }

   @media only screen and (max-width:320px){
    font-size:12px;
   }
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

 @media only screen and (max-width:992px){
   width:200px;
   font-size:18px;
  }

  @media only screen and (max-width:800px){
   width:160px;
   height:40px;
   font-size:17px;
  }

  @media only screen and (max-width:712px){
   width:140px;
   font-size:16px;
  }

  @media only screen and (max-width:660px){
   width:120px;
   font-size:13px;
  }
`
