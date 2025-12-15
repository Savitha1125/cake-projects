import React, { useState } from "react";
import "./Detailpage.css";
import { useNavigate } from "react-router-dom";
import img from "./assets/images/new-arrivals.avif";
import img1 from "./assets/images/premium-cakes.avif";

export default function Detail() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate(); 
  return (
    <div className="container-fluid detailpage">
      <div className="menu-row">
        {/* Left Menu */}
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
                  <p className="menu-separator first-cake egg me-5">Eggless Cakes</p>
                  <p>Midnight Cakes</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>Cakes By Flavour</h4>
                  <p className="menu-separator first-cake choco me-5">Chocolate Cakes</p>
                  <p className="truf">Truffle Cakes</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>Cakes By Theme</h4>
                  <p className="menu-separator first-cake kids">Kids Cakes</p>
                  <p>Unicorn Cakes</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div> 
          {/* Other Menu Items */}
          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("flowers")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            FLOWERS
            {activeMenu === "flowers" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
           <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("plants")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            PLANTS
            {activeMenu === "plants" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
           <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("personal-gifts")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            PERSONALIZED GIFTS
            {activeMenu === "personal-gifts" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
           <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("flowers")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            FLOWERS
            {activeMenu === "flowers" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("chocolates")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            CHOCOLATES
            {activeMenu === "chocolates" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("combos")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            COMBOS
            {activeMenu === "combos" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("birthday")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            BIRTHDAY
            {activeMenu === "birthday" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("anniversary")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            ANNIVERSARY
            {activeMenu === "anniversary" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
          <div
            className="menu-item"
            onMouseEnter={() => setActiveMenu("occasions")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            OCCASIONS
            {activeMenu === "occasions" && (
              <div className="mega-menu">
                
                {/* Cakes By Type */}
                <div className="menu-column">
                  <h4>By Type</h4>
                  <p className="menu-separator first-cake egg me-5">Roses</p>
                  <p>Orchids</p>
                </div>

                {/* Cakes By Flavour */}
                <div className="menu-column">
                  <h4>By Occasion</h4>
                  <p className="menu-separator first-cake choco me-5">Birthday</p>
                  <p className="truf">Anniversary</p>
                </div>

                {/* Cakes By Theme */}
                <div className="menu-column">
                  <h4>By Color</h4>
                  <p className="menu-separator first-cake kids">Red Flowers</p>
                  <p>Pink Flowers</p>
                </div>

                {/* Cakes By Occasion */}
                <div className="menu-column">
                  <h4>Cakes By Occasion</h4>
                  <p className="menu-separator first-cake birth">Birthday Cakes</p>
                  <p>Anniversary Cakes</p>

                  <div className="sub-section">
                    <h4>Cake Combos</h4>
                    <p className="menu-separator first-cake me-5 truffle">Cake Combos</p>
                    <p className="ms-1">Cakes And Flowers</p>
                  </div>
                </div>

                {/* Top Trending Links */}
                <div className="menu-column-1">
                  <h4>Top Trending Links</h4>
                  <p className="menu-separator first-cake me-5 pinata">Pinata Cakes</p>
                  <p className="ms-2">Pull Me Up Cakes</p>

                  <div className="sub-section">
                    <h4>All Cakes</h4>
                    <h4>Best Seller Cakes</h4>
                  </div>
                </div>

                {/* Images */}
                <div className="dropdown-image">
                  <img src={img} alt="cake" className="mb-3 rounded" />
                  <img src={img1} alt="cake" className="d-block rounded" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Delivery Section */}
        <div className="delivery-container">
          <i className="fi fi-rr-motorcycle scooty"></i>
          <span className="delivery-text">2 Hour Delivery Gifts</span>
        </div>
      </div>
    </div>
  );
}
