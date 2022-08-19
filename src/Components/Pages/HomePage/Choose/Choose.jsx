import React from 'react';
import { BgSection, Title, Block, H5, ImgContainer, Section, Img, P } from './ChooseStyle';
import { ChooseItems } from './ChooseItems';
import { Container } from '../../../Container/Container';


const Choose = () => {
    return (
        <Section>
            <BgSection>
                <Container>
                    <Title>Why Choose Us?</Title>
                    {
                        ChooseItems.map((item) => {
                            return (
                                <Block key={item.id}>
                                    <ImgContainer>
                                        <Img src={item.src} alt='img' />
                                    </ImgContainer>
                                    <H5>{item.quantity}</H5>
                                    <P>{item.text}</P>
                                </Block>
                            )
                        })
                    }
                </Container>
            </BgSection>
        </Section>
    )
}

export default Choose