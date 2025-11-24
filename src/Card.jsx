import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { Link } from 'react-router-dom';

import img from "./assets/photo-cake.avif";
import img1 from "./assets/pinata-cake.avif";
import img2 from "./assets/truffle-cake.avif";
import img3 from "./assets/kids-cake.avif";

export default function Card() {
  return (
    <>
      {/* Heading */}
      <div className='cake text-center mt-5'>
        <h2 className='fw-bold'>Cakes</h2>
        <h3 className='fw-normal'>Dreamy cakes for every occasion</h3>
        {/* View All Button */}
        <Link to="/cakes" className='text-decoration-none text-dark float-end mb-5'
          style={{
          position: "absolute",
          right: "60px",
          transform: "translateY(-80%)",
        }}>
         <h5 style={{ backgroundColor: "#e1e0e0ff",fontWeight:"bold",height:"40px",padding:"7px"}}>VIEW ALL</h5>
        </Link>
      </div>

      {/* Card Section */}
      <div className="container mt-4">
        <div className="row justify-content-center g-4">

          {/* Card 1 */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xl-3 px-md-4 px-lg-3">
            <Link to="/photo-cakes" className="text-decoration-none">
              <div className="card cake-card">
                <img src={img} alt="Photo Cakes" className="cake-img img-fluid mx-auto d-block" />
                <div className="card-body">
                  <h6 className="card-title text-center fw-bold">Photo Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 13.22</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xl-3 px-md-4 px-lg-3">
            <Link to="/pinata-cakes" className="text-decoration-none">
              <div className="card cake-card">
                <img src={img1} alt="Pinata Cakes" className="cake-img img-fluid mx-auto d-block" />
                <div className="card-body">
                  <h6 className="card-title text-center fw-bold">Pinata Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 20.50</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xl-3 px-md-4 px-lg-3">
            <Link to="/pull-me-up-cakes" className="text-decoration-none">
              <div className="card cake-card">
                <img src={img2} alt="Pull Me Up Cakes" className="cake-img img-fluid mx-auto d-block" />
                <div className="card-body">
                  <h6 className="card-title text-center fw-bold">Pull Me Up Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 22.77</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xl-3 px-md-4 px-lg-3">
            <Link to="/kids-cakes" className="text-decoration-none">
              <div className="card cake-card">
                <img src={img3} alt="Kids Cakes" className="cake-img img-fluid mx-auto d-block" />
                <div className="card-body">
                  <h6 className="card-title text-center fw-bold">Kids Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 11.01</p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
