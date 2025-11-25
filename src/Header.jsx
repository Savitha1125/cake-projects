import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Detail from "./Detail.jsx";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
export default function Header() {
  const [showPartnerTooltip, setShowPartnerTooltip] = useState(false);
  const [showCurrencyTooltip, setShowCurrencyTooltip] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('QAR');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip,setShowTooltip]=useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const currencies = [
  { code: "AUD", name: "Australian Dollar" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "QAR", name: "Qatari Rial" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "USD", name: "US Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "INR", name: "Indian Rupee" },
  { code: "THB", name: "Thai Baht" },
];


  return (
    <>
      {/* ================= TOP LINK BAR ================= */}
      <header className="top-links">
        <div className="container-fluid">
          <div className="row py-2 small d-flex justify-content-end">
            <div className="col-auto">
              <a href="#" className="text-decoration-none text-dark me-4">
                Help |
              </a>

              <span
                className="text-dark me-4 position-relative currency-trigger"
                onMouseEnter={() => setShowCurrencyTooltip(true)}
                onMouseLeave={() => setShowCurrencyTooltip(false)}
              >
                Currency: <strong>{selectedCurrency}</strong> |
                {showCurrencyTooltip && (
                  <div className="tooltip-box">
                    {currencies.map((cur) => (
                      <div
                        key={cur.code}
                        onClick={() => setSelectedCurrency(cur.code)}
                        className="tooltip-item"
                      >
                        {cur.code} - {cur.name}
                      </div>
                    ))}
                  </div>
                )}
              </span>

              {/* Partner Tooltip */}
              <span
                className="text-dark me-4 position-relative"
                onMouseEnter={() => setShowPartnerTooltip(true)}
                onMouseLeave={() => setShowPartnerTooltip(false)}
              >
                Partner With Us |
                {showPartnerTooltip && (
                  <div className="tooltip-box">
                    <div onClick={() => navigate("/vendor")}>
                      Become a Vendor
                    </div>
                    <div onClick={() => navigate("/franchise")}>
                      Become a Franchise
                    </div>
                  </div>
                )}
              </span>

              <a href="#" className="text-decoration-none text-dark">
                Track Order |
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN HEADER ================= */}
      <div className="container-fluid">
        <div className="header-row">
          <div className="logo">
            <img
              src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>

          {/* SEARCH BOX */}
          <div className="search-box position-relative">
            <input
              type="text"
              placeholder="Search 5000+ flowers, cakes, gifts etc"
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <FaSearch className="search-icon" />

            {showSuggestions && (
              <div className="search-tooltip">
                <h6 className="search-item">
                  Trending Shortcut
                  <hr />
                </h6>
                <div className="sub-menu">Cakes</div>
                <div className="sub-menu1">Flowers</div>
                <div className="sub-menu2">Gifts</div>
                <div className="sub-menu00">Combos</div>
                <div className="sub-menu01">Chocolates</div>
                <div className="sub-menu02">Birthday Gifts</div>
                <div className="sub-menu3">Personalized Gifts</div>
                <div className="sub-menu001">Anniversary Gifts</div>
              </div>
            )}
          </div>

          {/* LOCATION POPUP */}
          <div
            className="location-box"
            onClick={() => setShowPopup(true)}
          >
            <div className="location-flag-section">
              <img src="https://flagcdn.com/in.svg" alt="Flag" />
              <span>IND</span>
            </div>
            <div className="location-divider"></div>
            <div className="location-text-section">
              <FaMapMarkerAlt />
              <span>Choose Delivery Location</span>
              <FaPencilAlt className="edit-icon" />
            </div>
          </div>

           {showPopup && (
            <div className="popup-overlay" onClick={() => setShowPopup(false)}>
              <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                  <h1>Select Delivery Location</h1>
                  <button className="close-btn" onClick={() => setShowPopup(false)}>
                    ✕
                  </button>
                </div>
    
                <h4 className="popup-subtitle">
                  Select a delivery location to see product availability
                </h4>
    
               <div className="radio-group">
      <div className="location-option">
        <label>
          <input type="radio" name="location" defaultChecked />
          <span className="within">Within India</span>
        </label>
      </div>
    
      <div className="location-option">
        <label>
          <input type="radio" name="location" className='ratio' />
          <span className="within">Outside India</span>
        </label>
      </div>
    </div>
    
              <div className="search-section" onClick={() => setIsFocused(true)}>
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            placeholder={
              isFocused
                ? "Enter Pincode"
                : "Enter Delivery Area or Pincode"
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    
                <div className="links">
                  <a href="#">Don’t Know Pincode?</a>
                  <i
                    className="fi fi-rs-location-crosshairs"
                    style={{ color: "#80c2f1", marginRight: "-26%", marginTop: "3px" }}
                  ></i>
                  <span style={{ color: "#80c2f1" }}>Detect my Location</span>
                </div>
    
                <p className="login-text">
                  Login to view saved addresses. <a href="#">Login</a>
                </p>
    
                <button className="continue-btn">Continue Shopping</button>
              </div>
            </div>
          )}
          
          <div className="header-icons">
          {/* Hover User Tooltip */}
            <div className="icon-user"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ position: "relative" }}>
          <FaUser />

          {showTooltip && (
          <div className="tooltip-user-box">
          <h4>Welcome</h4>
          <p className="order">To access account and manage orders</p>
          <button className="btn btn-outline-dark px-0 py-0">Signup/Login</button>
          <p className="show">
          My Winni<br />
          My Orders<br />
          My Address Book<br />
          My Wallet<br />
          </p>
        </div>
        )}
        </div>

              <div className="icon-wrapper"
              onMouseEnter={() => setShowWishlist(true)}
              onMouseLeave={() => setShowWishlist(false)}
              onClick={() => navigate('/wishlist')}>
              <FaHeart />
               {showWishlist && (
                <div className="tooltip-wishlist">Wishlist
                </div>
              )}
              <span className="badge bg-danger icon-badge">0</span>
            </div>
            <div className="icon-wrapper"
             onMouseEnter={() => setShowCart(true)}
              onMouseLeave={() => setShowCart(false)}
              onClick={() => navigate("/cart")}>
              <FaShoppingCart />
              {showCart && <div className="tooltip-cart">Cart</div>}
              <span className="badge bg-danger icon-badge">0</span>
            </div>
          </div>
        </div>
      </div>

      <Detail />
    </>
  );
}
