import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  const [address, setAddress] = useState(null);
  const [form, setForm] = useState({
    country: "",
    name: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    mobile: "",
    altMobile: "",
    addressType: "Home",
  });

  const [errors, setErrors] = useState({});

  // Prefill mobile number from login
 useEffect(() => {
    const savedAddress = localStorage.getItem("deliveryAddress");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.country) newErrors.country = "Country is required";
    if (!form.name) newErrors.name = "Name is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.pincode) newErrors.pincode = "Pin code is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.mobile) newErrors.mobile = "Mobile number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem("deliveryAddress", JSON.stringify(form));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Form submitted successfully!");
    navigate("/order-review"); 
  };

  // Default Price Details
  const mrpTotal = 59.73;
  const mrpDiscount = 9.01;
  const deliveryCharge = 0.00;
  const convenienceCharge = 0.13;
  const totalAmount = mrpTotal - mrpDiscount + deliveryCharge + convenienceCharge;

  return (
    <div className="checkout-page">
      {/* Left Side: Delivery Form */}
      <div className="checkout-left">
        <div className="mb-3 logo">
          <img
            src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
            alt="Winni Logo"
            className="logo-img"
            onClick={() => window.location.href = "/"}
          />
        </div>

        <div className="checkout-container border p-5">
          <h3>Delivery Address</h3>

          <form onSubmit={handleSubmit} className="checkout-form">

            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}                 // shows logged-in number
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}  // lets user type
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}


            <label>Select Country *</label>
            <select name="country" value={form.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option> 
              <option value="Singapore">Singapore</option> 
              <option value="Germany">Germany</option> 
              <option value="France">France</option> 
              <option value="Japan">Japan</option> 
              <option value="China">China</option> 
              <option value="Brazil">Brazil</option>
            </select>
            {errors.country && <span className="error">{errors.country}</span>}

            <label>Recipient Name *</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}

            <label>Recipient Address *</label>
            <textarea name="address" value={form.address} onChange={handleChange} />
            {errors.address && <span className="error">{errors.address}</span>}

            <label>Pin Code *</label>
            <input type="text" name="pincode" value={form.pincode} onChange={handleChange} />
            {errors.pincode && <span className="error">{errors.pincode}</span>}

            <label>City *</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} />
            {errors.city && <span className="error">{errors.city}</span>}

            <div className="actions">
              <button type="button" className="cancel" onClick={() => navigate("/cart")}>
                Cancel
              </button>
              <button type="submit" className="save">Save & Continue</button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Order Summary */}
      <div className="checkout-right">
        <h3>Order Summary</h3>

        <div className="price-details-box">
          <h4>Price Details (3 Items)</h4>

          <div className="price-row">
            <span>MRP Total</span>
            <span>SGD {mrpTotal.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>MRP Discount</span>
            <span>- SGD {mrpDiscount.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Delivery Charge</span>
            <span>{deliveryCharge === 0 ? "FREE" : `SGD ${deliveryCharge.toFixed(2)}`}</span>
          </div>
          <div className="price-row">
            <span>Convenience Charge</span>
            <span>SGD {convenienceCharge.toFixed(2)}</span>
          </div>

          <hr />
          <div className="price-row total">
            <strong>Total Amount</strong>
            <strong>SGD {totalAmount.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
