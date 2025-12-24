import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./cakes.css";
import imageData from "./images.json";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "./WishlistContext"; // adjust path

import choco from "./assets/images/choco.jpeg";
import butterscotch from "./assets/butterscotch.jpg";
import blackforest from "./assets/blackforest.webp";
import pineapple from "./assets/pineapple.jpg";

export default function Cakes() {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishlist();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [priceOption, setPriceOption] = useState("");
  const [sortOption, setSortOption] = useState("");
  
const imagesMap = { choco, butterscotch, blackforest, pineapple };
const images = imageData.map((img) => ({
  key: img.key,
  url: imagesMap[img.key],
  alt: img.alt,
}));


  return (
    <>
      {/* TITLE + BREADCRUMB */}
      <div className="container py-3">
        <h5 className="fw-normal cake-title">Online Cake Delivery</h5>

        <div className="breadcrumb-bar">
          <span className="home">Home</span>
          <span className="mx-1">{">"}</span>
          <span className="cakes">Cakes</span>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="container-fluid filter-bar">
        <div className="container">
          <div className="row align-items-center py-2 filter-row filter-row-desktop">

            {/* Cakes Count */}
            <div className="col-lg-auto cakes-count">
              Cakes <span className="fw-normal">(397 items)</span>
            </div>

            {/* Delivery Date */}
            <div
              className="col-lg-auto delivery d-flex align-items-center position-relative"
              onClick={() => setShowPopup(true)}
            >
              <i className="bi bi-calendar-event me-2"></i>

              <div className="me-4">
                <div className="fw-bold">Delivery Date</div>
                <small>Select Delivery Date</small>
              </div>

              <i className="bi bi-caret-down-fill dropdown-icon1 mt-2 me-2"></i>
            </div>

            {/* Filter by Price */}
            <div className="col-lg-auto position-relative">
              <div className="filter-label ms-2">Filter By Price</div>

              <div className="position-relative ">
                <span className="select-prefix">SGD</span>

                <select
                  className="form-select form-select-sm custom-dropdown ps-2 green-text me-5"
                  value={priceOption}
                  onChange={(e) => setPriceOption(e.target.value)}
                >
                  <option value="">All Products</option>
                  <option>7.34 and Below</option>
                  <option>7.35 - 14.69</option>
                  <option>14.70 - 22.04</option>
                  <option>22.05 - 36.74</option>
                  <option>36.75 and Above</option>
                </select>

                <i className="bi bi-caret-down-fill dropdown-icon"></i>
              </div>
            </div>

            {/* Sort */}
            <div className="col-lg-auto position-relative">
              <div className="filter-label  ms-2">Sort By</div>

              <div className="position-relative">
                <i class="fi fi-tr-sort-alt me-5"></i>
                <select
                  className="form-select form-select-sm custom-dropdown green-text"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="">Popularity</option>
                  <option>Price - Low to High</option>
                  <option>Price - High to Low</option>
                </select>

                <i className="bi bi-caret-down-fill dropdown-icon"></i>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* DATE PICKER */}
      {showPopup && ( <div className="date-overlay"> 
        <div className="date-popup"> 
        <IoClose className="close-icon" onClick={() => setShowPopup(false)} /> 
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} 
        inline minDate={new Date()} /> 
        <div className="date-footer d-flex justify-content-between mt-3"> 
        <button className="btn" style={{ backgroundColor: "red", color: "white", border: "none" }} 
        onClick={() => setSelectedDate(null)} > RESET </button> <button className="btn" 
        style={{ backgroundColor: "green", color: "white", border: "none" }} 
        onClick={() => setShowPopup(false)} > OK </button> </div> 
        </div>
        </div> 
        )}
      <div className="container py-4">
  <div className="row g-5">
    {images.map((item, i) => (
      <div className="col-12 col-sm-12 col-md-6 col-lg-3" key={i}>
        <Link to={`/cake/${item.key}`} className="text-decoration-none"></Link>
        <div className="cake-card" style={{cursor:"pointer"}}>
          <span className="badge-seller">Best Seller</span>
               <div
  className="wishlist-icon"
  onClick={(e) => {
    e.stopPropagation();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    toggleWishlist(item.key);
  }}
>
  <i
    className={`bi ${
      wishlist.includes(item.key)
        ? "bi-heart-fill text-danger"
        : "bi-heart"
    }`}
  ></i>
</div>

          <div className="cake-img-wrap">
            <img src={item.url} alt={item.alt} />
          </div>

          <div className="cake-body">
            <p className="cake-name">{item.alt}</p>

            <div className="price-row">
              <span className="new-price">SGD 7.62</span>
              <span className="old-price">SGD 11.22</span>
              <span className="off">32% Off</span>
              <span className="rating">4.7 ★</span>
              <small className="review-text">683 Reviews</small>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}
