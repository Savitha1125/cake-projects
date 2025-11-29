import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import img from "./assets/images/flowers-first-image.jpg" ;
import img1 from "./assets/images/basket-arrangement.avif";
import img2 from "./assets/images/premium-flowers.webp";
import img3 from "./assets/images/lillies.webp";
import img4 from "./assets/images/banner-images.webp";

export default function Flower() {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/visit-page");  
  };
  return (
    <>
      {/* Heading */}
      <div className='cake text-center mt-5'>
        <h2 className='fw-bold'>Flowers</h2>
        <h3 className='fw-normal'>Petals of Happiness</h3>
        {/* View All Button */}
        <Link to="/flowers" className='text-decoration-none text-dark float-end mb-5'
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
                  <h6 className="card-title text-center fw-bold">Roses</h6>
                  <p className="card-text text-center">Starting From SGD 7.29</p>
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
                  <h6 className="card-title text-center fw-bold">Basket Arrangements</h6>
                  <p className="card-text text-center">Starting From SGD 15.32</p>
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
                  <h6 className="card-title text-center fw-bold">Premium Flowers</h6>
                  <p className="card-text text-center">Starting From SGD 12.40</p>
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
                  <h6 className="card-title text-center fw-bold">Lilies</h6>
                  <p className="card-text text-center">Starting From SGD 15.32</p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      <div className='container mt-5'>
        <img
          src={img4}
          className="cash"
          alt="Cash"
          onClick={handleClick}
          style={{
          cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}
