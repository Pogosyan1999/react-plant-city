import React from 'react';
import { Container } from '../../../Container/Container';
import { Title } from '../../Title/TitleStyle';
import {Button, MinContainer, ShopSection,TitleContainer} from './ShoppingStyle';
import { Text } from '../../Text/TextStyle';

const Shopping = () => {
  return (
    <ShopSection>
        <Container>
            <MinContainer>
                <TitleContainer>
                    <Title start>Best Offers & Online Shopping Sale!</Title>
                    <Text white start>Get Deals & Discounts Across 30+ Categories Every Day Only Royallook!</Text>
                </TitleContainer>
                <Button>Get More Offers</Button>
            </MinContainer>
        </Container>
    </ShopSection>
  )
}

export default Shopping