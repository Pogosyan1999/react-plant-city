import { Container } from "../../../../Container/Container";
import React, { useState, useEffect } from "react";
import { Block, Img, Star,  Price,Text } from "../FlowersStyle";
import axios from "axios";
import StarRating from "../Rating/Rating";
import { Link } from "react-router-dom";


const TabContent = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/flowers")
      .then((res) => setFlowers(res.data))
      .catch((err) => err);
  }, []);

  return (
    <Container>
      {flowers.map((item, index) => {
        return (
          <Block key={index}>
            <Link to="#">
              <Img src={item.img_url}  alt="img" />
            </Link>
            <Star>
              <StarRating />
            </Star>
            <Text>{item.title}</Text>
            <Price>{item.price}</Price>
          </Block>
        );
      })}
    </Container>
  );
};

export default TabContent;
