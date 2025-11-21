import React, { useState, useEffect } from "react";
import "./detailpage.css";

export default function Detail() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [visible, setVisible] = useState(true); // visible by default
  const [lastScrollY, setLastScrollY] = useState(0);

  // Listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="container-fluid detailpage">
      <div className="menu-row">
        <div className="menu-left">
          <div className="menu-items active">EXPRESS</div>

          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("cakes")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            CAKES
          {activeMenu === "cakes" && (
  <div className="mega-menu">

    {/* Cakes By Type */}
    <div className="menu-column">
      <h4>Cakes By Type</h4>
      <p className="menu-separator egg">Eggless Cakes</p>
      <p>Midnight Cakes</p>
    </div>

    {/* Cakes By Flavour */}
    <div className="menu-column">
      <h4 className="yellow-strip">Cakes By Flavour</h4>
      <p className="menu-separator choco">Chocolate Cakes</p>
      <p className="truffle ms-2">Truffle Cakes</p>
    </div>

    {/* Cakes By Theme */}
    <div className="menu-column">
      <h4 className="yellow-strip">Cakes By Theme</h4>
      <p className="menu-separator kids">Kids Cakes</p>
      <p>Unicorn Cakes</p>
    </div>

    {/* Cakes By Occasion */}
    <div className="menu-column">
      <h4 className="yellow-strip">Cakes By Occasion</h4>
      <p className="birth ms-1 menu-separator">Birthday Cakes</p>
      <p>Anniversary Cakes</p>
      
      <div className="sub-section">
      <h4>Cake Combos</h4>
      <p className="menu-separator">Cake Combos</p>
      <p>Cakes And Flowers</p>
    </div>
    </div>

    {/* Top Trending Links */}
    <div className="menu-column-1">
      <h4 className="menu-left">Top Trending Links</h4>
      <p className="menu-separator">Pinata Cakes</p>
      <p>Pull Me Up Cakes</p>
     <div className="sub-section">
      <h4>All Cakes</h4>
      <h4>Best Seller Cakes</h4>
    </div>
    </div>
  </div>
)}
          </div>
          <div className="menu-item">FLOWERS</div>
          <div className="menu-item">PLANTS</div>
          <div className="menu-item">GIFTS</div>
          <div className="menu-item">PERSONALIZED GIFTS</div>
          <div className="menu-item">CHOCOLATES</div>
          <div className="menu-item">COMBOS</div>
          <div className="menu-item">BIRTHDAY</div>
          <div className="menu-item">ANNIVERSARY</div>
          <div className="menu-item">OCCASSIONS</div>
        </div>

        <div className="delivery-container">
          <i className="fi fi-rr-motorcycle scooty"></i>
          <span className="delivery-text">2 Hour Delivery Gifts</span>
        </div>
      </div>
    </div>
  );
}
