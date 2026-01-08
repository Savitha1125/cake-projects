import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { Link } from "react-router-dom";

import img from "./assets/images/flowers-first-image.jpg" ; 
import img1 from "./assets/images/basket-arrangement.avif"; 
import img2 from "./assets/images/premium-flowers.webp"; 
import img3 from "./assets/images/lillies.webp";
import img4 from "./assets/images/banner-images.webp";

export default function Card() {
  return (
    <>
    <div className="container-fluid px-5 mt-5">

      {/* HEADING */}
      <div className="position-relative text-center mb-4">
        <h2 className="fw-bold">Flowers</h2>
        <h5 className="fw-normal dreamy">Petals of Happiness</h5>

        {/* View All Button */} 
        <Link to="/cakes" className='text-decoration-none text-dark float-end mb-5 button' 
        style={{ position: "absolute", right: "3px", transform: "translateY(-80%)", }}> 
        <h5 style={{ backgroundColor: "#e1e0e0ff",fontWeight:"bold",height:"40px",
        padding:"7px",borderRadius:"5px"}}>
        VIEW ALL</h5> 
        </Link> </div>
      {/* CARDS: FLEX ROW */}
      <div className="card-row ms-3">

        <div className="card card-custom">
          <img src={img} className="card-img-top" alt="Photo Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Roses</h6>
            <p className="text-muted mb-0">Starting From SGD 7.09</p>
          </div>
        </div>

        <div className="card card-custom">
          <img src={img1} className="card-img-top" alt="Pinata Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Basket  Arrangements</h6>
            <p className="text-muted mb-0">Starting From SGD 14.90</p>
          </div>
        </div>

        <div className="card card-custom">
          <img src={img2} className="card-img-top" alt="Pull Me Up Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Premium Flowers</h6>
            <p className="text-muted mb-0">Starting From SGD 12.06</p>
          </div>
        </div>

        <div className="card card-custom">
          <img src={img3} className="card-img-top" alt="Kids Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Lilies</h6>
            <p className="text-muted mb-0">Starting From SGD 14.90</p>
          </div>
        </div>

      </div>
    </div>
     {/* Banner */}
      <div className="container mt-5">
        <img
          src={img4}
          alt="Banner"
          className="img-fluid"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/visit-page")}
        />
      </div>
  </>
  );
}