import React, { useEffect, useState } from "react";
import "./order-review.css";
import { useNavigate } from "react-router-dom";

export default function OrderReview() {
  const navigate = useNavigate(); 
  const [delivery, setDelivery] = useState(null);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    const savedDelivery = localStorage.getItem("deliveryAddress");
    if (savedDelivery) setDelivery(JSON.parse(savedDelivery));

    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  if (!delivery) return <p>No delivery info found.</p>;

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="review-page">
      {/* LOGO */}
      <div className="logo">
        <img
          src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
          alt="Winni Logo"
          className="logo-img"
        />
      </div>

      {/* LEFT – CART ITEMS */}
      <div className="review-cart">
        <h3 className="shp-cart">Shopping Cart</h3>

        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div key={item.id} className="review-cart-item">
            <img src={item.image} alt={item.name} />

            <div className="review-cart-info">
              <p className="review-item-name">{item.name}</p>
              <p className="review-item-delivery">Estimated Delivery: Today</p>

              <button
                className="review-remove-btn"
                onClick={() => {
                  setSelectedItemId(item.id);
                  setShowPopup(true);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT – ADDRESS + PRICE */}
      <div className="review-summary">
        <div className="review-address-box">
          <h4>Delivery Address</h4>
          <p><strong>{delivery.name}</strong></p>
          <p>{delivery.address}</p>
          <p>{delivery.city} - {delivery.pincode}</p>
          <p>Mobile: {delivery.mobile}</p>
        </div>

        <div className="review-price-box">
          <h4>Price Details</h4>
          <div className="review-price-row">
            <span>MRP Total</span>
            <span>SGD 59.73</span>
          </div>
          <div className="review-price-row">
            <span>Discount</span>
            <span>- SGD 9.01</span>
          </div>
          <div className="review-price-row">
            <span>Delivery</span>
            <span>FREE</span>
          </div>
          <div className="review-price-row total">
            <strong>Total</strong>
            <strong>SGD 50.85</strong>
          </div>
        </div>

        <button
          className="review-continue-btn"
          onClick={() => navigate("/personalize")}
        >
          Continue
        </button>
      </div>

      {/* REMOVE CONFIRM POPUP */}
      {showPopup && (
        <div className="review-popup-overlay">
          <div className="review-popup-content">
            <p>Are you sure you want to remove this item?</p>
            <div className="review-popup-actions">
              <button
                className="btn btn-danger"
                onClick={() => {
                  removeFromCart(selectedItemId);
                  setShowPopup(false);
                }}
              >
                Yes, Remove
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
