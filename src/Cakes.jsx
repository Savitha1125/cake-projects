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

        <div className="filter-box-main">
          <div className="box">
            <h5 style={{ marginBottom: "10px",marginLeft:"38px" ,fontWeight:"bold"}}>Cakes{"  "}
              <span className="fw-normal items">(397 items)</span> </h5>

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
                  <span className="date m-auto">Delivery Date</span> <span className="select">Select Delivery Date</span></i> 
                 <i className="fi fi-br-angle-small-down dropdown-icon "></i>
            </div>
          </div>
        </div>
  </div>
    
    </>
  );
}
