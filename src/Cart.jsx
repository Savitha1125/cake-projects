import React from "react";
import image from "./assets/images/main-image-without-button-new.avif";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./cart.css";
import Footer from "./Footer";
import Help from "./Help";

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
        <div className="container py-3">
          {/* LOGO */}
          <div className="text-center mb-3 logo">
            <img
              src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
              alt="Winni Logo"
              className="logo-img"
            />
          </div>

          <p className="fw-bold cart-title">
            Shopping Cart (
            {cartItems.reduce((t, i) => t + (i.qty || 1), 0)})
          </p>

          {/* MAIN LAYOUT */}
          <div className="cart-layout">
            {/* LEFT – ITEMS */}
            <div className="cart-left">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-img"
                  />

                  <div className="item-info">
                    <h5>{item.name}</h5>
                    <p>Weight: {item.weight}</p>
                    <p>Price: SGD {item.price}</p>

                    <div className="qty-controls">
                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT – SUMMARY */}
            <div className="cart-right">
              <h4>Total Amount</h4>
              <h3>SGD {totalPrice.toFixed(2)}</h3>
              <button className="checkout-btn">
                Continue To Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer className="footer-section "/>
      <Help />
    </>
  );
}
