import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestSeller.css";

// Images
import cake1 from "./assets/blackforest.webp";
import cake2 from "./assets/mini-cake.webp";
import cake3 from "./assets/brownie.webp";
import cake4 from "./assets/cream.avif";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <FaChevronRight />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

export default function BestSeller() {
  const [activeTab, setActiveTab] = useState("cakes");

  const cakeProducts = [
    { img: cake1, name: "Delicious Black Forest Cake", oldPrice: 14.15, newPrice: 10.50, rating: 4.7 },
    { img: cake2, name: "Mini Cake", oldPrice: 10.00, newPrice: 8.31, rating: 4.5 },
    { img: cake3, name: "Brownie", oldPrice: 11.50, newPrice: 9.18, rating: 4.8 },
    { img: cake4, name: "Cream Cake", oldPrice: 9.99, newPrice: 8.45, rating: 4.6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
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
            className={`category-text mt-1 ms-5 fw-semibold fs-2 px-3 py-1 ${activeTab === "cakes" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("cakes")}
          >
            Cakes
          </span>

          <span
            className={`category-text mt-1 ms-4 fw-semibold fs-2 px-3 py-1 border border-dark rounded ${activeTab === "flowers" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("flowers")}
          >
            Flowers
          </span>
        </div>

        <Link to="/cakes" className="text-decoration-none text-dark">
          <h5 className="mt-1 me-5 fw-bold view-all-btn">VIEW ALL</h5>
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
                />
                <div className="card-body">
                  <h6 className="card-title fw-bold">{item.name}</h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="new-price text-dark fw-bold">SGD {item.newPrice.toFixed(2)}</span>
                    <span className="old-price">SGD {item.oldPrice.toFixed(2)}</span>
                    <span className="discount">
                      {Math.round(((item.oldPrice - item.newPrice) / item.oldPrice) * 100)}% off
                    </span>
                    <span className="rating ms-auto">
                      <i className="fa-solid fa-star text-light"></i> {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
