import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./personalize.css";

export default function Personalize() {
  const [occasion, setOccasion] = useState("Birthday");
  const [message, setMessage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [sender, setSender] = useState({ name: "", mobile: "" });

  const [errors, setErrors] = useState({}); // track validation errors

  const navigate = useNavigate();

  // Load sender info from localStorage
  useEffect(() => {
    const savedDelivery = localStorage.getItem("deliveryAddress");
    if (savedDelivery) {
      const delivery = JSON.parse(savedDelivery);
      setSender({ name: delivery.name, mobile: delivery.mobile });
    }
  }, []);

  const handlePlaceOrder = () => {
    let tempErrors = {};

    if (!dateTime) tempErrors.dateTime = "Please select delivery date & time.";

    setErrors(tempErrors);

    // if any errors, stop submission
    if (Object.keys(tempErrors).length > 0) return;
     alert(" Successfully Order Placed!");
    // all good → place order
    localStorage.removeItem("cartItems");
    navigate("/");
  };

  return (
    <div className="personalize-container">
      <div className="logo">
        <img
          src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
          alt="Winni Logo"
          className="logo-img"
        />
      </div>

      <div className="personalize-left">
        <h3>Personalize Your Gift</h3>

        <label>Delivery Date and Time</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className={errors.dateTime ? "input-error" : ""}
        />
        {errors.dateTime && <p className="error-text">{errors.dateTime}</p>}

        <label>Occasion</label>
        <div className="occasion-buttons">
          {["Birthday", "Anniversary", "Other"].map((item) => (
            <button
              key={item}
              className={occasion === item ? "active" : ""}
              onClick={() => setOccasion(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <label>Personal Message</label>
        <textarea
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}

        <h4>Sender Information</h4>
        <input
          type="text"
          value={sender.name}
          onChange={(e) => setSender({ ...sender, name: e.target.value })}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <input
          type="text"
          value={sender.mobile}
          onChange={(e) => setSender({ ...sender, mobile: e.target.value })}
          className={errors.mobile ? "input-error" : ""}
        />
        {errors.mobile && <p className="error-text">{errors.mobile}</p>}

        <button className="payment-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

      <div className="personalize-right">
        <h4>Price Details</h4>
        <div className="price-row">
          <span>MRP Total</span>
          <span>SGD 69.44</span>
        </div>
        <div className="discount-row">
          <span>MRP Discount</span>
          <span className="green">- SGD 11.15</span>
        </div>
        <div className="delivery-row">
          <span>Delivery</span>
          <span className="green">FREE</span>
        </div>
        <hr />
        <div className="price-total-row">
          <strong>Total Amount</strong>
          <strong>SGD 58.42</strong>
        </div>
      </div>
    </div>
  );
}
