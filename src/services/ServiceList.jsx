import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customImg from "../assets/images/customization.png";
import medImg from "../assets/images/Med.png";
import bus from "../assets/images/bus.png";
import support from "../assets/images/Support.png";

const services = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Plan Trips based on suitable weather conditions"
    },
    {
        imgUrl: guideImg,
        title: "Travel Guide",
        desc: "A Guide to assisst you in your trip"
    },
    {
        imgUrl: customImg,
        title: "Customization",
        desc: "Customize Your own packages"
    },
    {
        imgUrl: medImg,
        title: "Medical",
        desc: "Medical Assisstance for emergency"
    },
    {
        imgUrl: bus,
        title: "Transport",
        desc: "Pick and Drop Available"
    },
    {
        imgUrl: support,
        title: "Support",
        desc: "24/7 Support"
    }
]

const ServiceList = () => {
  return (
  <>
    {services.map((item, index) =>(
        <Col lg="4" md="4" sm="12" className="mb-4" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
  </>
  );
};

export default ServiceList;