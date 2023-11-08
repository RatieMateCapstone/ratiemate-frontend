import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input} from 'reactstrap';
import Footer from "../component/Footer";
import { NavLink } from "react-router-dom"

const SignUp = ({ signup }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formRef.current instanceof HTMLFormElement)) {
      console.error("formRef.current is not an HTML form element");
      return;
    }

    const formData = new FormData(formRef.current);

    const data = Object.fromEntries(formData);

    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmpassword
      }
    };

    try {
      await signup(userInfo);
      navigate('/movieindex');
      formRef.current.reset();
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <body id="signinsignup">
      <div id="content-container1">
        <Form id="form" innerRef={formRef} onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="username">Username:</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="confirmpassword">Password Confirmation:</Label>
            <Input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="confirm password"
              />
          </FormGroup>
          {' '}
              <input type='submit' value="Sign Up" />
          <div>
            Already registered?, 
            <NavLink to="/signin">
              Sign In
            </NavLink> 
          </div>
        </Form>
        </div>
      <Footer />
    </body>
  );
};

export default SignUp;
