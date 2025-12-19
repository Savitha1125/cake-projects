import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cakes.css"

export default function Cakes() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
<div className="container py-3">
  <h5 className="fw-normal cake-delivery">Online Cake Delivery</h5>
  {/* Breadcrumb – FULL WIDTH, starting from left */}
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
{/* FULL WIDTH FILTER BAR – breadcrumb keela */}
<div className="container-fluid filter-bar">
  <div className="container">
    <div className="row align-items-center py-2">

      <div className="col-auto fw-bold">
        Cakes <span className="fw-normal">(397 items)</span>
      </div>

     <div className="col-auto border-start ps-3 d-flex flex-column align-items-center justify-content-center delivery ">
  <div className="fw-bold filter">Delivery Date</div>
  <span>Select Delivery Date</span>
</div>

      <div className="col-auto ps-3 position-relative filter-price">
  <div className="fw-bold filter mb-1 ">Filter By Price</div>
  
  <select
    id="priceSelect"
    className="custom-dropdown"
    defaultValue=""
    style={{ color: "green"}}
  >
    <option value="">All Products</option>
    <option value="1">7.34 and Below</option>
    <option value="2">7.35 - 14.69</option>
    <option value="3">14.70 - 22.04</option>
    <option value="4">22.05 - 36.74</option>
    <option value="5">36.75 and Above</option>
  </select>
  
  <i
    className="fi fi-rr-caret-down position-absolute top-50 end-0 translate-middle-y pe-2"
    onClick={() => {
      const sel = document.getElementById("priceSelect");
      sel.focus();          
      sel.click();           
    }}
  ></i>
</div>
      <div className="col-auto ps-3 sort">
  <div className="fw-bold filter">Sort By</div>
  <select className="form-select form-select-sm w-auto custom-dropdown"style={{ color: "green"}} defaultValue="">
    <option value="" disabled hidden style={{ color: "green" }}>Popularity</option>
    <option value="1">Popularity</option>
    <option value="1">Newest</option>
    <option value="2">Rating</option>
  </select>
</div>
</div>
  </div>
</div>

    </>
  );
}
