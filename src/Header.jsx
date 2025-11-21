import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import img1 from './assets/in.png'; 
import Detail from './Detail';

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
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'AED', name: 'United Arab Emirates Dirham' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'QAR', name: 'Qatari Rial' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound Sterling' },
    { code: 'MYR', name: 'Malaysian Ringgit' },
    { code: 'USD', name: 'United States Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'THB', name: 'Thai Baht' }
  ];

  return (
    <>
    <div className='header-top container-fluid'>
      <div className="detail d-flex justify-content-end gap-3 ">
        <div>Help |</div>

        {/* Currency Tooltip */}
        <div
          className="tooltip-container"
          onMouseEnter={() => setShowCurrencyTooltip(true)}
          onMouseLeave={() => setShowCurrencyTooltip(false)}
        >
          Currency - <span style={{ fontWeight: 'bold' }}>{selectedCurrency}</span> |
          {showCurrencyTooltip && (
            <div className="tooltip-single-box1">
              {currencies.map((cur) => (
                <div
                  key={cur.code}
                  className="currency-item"
                  onClick={() => setSelectedCurrency(cur.code)}
                >
                  {cur.code} - {cur.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div>Corporate Gifts |</div>

        {/* Partner With Us Tooltip */}
        <div
          className="tooltip-container"
          onMouseEnter={() => setShowPartnerTooltip(true)}
          onMouseLeave={() => setShowPartnerTooltip(false)}
        >
          Partner With Us |
          {showPartnerTooltip && (
    <div className="tooltip-single-box">
      <div
        onClick={() => {
          navigate('/vendor');
          setShowPartnerTooltip(false); // hide tooltip after navigation
        }}
      >
        Become a Vendor
      </div>
      <div
        onClick={() => {
          navigate('/franchise');
          setShowPartnerTooltip(false);
        }}
      >
        Become a Franchise
        </div>
        </div>
          )}
          </div>
          
        <div className="me-5">Track Order</div>
      </div>

      <div className="header-second d-flex flex-wrap align-items-center">
        <div className="logo">
          <img src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png" alt="winni" style={{ height: "34px",
             marginTop: "33px", width: "144px", marginLeft: "30px",cursor:"pointer" }} 
             onClick={()=>window.location.href="/"}/>
        </div>
        {/* SearchBox */}
 <div className="d-flex flex-column flex-md-row align-items-center justify-content-between col-12 col-md-4 ms-5 mt-3">
  
  <div className="search-bar flex-grow-1 me-md-3 w-100 w-md-50">
    <input
      className="text"
      type="text"
      placeholder="Search 5000+ flowers, cakes, gifts etc"
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}
    />
    <i className="fi fi-br-search"></i>

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
    <div
  className="location-box w-md-35 mt-4 mt-md-0 ms-md-auto d-flex align-items-center justify-content-between"
  onClick={() => setShowPopup(true)}
>
    <img src={img1} alt="India Flag" className="flag" />
    <span className="country-code">IND</span>
    <div className="vertical-line"></div>
    <i className="fa-solid fa-location-dot ms-2"></i>
    <span className="choose-text ms-2">Choose Delivery Location</span>
    <i className="fa-solid fa-pen pencil"></i>
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
          
            <div className="icons-right ms-5">
          <div
            className="icon-user"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <i className="fi fi-ss-user"></i>
    
            {showTooltip && (
              <div className="tooltip-user-box">
                <h4>Welcome</h4>
                <p className="order">To access account and manage orders</p>
                <button className="btn btn-outline-dark px-0 py-0">Signup/Login</button>
                <p className="show">My Winni<br/>
                    My Orders<br/>
                    My Address Book<br/>
                    My Wallet<br/>
                   </p>
              </div>
            )}
            </div>
          <div className="icon-heart me-5"
           onMouseEnter={() => setShowWishlist(true)}
      onMouseLeave={() => setShowWishlist(false)}
      onClick={() => navigate('/wishlist')}>
    
            <i className="fi fi-ss-heart">
    
            </i>
           {showWishlist && (
        <div className="tooltip-wishlist">
          Wishlist
        </div>
      )}
          </div>
          <div className="icon2"
          onMouseEnter={() => setShowCart(true)}
                onMouseLeave={() => setShowCart(false)}
                onClick={() => navigate("/cart")}>
            <i className="fi fi-ss-shopping-cart"></i>
            {showCart && <div className="tooltip-cart">Cart</div>}
              </div>
        </div>
      </div>
      </div>
      <Detail/>
    </>
  );
}
