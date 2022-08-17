import React from 'react';
import { Container } from '../../../Container/Container';
import { SectionTwoItems } from './SectionTwoItems';
import { Block, Img ,P} from './SectionTwoStyle';
import { Text } from "../../Text/TextStyle";


const SectionTwo = () => {
  return (
   <Container>
      {
        SectionTwoItems.map((item)=>{
            return(
                <Block key = {item.id}>
                    <Img src = {item.src} alt = 'img'/>
                    <Text>{item.title}</Text>
                    <P>{item.text}</P>
                </Block>
            )
        })
      }
   </Container>
  )
}

export default SectionTwo