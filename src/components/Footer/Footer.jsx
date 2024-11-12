import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo2 from "../../assets/images/logo2.png";

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "Gallery",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__links2 = [
  {
    path: "/contact",
    display: "HelpDesk",
  },
  {
    path: "/Login",
    display: "Login",
  },
  {
    path: "/register",
    display: "SignUp",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
  <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo2} alt="" />
            <p>Experience seamless travel with Travixy—crafted journeys, trusted partners, and cherished memories for every traveller.</p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to="https://www.instagram.com/travixy_?igsh=N3RtOTQzYnhsbGYw">
                  <i className="ri-instagram-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="mailto:shristi.drolia.24mb@gmail.com">
                <i className="ri-mail-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://wa.me/qr/G6GOFHS54DTYF1">
                  <i className="ri-whatsapp-fill"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/shristi-drolia-160477212/?originalSubdomain=in">
                  <i className="ri-linkedin-box-fill"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
            {
              quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title contact">Contact</h5>
          <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i className="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className="mb-0">Lorem ipsum dolor sit amet.</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i className="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className="mb-0">shristi.drolia.24mb@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i className="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className="mb-0">789456685, 4541854724</p>
                </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='12' className="pt-5 text-center">
          <p className="copyright">Copyright {year}, All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
};

export default Footer;