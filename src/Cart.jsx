import React from 'react';
import image from "./assets/images/main-image-without-button-new.avif";
import Product from "./Product"

export default function Cart() {
  return (
      <>
     <div className="container py-5 d-flex justify-content-center">
      <div className="position-relative w-50 mb-5">
        <img src={image} alt="Cart" className="img-fluid" />
        <button 
          className="position-absolute top-50 start-50 translate-middle"
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
    </>
  );
}
