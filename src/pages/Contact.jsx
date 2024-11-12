import React, { useRef, useState, useEffect } from "react";
import "../styles/login.css";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";
import Help from "../assets/images/Help.png";
import emailjs from "emailjs-com";

export const Contact = ({ user }) => {
  const form = useRef();

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      username: user?.username || "",
      email: user?.email || "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_8c8gh2l";
    const TEMPLATE_ID = "template_35f2pe5";
    const USER_ID = "HpkvfM-OXCgGmuzSc";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );
  };

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        phone: "",
        message: "",
      });
    }
  }, [user]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto mb-4">
            <div className="login__container d-flex justify-content-between">
              <div className="contact__img">
                <img src={Help} alt="" />
              </div>
              <div className="login__form">
                <h2 className="contact__title">
                  Contact Us <i className="ri-customer-service-2-fill"></i>
                </h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      name="username"
                      placeholder="Full Name"
                      required
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Leave a message and our team will contact you"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">
                    Send
                  </Button>
                  <Button
                    className="btn secondary__btn auth__btn mt-2"
                    type="button"
                    onClick={resetForm}
                  >
                    Reset
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
