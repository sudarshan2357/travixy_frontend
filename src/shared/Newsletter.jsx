import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

import Mascot from "../assets/images/mascot.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg='6'>
              <div className="newsletter__content">
                  <h2>Subscribe now to get useful information</h2>
                  <div className="newsletter__input">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn newsletter__btn">Subscribe</button>
                  </div>
                  <p>Get subscribed to our newsletter to receive weekly updates on new destinations and upcoming tours.</p>
              </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
              <img src={Mascot} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;