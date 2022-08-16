import React from "react";
import {
  Section,
  Container,
  Text,
  Title,
  Button,
  LinkContainer,
} from "./BackgroundStyle";

const Background = () => {
  return (
    <Section>
      <Container>
        <Text>Summer Best Offer Flat 50%</Text>
        <Title>Indoor and outdoor Plants</Title>
        <LinkContainer>
          <Button to="#" className="button">View more items</Button>
        </LinkContainer>
      </Container>
    </Section>
  );
};

export default Background;
