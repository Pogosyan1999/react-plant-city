import styled from "styled-components";
import img from "./bg.svg";
import { Link as Links } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  height: 970px;
  background-image: url(${img});
  background-size: cover;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(7, 6, 6, 0.53);
    position: absolute;
    top: 0;
    left: 0;
  }

  @media only screen and (max-width:992px){
    height:600px;
  }

  @media only screen and (max-width:800px){
    height:500px;
  }

  @media only screen and (max-width:712px){
   height:400px;
  }

  @media only screen and (max-width:660px){
    height:350px;
  }

  @media only screen and (max-width:660px){
    height:300px;
  }

  @media only screen and (max-width:660px){
    height:250px;
  }

  
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  padding-top: 313px;

  @media only screen and (max-width:992px){
    padding-top: 100px;
  }

  @media only screen and (max-width:800px){
    padding-top: 80px;
  }

  @media only screen and (max-width:712px){
    padding-top:60px;
  }

  

  @media only screen and (max-width:660px){
    padding-top:60px;
  }

 


`;

export const Text = styled.h3`
  font-size: 40px;
  font-weight: 600;
  color: var(--color-white);
  width: 100%;
  text-align: center;

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

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 800;
  color: var(--color-white);
  width: 100%;
  text-align: center;

  @media only screen and (max-width:1200px){
    font-size:45px;
  };

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

export const LinkContainer = styled.div`
 width:100%;
 padding-top:82px;

 @media only screen and (max-width:800px){
    padding-top:60px;
  }

  @media only screen and (max-width:712px){
    padding-top:50px;
  }

  @media only screen and (max-width:660px){
  padding-top:0;
  }
`

export const Button = styled(Links)`
  width: 219px;
  height: 55px;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-light-green);
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 4px;
  margin:0 auto;
  &:hover{
    background:var(--color-white);
    transition:.5s;
    border:1px solid var(--color-light-green);
  }

  @media only screen and (max-width:1179px){
    font-size:18px;
    width: 210px;
  }

  @media only screen and (max-width:1024px){
    width: 205px;
  }

  @media only screen and (max-width:992px){
    font-size:16px;
    width:180px;
    height:45px;
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
