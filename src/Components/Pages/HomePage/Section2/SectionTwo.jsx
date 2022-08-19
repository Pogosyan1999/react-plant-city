import React from 'react';
import { Container } from '../../../Container/Container';
import { SectionTwoItems } from './SectionTwoItems';
import { Block, Img ,P,Title} from './SectionTwoStyle';



const SectionTwo = () => {
  return (
   <Container>
      {
        SectionTwoItems.map((item)=>{
            return(
                <Block key = {item.id}>
                    <Img src = {item.src} alt = 'img'/>
                    <Title>{item.title}</Title>
                    <P>{item.text}</P>
                </Block>
            )
        })
      }
   </Container>
  )
}

export default SectionTwo