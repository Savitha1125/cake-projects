import React from 'react';
import image from "./assets/images/main-image-without-button-new.avif";
import Product from "./Product";
import Footer from "./Footer";
import Help from "./Help";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");  
  };
  return (
      <>
     <div className="container py-2 d-flex justify-content-center">
      <div className="position-relative w-50 mb-5">
        <img src={image} alt="Cart" className="img-fluid" />
        <button 
          className="position-absolute top-50 start-50 translate-middle"
          onClick={handleContinueShopping}
          style={{
            backgroundColor: " rgb(236, 89, 155)",
            color: "white",
            border: "none",
            padding: "3px 20px",
            borderRadius: "18px",
            cursor: "pointer",
            marginTop:"60px",
            fontSize:"14px",
            marginLeft:"14px"
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
<Product/>
<Footer/>
<Help/>
    </>
  );
}
