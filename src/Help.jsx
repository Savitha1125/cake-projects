import React from "react";
import { useNavigate } from "react-router-dom";
import "./help.css";

export default function Help() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">

      <div className="row align-items-center justify-content-start">

        {/* 1 - Help Center */}
        <div
          className="col-6 col-md-2 mb-3 ms-5 d-flex align-items-center pointer"
          onClick={() => navigate("/help-center")}
        >
          <img
            src="https://assets.winni.in/groot/2023/07/19/desktop/help.png"
            width="28"
            alt=""
          />
          <span className="ms-2">Help Center</span>
        </div>

        {/* 2 - Vendor Tie Ups */}
        <div
          className="col-6 col-md-2 mb-3 d-flex align-items-center pointer"
          onClick={() => navigate("/vendor-tie-ups")}
        >
          <img
            src="https://assets.winni.in/groot/2023/07/19/desktop/vendor-tie.png"
            width="28"
            alt=""
          />
          <span className="ms-2">Vendor Tie-Ups</span>
        </div>

        {/* 3 - Corporate Order */}
        <div
          className="col-6 col-md-2 mb-3 d-flex align-items-center pointer"
          onClick={() => navigate("/corporate-order")}
        >
          <img
            src="https://assets.winni.in/groot/2023/07/19/desktop/corporate-order.png"
            width="28"
            alt=""
          />
          <span className="ms-2">Corporate Order</span>
        </div>

        {/* 4 - Franchise Enquiry */}
        <div
          className="col-6 col-md-2 mb-3 d-flex align-items-center pointer"
          onClick={() => navigate("/franchise-enquiry")}
        >
          <img
            src="https://assets.winni.in/groot/2023/07/19/desktop/franchise-enquiry.png"
            width="28"
            alt=""
          />
          <span className="ms-2">Franchise Enquiry</span>
        </div>

        {/* 5 - Winni In News */}
        <div
          className="col-6 col-md-2 mb-3 d-flex align-items-center pointer"
          onClick={() => navigate("/winni-in-news")}
        >
          <img
            src="https://assets.winni.in/groot/2023/07/19/desktop/winni-news.png"
            width="28"
            alt=""
          />
          <span className="ms-2">Winni In News</span>
        </div>

      </div>
    </div>
  );
}
