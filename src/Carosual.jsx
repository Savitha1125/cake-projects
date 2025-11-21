import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom"; // import navigate
import slide1 from "./assets/flower.jpg";
import slide2 from "./assets/children.jpg";
import slide3 from "./assets/cake.jpg";
import slide4 from "./assets/pic.png";
import "./carosual.css";

export default function Carosual() {
  const navigate = useNavigate();

  // Add link for each slide
  const slides = [
    { src: slide1, alt: "Flowers", link: "/flowers" },
    { src: slide2, alt: "Children", link: "/children" },
    { src: slide3, alt: "Cakes", link: "/cakepage" },
    { src: slide4, alt: "Special", link: "/special" },
  ];

  return (
    <div className="carousel-wrapper" >
      <Carousel
        interval={2000}
        controls={true}
        indicators={true}
        pause={false}
        prevIcon={<i className="fa-solid fa-chevron-left custom-arrow "></i>}
        nextIcon={<i className="fa-solid fa-chevron-right custom-arrow "></i>}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={slide.src}
              alt={slide.alt}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(slide.link)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
