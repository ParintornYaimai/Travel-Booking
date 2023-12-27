import React, { useState } from "react";
import "../style/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import LoginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
  const [dataLogin, setDataLogin] = useState({
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
              <img src={LoginImg} alt="" />
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Login</h2>
              <Form onSubmit={handleSubmit}>
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
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account?<a href="/register"> Create</a>
              </p>
            </div>

          </div>

        </Col>
      </row>
    </Container>
  );
};

export default Login;
