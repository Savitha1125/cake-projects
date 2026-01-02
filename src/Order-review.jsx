import React, { useEffect, useState } from "react";

export default function OrderReview() {
  const [delivery, setDelivery] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedDelivery = localStorage.getItem("deliveryAddress");
    if (savedDelivery) setDelivery(JSON.parse(savedDelivery));

    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  if (!delivery) return <p>No delivery info found.</p>;

  // Calculate totals
  const mrpTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const mrpDiscount = 9.01;
  const deliveryCharge = 0;
  const convenienceCharge = 0.13;
  const totalAmount = mrpTotal - mrpDiscount + deliveryCharge + convenienceCharge;

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      {/* Left: Delivery Details */}
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "1rem" }}>
        <h3>Delivery Details</h3>
        <p><strong>Mobile:</strong> {delivery.mobile}</p>
        <p><strong>Name:</strong> {delivery.name}</p>
        <p><strong>Address:</strong> {delivery.address}</p>
        <p><strong>City:</strong> {delivery.city}</p>
        <p><strong>Pincode:</strong> {delivery.pincode}</p>
        <p><strong>Country:</strong> {delivery.country}</p>
      </div>

      {/* Right: Order Summary */}
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "1rem" }}>
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} style={{ display: "flex", marginBottom: "1rem" }}>
            <img
              src={item.image || "/images/placeholder.png"} // fallback image
              alt={item.name}
              style={{ width: "80px", marginRight: "1rem" }}
            />
            <div>
              <p>{item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>Price: SGD {item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}

        <hr />
        <p>MRP Total: SGD {mrpTotal.toFixed(2)}</p>
        <p>MRP Discount: - SGD {mrpDiscount.toFixed(2)}</p>
        <p>Delivery Charge: {deliveryCharge === 0 ? "FREE" : `SGD ${deliveryCharge.toFixed(2)}`}</p>
        <p>Convenience Charge: SGD {convenienceCharge.toFixed(2)}</p>
        <hr />
        <p><strong>Total Amount: SGD {totalAmount.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
