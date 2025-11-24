import React, { useState } from "react";
import Slider from "react-slick";
import "./BestSeller.css";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import cake1 from "./assets/blackforest.webp";
import cake2 from "./assets/mini-cake.webp";
import cake3 from "./assets/brownie.webp";
import cake4 from "./assets/cream.avif";

// Custom Right Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        right: "-25px",
        top: "40%",
        width: "30px",
        height: "30px",
        background: "pink",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
    </div>
  );
};

// Hide Left Arrow
const PrevArrow = () => null;

export default function BestSeller() {
  const [activeTab, setActiveTab] = useState("cakes");

  const cakeProducts = [
    { img: cake1, name: "Delicious Black Forest Cake", price: "$15" },
    { img: cake2, name: "Mini Cake", price: "$20" },
    { img: cake3, name: "Brownie", price: "$18" },
    { img: cake4, name: "Cream Cake", price: "$22" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container-fluid best-container py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3 ms-5">
          <h1 className="fw-bold mt-1 seller">Bestsellers</h1>
          <span
            className={`category-text mt-1 ms-5 fw-semibold fs-2 px-3 py-1 ${
              activeTab === "cakes" ? "bg-dark text-white" : ""
            }`}
            onClick={() => setActiveTab("cakes")}
          >
            Cakes
          </span>
          <span
            className={`category-text mt-1 ms-4 fw-semibold fs-2 px-3 py-1 ${
              activeTab === "flowers" ? "bg-dark text-white" : "border border-dark rounded"
            }`}
            onClick={() => setActiveTab("flowers")}
          >
            Flowers
          </span>
        </div>

        <Link to="/cakes" className="text-decoration-none text-dark">
          <h5
            className="mt-1 me-5 fw-bold"
            style={{
              backgroundColor: "#f6a2baff",
              height: "40px",
              padding: "7px",
              borderRadius: "5px",
            }}
          >
            VIEW ALL
          </h5>
        </Link>
      </div>

      <hr className="container-line" />

      <div className="container mt-4">
        <Slider {...settings}>
          {cakeProducts.map((item, index) => (
            <div key={index} className="px-2">
              <div className="card cake-card">
                <img
                  src={item.img}
                  alt={item.name}
                  className="cake-img img-fluid mx-auto d-block"
                  style={{ height: "200px", objectFit: "cover", borderRadius: "10px" }}
                />
                <div className="card-body">
                  <h6 className="card-title text-center fw-bold">{item.name}</h6>
                  <p className="card-text text-center text-danger">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
