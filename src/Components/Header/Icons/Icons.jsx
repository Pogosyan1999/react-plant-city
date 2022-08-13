import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Icons.module.css";
import {
  IconsContainer,
  Button,
  UserLink,
  ShopLink,
  Input,
  Span,
} from "./IconElements";

const Icons = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [val, setVal] = useState("");

  const handleClick = () => {
    setActive(!active);
    setVal("");
  };
  return (
    <IconsContainer>
      <Input
        type="text"
        className={active ? styles.active : " "}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        <BsSearch />
      </Button>
      <UserLink to="#">
        <FiUser />
      </UserLink>
      <ShopLink to="#" className="ShopLink">
        <Span>
          <AiOutlineShoppingCart />
        </Span>
        {count}
      </ShopLink>
    </IconsContainer>
  );
};

export default Icons;
