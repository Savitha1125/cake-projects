import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "./BestSeller.css";

// Cake Images
import cake1 from "./assets/blackforest.webp";
import cake2 from "./assets/mini-cake.webp";
import cake3 from "./assets/brownie.webp";
import cake4 from "./assets/cream.avif";
import cake5 from "./assets/truffle.avif";
import cake6 from "./assets/pinapple.jpg";
import cake7 from "./assets/fudge brownie cake.webp";

// Flower Images
import flower1 from "./assets/pink Flower.avif";
import flower2 from "./assets/blue-flower.webp";
import flower3 from "./assets/orchids.avif";
import flower4 from "./assets/wish.avif";
import flower5 from "./assets/roses.avif";
import flower6 from "./assets/white flower.avif";
import flower7 from "./assets/Rose Box.avif";

export default function BestSeller() {
  const [activeTab, setActiveTab] = useState("cakes");

  const cakeProducts = [
    { img: cake1, name: "Black Forest Cake", oldPrice: 14.15, newPrice: 10.5, rating: 4.7 },
    { img: cake2, name: "Mini Cake", oldPrice: 10.0, newPrice: 8.31, rating: 4.5 },
    { img: cake3, name: "Brownie", oldPrice: 11.5, newPrice: 9.18, rating: 4.8 },
    { img: cake4, name: "Cream Cake", oldPrice: 9.99, newPrice: 8.45, rating: 4.6 },
    { img: cake5, name: "Chocolate Truffle", oldPrice: 12.83, newPrice: 8.31, rating: 4.7 },
    { img: cake6, name: "Pineapple Cake", oldPrice: 12.83, newPrice: 8.31, rating: 4.7 },
    { img: cake7, name: "Fudge Brownie Cake", oldPrice: 12.1, newPrice: 9.18, rating: 4.6 },
  ];

  const flowerProducts = [
    { img: flower1, name: "Pink Carnation In Pink Packing", oldPrice: 17.07, newPrice: 15.5, rating: 4.9 },
    { img: flower2, name: "Mesmerising Blue Orchids Vase", oldPrice: 18.0, newPrice: 14.25, rating: 4.6 },
    { img: flower3, name: "Bouquet of Orchids", oldPrice: 24.81, newPrice: 16.05, rating: 4.8 },
    { img: flower4, name: "Tulip Bouquet", oldPrice: 22.0, newPrice: 17.9, rating: 4.7 },
    { img: flower5, name: "8 Pink Roses", oldPrice: 12.40, newPrice: 9.48, rating: 4.7 },
    { img: flower6, name: "Pretty Pink And White Carnations", oldPrice: 16.05, newPrice: 11.67, rating: 4.9 },
    { img: flower7, name: "Mesmeric Pink Roses Box", oldPrice: 12.04, newPrice: 8.75, rating: 4.9 },
  ];

  const productsToShow = activeTab === "cakes" ? cakeProducts : flowerProducts;
  const totalCards = productsToShow.length;

  // EACH TAB HAS ITS OWN SCROLL INDEX
  const [currentIndex, setCurrentIndex] = useState({
    cakes: 0,
    flowers: 0,
  });

  // Card settings
  const cardWidth = 280;
  const gap = 15;
  const visibleCount = 4;

  const scrollRight = () => {
    setCurrentIndex((prev) => ({
      ...prev,
      [activeTab]: Math.min(prev[activeTab] + 1, totalCards - visibleCount),
    }));
  };

  const scrollLeft = () => {
    setCurrentIndex((prev) => ({
      ...prev,
      [activeTab]: Math.max(prev[activeTab] - 1, 0),
    }));
  };

  return (
    <div className="container-fluid best-container py-4">

      {/* ---- HEADER ---- */}
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3 ms-5">
          <h1 className="fw-bold mt-1 seller">Bestsellers</h1>

          {/* Cakes Tab */}
          <span
            className={`category-text mt-1 ms-5 fw-semibold fs-2 px-3 py-1 ${
              activeTab === "cakes" ? "active-tab" : ""
            }`}
            onClick={() =>
              setActiveTab("cakes")
            }
          >
            Cakes
          </span>

          {/* Flowers Tab */}
          <span
            className={`category-text flowers-text mt-1 ms-4 ms-md-1 fw-semibold fs-2 px-3 py-1 border border-dark rounded ${
              activeTab === "flowers" ? "active-tab" : ""
            }`}
            onClick={() =>
              setActiveTab("flowers")
            }
          >
            Flowers
          </span>
        </div>

        <Link to="/cakes" className="text-decoration-none text-dark">
         <h5 className="mt-0 fw-bold view-all-btn ms-auto d-md-block d-sm-block text-end">VIEW ALL
         </h5>
        </Link>
      </div>

      <hr className="container-line" />

      {/* ---- CAROUSEL ---- */}
      <div
        className="container mt-4 position-relative"
        style={{
          maxWidth: `${visibleCount * cardWidth + (visibleCount - 1) * gap}px`,
          margin: "0 auto",
        }}
      >
        {/* LEFT ARROW */}
        {currentIndex[activeTab] > 0 && (
          <button className="arrow-btn1 arrow-left1" onClick={scrollLeft}>
            <IoIosArrowBack size={20} />
          </button>
        )}

        {/* RIGHT ARROW */}
        {currentIndex[activeTab] < totalCards - 1 && (
          <button className="arrow-btn1 arrow-right1" onClick={scrollRight}>
            <IoIosArrowForward size={20} />
          </button>
        )}

        <div className="scroll-wrapper" style={{ overflow: "hidden" }}>
          <div
            className="scroll-container"
            style={{
              display: "flex",
              gap: `${gap}px`,
              transform: `translateX(-${
                currentIndex[activeTab] * (cardWidth + gap)
              }px)`,
              transition: "transform 0.4s ease",
            }}
          >
            {/* ---- PRODUCT CARDS ---- */}
            {productsToShow.map((item, index) => {
              const discount = (
                ((item.oldPrice - item.newPrice) / item.oldPrice) *
                100
              ).toFixed(0);

              return (
                <div
                  key={index}
                  className="card cake-cards"
                  style={{ minWidth: `${cardWidth}px` }}
                >
                  <img src={item.img} alt={item.name} className="cake-imges img-fluid" />

                  <div className="card-body">
                    <h6 className="card-title fw-bold">{item.name}</h6>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="new-price text-dark fw-bold">
                        SGD {item.newPrice.toFixed(2)}
                      </span>

                      <span className="old-price text-decoration-line-through">
                        SGD {item.oldPrice.toFixed(2)}
                      </span>

                      <span className="discounts text-dark fw-bold">-{discount}%</span>

                      {/* SINGLE STAR + RATING */}
                      <div className="rating d-flex align-items-center ms-auto">
                        <FaStar color="#fff" />
                        <span className="ms-1">({item.rating})</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
