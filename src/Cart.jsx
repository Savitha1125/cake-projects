import React from "react";
import image from "./assets/images/main-image-without-button-new.avif";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./cart.css";
import Footer from "./Footer";
import Help from "./Help"

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const handleContinueShopping = () => {
    navigate("/");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
    
      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="container py-2 d-flex justify-content-center">
          <div className="position-relative w-50 mb-5">
            <img src={image} alt="Cart Empty" className="img-fluid cart-empty" />

            <button
              className="continue-shopping-btn position-absolute top-50 start-50 translate-middle"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="container py-3 text-center logo">
        <img src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png" 
        alt="Winni Logo" className="logo-img" />
      
        <div className="container py-3">
  <p className="fw-bold cart">Shopping Cart({cartItems.reduce((total, item) => total + (item.qty || 1), 0)})</p>
  
  {cartItems.map((item) => (
  <div key={item.id} className="cart-item d-flex align-items-start">
    <img src={item.image} alt={item.name} className="item-img" />
    <div className="item-info">
      <h5>{item.name}</h5>
      <p className="ms-5 weight">Weight: {item.weight}</p>
      <p>Price: SGD {item.price}</p>
      <div className="qty-controls">
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="btn btn-danger btn-sm"
      >
        Remove
      </button>
    </div>
  </div>
))}


  {/* Total Price and Checkout */}
  <div className="total-price mt-4">
    <h4>Total Amount: SGD {totalPrice.toFixed(2)}</h4>
    <button className="btn btn-success">
      Continue To Checkout
    </button>
  </div>
</div>
</div>
)}
<Footer/>
<Help/>
    </>
  );
}
