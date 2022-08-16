import React from 'react';
import { Container } from '../../../Container/Container';
import { SectionTwoItems } from './SectionTwoItems';
import { Block, Img, Title,Text } from './SectionTwoStyle';

const SectionTwo = () => {
  return (
   <Container>
      {
        SectionTwoItems.map((item)=>{
            return(
                <Block key = {item.id}>
                    <Img src = {item.src} alt = 'img'/>
                    <Title>{item.title}</Title>
                    <Text>{item.text}</Text>
                </Block>
            )
        })
      }
   </Container>
  )
}

export default SectionTwo