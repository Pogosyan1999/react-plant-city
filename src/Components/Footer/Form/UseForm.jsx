import emailjs from "emailjs-com";
import  { useState } from "react";

const Useform = (FormValidate) => {
  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  function handleClick(e) {
    e.preventDefault();
    setErrors(FormValidate(values));

    emailjs
      .sendForm(
        "service_ipc1f0y",
        "template_ov5nl2u",
        e.target,
        "G3QcdtH0TAf67Blrg"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
    ...values,
      [name]: value,
    });

   

   
  };

  return {handleChange, values, handleClick,errors};
};

export default Useform;
