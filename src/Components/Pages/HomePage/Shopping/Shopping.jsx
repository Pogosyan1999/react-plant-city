import React from 'react';
import { Container } from '../../../Container/Container';
import {Button, MinContainer, ShopSection,TitleContainer,Title,Text} from './ShoppingStyle';


const Shopping = () => {
  return (
    <ShopSection>
        <Container>
            <MinContainer>
                <TitleContainer>
                    <Title >Best Offers & Online Shopping Sale!</Title>
                    <Text>Get Deals & Discounts Across 30+ Categories Every Day Only Royallook!</Text>
                </TitleContainer>
                <Button>Get More Offers</Button>
            </MinContainer>
        </Container>
    </ShopSection>
  )
}

export default Shopping