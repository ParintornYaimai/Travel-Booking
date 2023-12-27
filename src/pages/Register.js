import React, { useState } from "react";
import "../style/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

const Register = () => {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataLogin);
  };
  return (
    <Container>
      <row>
        <Col lg="8" className="m-auto">

          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    id="username"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    id="email"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    id="password"
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button type="submit" className="btn secondary__btn auth__btn">
                  Create Account
                </Button>
              </Form>
              <p>
                Already have an account?<a href="/login"> Login</a>
              </p>
            </div>

          </div>

        </Col>
      </row>
    </Container>
  );
};

export default Register;
