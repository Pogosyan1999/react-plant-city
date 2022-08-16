function FormValidate(values) {
    let errors = {};
  
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (!values.email.trim()) {
      errors.email = "Email required";
    } else if (!email.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
   
  
    return errors;
  }
  
  export default FormValidate;
  