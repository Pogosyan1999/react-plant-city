import styled from "styled-components";

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 800;
  color: var(--color-white);
  width: 100%;
  text-align: ${props => props.start ? "start" : "center"};


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

