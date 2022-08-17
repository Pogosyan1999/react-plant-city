import React from "react";
import TabContent from "./TabContent/TabContent";
import TabMenu from "./TabMenu/TabMenu";
import { Button, ButtonContainer, Title } from "./FlowersStyle";

const Flowers = () => {
  return (
    <>
      <Title>Recent Arrival</Title>
      <TabMenu />
      <TabContent />
      <ButtonContainer>
         <Button to = '#'>All Products</Button>
      </ButtonContainer>
    </>
  );
};

export default Flowers;
