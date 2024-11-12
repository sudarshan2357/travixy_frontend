import React from "react";  
import "../styles/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import Help from "../assets/images/Help.png";




const Contact = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg='8' className="m-auto mb-4">
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={Help} alt="" />
            </div>
            <div className="login__form">
              <h2>Contact Us {" "}
               <i className="ri-customer-service-2-fill"></i>
              </h2>
                <Form>
                    <FormGroup>
                    <input type="text" placeholder="Full Name" required id="username"/>
                    </FormGroup>
                    <FormGroup>
                    <input type="email" placeholder="Email" required id="email"/>
                    </FormGroup>
                    <FormGroup>
                    <input type="Number" placeholder="Phone number" required id="phone"/>
                    </FormGroup>
                    <Button className="btn secondary__btn auth__btn" type="submit">Send</Button>
                </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
};

export default Contact;