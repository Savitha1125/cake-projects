import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import "./cakes.css";

export default function Cakes() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

   const handleDateChange = (date) => {
    setSelectedDate(date);
  };
   
  //   const [priceFilter, setPriceFilter] = useState("All Products");
  //    const priceRanges = [
  //   "All Products",
  //   "7.34 and Below",
  //   "7.35 - 14.69",
  //   "14.70 - 22.04",
  //   "22.05 - 36.74",
  //   "36.75 and Above",
  // ];

  return (
    <>
      <div className="container">
        <h5>Online Cake Delivery</h5>

        <div
          className="mt-4 home"
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <span>Home</span>
          <i
            className="fi fi-br-angle-right icon"
            style={{ margin: "0 8px" }}
          ></i>
          <span className="cakes">Cakes</span>
        </div>

        <div className="content">
          <div className="box">
            <h5 style={{ marginBottom: "10px",marginLeft:"38px" }}>Cakes</h5>

            {/* Calendar + Delivery Date text */}
            <div
              className="cakes-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
          
              }}
              onClick={() => setShowPopup(true)} > 
              <i className="fi fi-tr-calendar-clock cal"
                 style={{ fontSize: "20px", color: "black", cursor: "pointer",display: "flex",
                  alignItems: "center",justifyContent: "center",gap: "9px"}}>
                  <span className="date">Delivery Date</span> <span className="select">Select Delivery Date</span></i> 
                 <i className="fi fi-br-angle-small-down dropdown-icon "></i>
            </div>
          </div>
        </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            {/*  Close button */}
            <button className="close-btn" onClick={() => setShowPopup(false)}>
  <IoClose size={24} />
</button>

<DatePicker
  selected={selectedDate}
  onChange={handleDateChange}
  inline
  calendarClassName="custom-calendar"
  minDate={new Date()} // disables all past dates
/>

<div className="popup-actions">
  <button
    className="reset-btn"
    onClick={() => {
      setSelectedDate(null); // clears selected date
      setShowPopup(false);   // closes popup
    }}
  >
    Reset
  </button>

  <button
    className="ok-btn"
    onClick={() => setShowPopup(false)} // closes popup normally
  >
    OK
  </button>
</div>
</div>
</div>
    )}
   <div className="filter-section">
    <div className="separator">
    <p className="filter">SGD</p></div>
      <label>Filter By Price</label> 
    <div className="select-wrapper">
    <select id="priceFilter" name="priceFilter">
    <option value="All Products">All Products</option>
    <option value="7.34 and Below">7.34 and Below</option>
    <option value="7.35 - 14.69">7.35 - 14.69</option>
    <option value="14.70 - 22.04">14.70 - 22.04</option>
    <option value="22.05 - 36.74">22.05 - 36.74</option>
    <option value="36.75 and Above">36.75 and Above</option>
  </select>
  </div>
  </div>
  </div>
    
    </>
  );
}
