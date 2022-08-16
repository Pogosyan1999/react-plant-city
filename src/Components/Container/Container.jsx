import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  
  @media only screen and (max-width:899px) {
    flex-wrap: wrap;
 }

 @media only screen and (max-width:499px) {
 width:100%;
 padding: 0 20px;
 box-sizing:border-box;
}

`;

export const Container = styled.div`
width: 84%;
height: 100%;
display: flex;
justify-content: space-between;
margin: 0 auto;
flex-wrap:wrap;
`



