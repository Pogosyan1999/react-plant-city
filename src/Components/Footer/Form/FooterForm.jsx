import React, { useRef, useState } from "react";
import { FooterItem, Form, Input, Button, Error } from "../FooterStyle";
import Useform from "./UseForm";
import FormValidate from "./FormValidate";
const FooterForm = () => {
  const { handleChange, handleClick, values, errors, } = Useform(FormValidate);

  return (
    <Form onSubmit={handleClick}>
      <FooterItem>
        <Input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <Error>{errors.email}</Error>}
      </FooterItem>
      <FooterItem>
        <Button>Submit</Button>
      </FooterItem>
    </Form>
  );
};

export default FooterForm;
