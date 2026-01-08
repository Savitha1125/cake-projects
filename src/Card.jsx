import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { Link } from "react-router-dom";

import img from "./assets/photo-cake.avif";
import img1 from "./assets/pinata-cake.avif";
import img2 from "./assets/truffle-cake.avif";
import img3 from "./assets/kids.avif";

export default function Card() {
  return (
    <div className="container-fluid px-5 mt-5">

      {/* HEADING */}
      <div className="position-relative text-center mb-4">
        <h2 className="fw-bold">Cakes</h2>
        <h5 className="fw-normal dreamy">Dreamy cakes for every occasion</h5>

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
            <h6 className="fw-semibold mb-1">Photo Cakes</h6>
            <p className="text-muted mb-0">Starting From SGD 12.77</p>
          </div>
        </div>

        <div className="card card-custom">
          <img src={img1} className="card-img-top" alt="Pinata Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Pinata Cakes</h6>
            <p className="text-muted mb-0">Starting From SGD 19.87</p>
          </div>
        </div>

        <div className="card card-custom">
          <img src={img2} className="card-img-top" alt="Pull Me Up Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Pull Me Up Cakes</h6>
            <p className="text-muted mb-0">Starting From SGD 22.00</p>
          </div>
        </div>

        <div className="card card-custom">
          <img src={img3} className="card-img-top" alt="Kids Cakes"/>
          <div className="card-body text-center">
            <h6 className="fw-semibold mb-1">Kids Cakes</h6>
            <p className="text-muted mb-0">Starting From SGD 10.64</p>
          </div>
        </div>

      </div>
    </div>
  );
}