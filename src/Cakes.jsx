import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./cakes.css";
import choco from "./assets/images/choco.jpeg";
import cake2 from "./assets/butterscotch.jpg";
import cake3 from "./assets/blackforest.webp";
import cake4 from "./assets/pineapple.jpg";


export default function Cakes() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [priceOption, setPriceOption] = useState("");
  const [sortOption, setSortOption] = useState("");
  const priceOptionImages = [
  { src: choco, alt: "Chocolate Cake" },
  { src: cake2, alt: "Vanilla Cake" },
  { src: cake3, alt: "Strawberry Cake" },
  { src: cake4, alt: "Black Forest Cake" },
];

  return (
    <>
      {/* Header */}
      <div className="container py-3">
        <h5 className="fw-normal cake-delivery">Online Cake Delivery</h5>
        <div className="container-fluid breadcrumb-bar">
          <nav aria-label="breadcrumb">
            <div className="breadcrumb-content">
              <span className="home">Home</span>
              <span className="mx-1">{">"}</span>
              <span className="cakes">Cakes</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="container-fluid filter-bar">
        <div className="container">
          <div className="row align-items-center py-2 g-2">

            {/* Cake Count */}
            <div className="col-12 col-lg-auto fw-bold mb-2 mb-lg-0 me-lg-5 text-start">
              Cakes <span className="fw-normal">(397 items)</span>
            </div>

            {/* Delivery Date */}
            <div
  className="col-12 col-lg-auto d-flex align-items-center mb-2 mb-lg-0 delivery position-relative pe-4"
  style={{ cursor: "pointer" }}
  onClick={() => setShowPopup(true)}
>
  <i className="bi bi-calendar-event fs-5 me-2"></i>
  <div className="d-flex flex-column">
    <div className="fw-bold">Delivery Date</div>
    <span>Select Delivery Date</span>
  </div>

  {/* Down icon before the vertical line */}
  <i
    className="bi bi-caret-down-fill position-absolute down-icon"
  ></i>
</div>
{/* Price Filter */}
    <div className="col-12 col-lg-auto d-flex flex-column position-relative mb-2 mb-lg-0 filter-price">
      <div className="fw-bold filter ms-5">Filter By Price</div>
        <div className="position-relative">
            <span className="select-prefix">SGD</span>
              <select
              id="priceSelect"
              className="form-select form-select-sm custom-dropdown ps-5 mb-1"
              value={priceOption}
              onChange={(e) => setPriceOption(e.target.value)}
              style={{ minWidth: "150px" }}
            >
            <option value="">All Products</option>
            <option value="1">7.34 and Below</option>
            <option value="2">7.35 - 14.69</option>
            <option value="3">14.70 - 22.04</option>
            <option value="4">22.05 - 36.74</option>
            <option value="5">36.75 and Above</option>
            </select>

                {/* Consistent down icon */}
                <i
                  className="bi bi-caret-down-fill position-absolute"
                  style={{
                    right: "0px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                ></i>
              </div>
            </div>

            {/* Sort Filter */}
            <div className="col-12 col-lg-auto d-flex flex-column position-relative mb-2 mb-lg-0">
              <div className="fw-bold filter ms-2">Sort By</div>
              <select
                id="sortSelect"
                className="form-select form-select-sm custom-dropdown"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{ minWidth: "150px" }}
              >
                <option value="">Popularity</option>
                <option value="priceLow">Price - Low to High</option>
                <option value="priceHigh">Price - High to Low</option>
              </select>

              {/* Consistent down icon */}
              <i
                className="bi bi-caret-down-fill position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              ></i>
            </div>

          </div>
        </div>
      </div>
      {/* Date Picker Popup */}
      {showPopup && (
        <div className="date-overlay">
          <div className="date-popup">
            <IoClose
              className="close-icon"
              onClick={() => setShowPopup(false)}
            />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
              minDate={new Date()}
            />
            <div className="date-footer d-flex justify-content-between mt-3">
              <button
                className="btn"
                style={{ backgroundColor: "red", color: "white", border: "none" }}
                onClick={() => setSelectedDate(null)}
              >
                RESET
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "green", color: "white", border: "none" }}
                onClick={() => setShowPopup(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container my-3">
  <div className="row">
    {priceOptionImages.map((img, index) => (
      <div key={index} className="col-6 col-md-3 mb-3">
        <img src={img.src} alt={img.alt} className="img-fluid cake-img1" />
      </div>
    ))}
  </div>
</div>

    </>
  );
}
