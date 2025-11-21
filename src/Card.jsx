import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { Link } from 'react-router-dom';

import img from "./assets/photo-cake.avif";
import img1 from "./assets/pinata-cake.avif";
import img2 from "./assets/truffle-cake.avif";
import img3 from "./assets/kids-cake.avif";
import { Button } from 'react-bootstrap';

export default function Card() {
  return (
    <>
      <div className='cake text-center mt-5'>
  <h2 className='fw-bold'>Cakes</h2>
  <h3 className='fw-normal'>Dreamy cakes for every occasion</h3>

  {/* View Button */}
  <Link to="/cakes">
    <Button variant="primary" className="mt-3">
      View All
    </Button>
  </Link>
</div>

      <div className="container mx-2 mx-sm-4 mx-md-5">
        <div className="row justify-content-center g-3">

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Link to="/photo-cakes" className="text-decoration-none">
              <div className="card cake-card border border-1 rounded-lg">
                <img src={img} alt="Photo Cakes" className="cake-img"/>
                <div className="card-body">
                  <h6 className="card-title text-center fs-6 fw-bold">Photo Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 13.22</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Link to="/pinata-cakes" className="text-decoration-none">
              <div className="card cake-card border border-1 rounded-lg">
                <img src={img1} alt="Pinata Cakes" className="cake-img"/>
                <div className="card-body">
                  <h6 className="card-title text-center fs-6 fw-bold">Pinata Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 20.50</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Link to="/pull-me-up-cakes" className="text-decoration-none">
              <div className="card cake-card border border-1 rounded-lg">
                <img src={img2} alt="Pull Me Up Cakes" className="cake-img"/>
                <div className="card-body">
                  <h6 className="card-title text-center fs-6 fw-bold">Pull Me Up Cakes</h6>
                  <p className="card-text text-center">Starting From SGD 22.77</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <Link to="/kids-cakes" className="text-decoration-none">
              <div className="card cake-card border border-1 rounded-lg">
                <img src={img3} alt="Kids Cakes" className="cake-img"/>
                <div className="card-body">
                  <h6 className="card-title text-center fs-6 fw-bold">Kids Cakes</h6>
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
