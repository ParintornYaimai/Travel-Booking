import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.png";


const Footer = () => {
  const quick__links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ]
  const quick__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <a href="#" ><i class="ri-youtube-fill"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-twitter-fill"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-facebook-circle-fill"></i></a>
                </span>
                <span>
                  <a href="#"><i class="ri-instagram-fill"></i></a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer_link-title">
              Disciver
            </h5>
            <ListGroup className="footer__quick-link">
              {
                quick__links.map((link, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <a href={link.path}>{link.display}</a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
            <h5 className="footer_link-title">
              Quick Links
            </h5>
            <ListGroup className="footer__quick-link">
              {
                quick__links2.map((link, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <a href={link.path}>{link.display}</a>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>

            <h5 className="footer_link-title">
              Contact
            </h5>
            <ListGroup className="footer__quick-link">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className="mb-0">Lorem ipsum</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className="mb-0">Lorem @gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  Phone:
                </h6>
                <p className="mb-0">088-888-0000</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;




