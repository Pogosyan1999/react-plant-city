import styled from "styled-components";

export const ImgContainer = styled.div`
  width: 18%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 50px;
 

  @media only screen and (max-width:899px) {
    width:23%;
   }


   @media only screen and (max-width:600px) {
      width:25%;
     }

     @media only screen and (max-width:414px) {
      width:30%;
     }
`;

export const FooterImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MinContainer = styled.div`
  width: max-content;
  height: auto;

  @media only screen and (max-width: 1137px) {
    width: 33%;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 767px) {
    width: 35%;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterItem = styled.li`
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  font-size: 18px;
  color: var(--color-black);
  font-weight: 400;

  @media only screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 1179px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const Title = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: var(--color-black);
  width: max-content;

  @media (min-width: 1138px) and (max-width: 1179px) {
    font-size: 18px;
  }

  @media (min-width: 992px) and (max-width: 1137px) {
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 16px;
  }
`;

export const FooterText = styled.p`
  font-size: 20px;
  color: var(--color-black);
  text-align: center;

  @media only screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 1179px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1137px) {
    text-align: start;
    font-size: 15px;
  }

  @media only screen and (max-width: 991px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 13px;
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  height: 70px;

  @media (min-width: 1138px) and (max-width: 1179px) {
    height: 60px;
  }

  @media only screen and (max-width: 1137px) {
    justify-content: start;
    height: 50px;
  }

  @media only screen and (max-width: 991px) {
    height: 50px;
  }
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: var(--color-white);
  border-radius: 4px;
  outline: none;
  border: none;

  @media only screen (max-width: 1179px) {
    padding: 15px 20px;
    font-size: 14px;
  }

  @media only screen and (max-width: 991px) {
    padding: 12px 20px;
  }

  @media only screen and (max-width: 767px) {
    padding: 10px 20px;
  }

  @media only screen and (max-width: 500px) {
    width: 60%;
  }

  @media only screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 126px;
  height: 43px;
  font-size: 18px;
  border: 1px solid var(--color-light-green);
  border-radius: 4px;
  background: none;
  outline: none;
  cursor: pointer;
  margin: 28px auto 0;
  display: block;

  &:hover {
    background: var(--color-light-green);
    border: 1px solid var(--color-white);
    color: var(--color-white);
    transition: 0.5s;
  }

  @media (min-width: 1138px) and (max-width: 1179px) {
    font-size: 16px;
  }

  @media (min-width: 992px) and (max-width: 1137px) {
    margin: 28px 0;
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
    width: 110px;
    height: 35px;
    margin: 28px 0;
  }

  @media only screen and (max-width: 767px) {
    font-size: 13px;
    width: 100px;
    height: 30px;
    margin: 20px 0;
  }
`;


export const Error = styled.span`
 color:red;
 font-size:12px;
`

//footer icons css //

export const TitleContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

 
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const IconsMinContainer = styled.div`
  width: max-content;
  margin: 0 10px;
`;

export const IconsLink = styled.a`
  color: var(--color-black);
  font-size: 18px;
  padding: 10px;
  background: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media only screen and (max-width: 1280px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 1179px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 14px;
  }
`;
