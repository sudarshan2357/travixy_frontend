import React from "react";  
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroImg03 from "../assets/images/hero-img03.jpg";
import Subtitle from "../shared/Subtitle";
import globe from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featuered-tour/FeaturedTourList";
import exp from "../assets/images/exp.png";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter"



const Home = () => {
  return  <>

  {/* =========== hero section ========== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Explore with Us'}/>
              <img src={globe} alt="" />
            </div>
            <h1>Traveling unlocks unforgettable <span className="highlight">memories</span></h1>
            <>We strive to offer journeys that are not only comfortable and accessible but also enriching, helping seniors reconnect with cultures, nature, and themselves. Through curated itineraries that balance relaxation, learning, and wellness, we seek to create opportunities for lifelong learning, social interaction, and cherished memories.
            </>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5 img-3">
            <img src={heroImg03} alt="" />
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
  </section>
  {/* =========== hero section end ========== */}
  <section>
    <Container>
      <Row>
        <Col>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className="services__title">We offer our best services</h2>
        </Col>
        <hr />
      </Row>
      <Row>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/* =========== featured section========== */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className="mb-5 text-center">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Featured Packages</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>
  {/* ===========Experiencesection========== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'} />
            <h2>With Our All experience <br /> We Will Serve You</h2>
            <p>
            "With our extensive experience and passion for travel, we’re committed to crafting unforgettable journeys tailored to your needs. From curating comfortable stays to arranging enriching excursions, we focus on every detail to ensure a seamless and joyful experience.
            <br />
            Our seasoned team understands the nuances of travel, especially for seniors, and is dedicated to providing the highest level of comfort, safety, and personalized service. Let us guide you on a journey filled with beautiful destinations, cultural immersion, and cherished memories."
            </p>
          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">  
              <span>50+</span> 
              <h6>Memorable Journeys</h6>
            </div>
            <div className="counter__box">
              <span>2</span>
              <h6>Years of Caring Service</h6>
            </div>
            <div className="counter__box">
              <span>15</span> 
              <h6>Truted Hotel Partners</h6>
            </div>  
            <div className="counter__box">
              <span>30+</span> 
              <h6>Beautiful Destinations</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={exp} alt="Experience" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/* ===========Gallery Section========== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'} />
          <h2 className="gallery__title">
            Visit Our Customer Tour Gallery
          </h2>
        </Col>
        <Col lg='12'>
            <MasonryImagesGallery />
        </Col>
      </Row>
    </Container>
  </section>
  {/* ===========Testimonial Section========== */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Testimonial'} />
          <h2 className="testimonial__title">What Our Customers Say About Us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials />
        </Col>
      </Row>
    </Container>
  </section>
  {/* ===========Newsletter Section========== */}
  <Newsletter />
  </>
};

export default Home;