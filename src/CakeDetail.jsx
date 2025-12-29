import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // Your cart context
import imageData from "./images.json";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./cakedetail.css";

// Import cake images
import choco from "./assets/images/choco.jpeg";
import butterscotch from "./assets/butterscotch.jpg";
import blackforest from "./assets/blackforest.webp";
import pineapple from "./assets/pineapple.jpg";
import vennila from "./assets/vennila.webp";
import plum from "./assets/plum.webp";
import rasamalai from "./assets/images/rasamalai.avif";
import buttercake from "./assets/images/delicious-butter.avif";
import fruitcake from "./assets/images/fruit-nut.webp";

export default function CakeDetails() {
  const { key } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [liked, setLiked] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [activeWeight, setActiveWeight] = useState("500 gm");
  const [message, setMessage] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");

  const weights = ["500 gm", "1 kg", "1.5 kg", "2 kg", "3 kg", "4 kg"];

  const imagesMap = {
    choco,
    butterscotch,
    blackforest,
    pineapple,
    vennila,
    plum,
    rasamalai,
    buttercake,
    fruitcake,
  };

  const cake = imageData.find((item) => item.key === key);
  if (!cake) return <h3>Cake not found</h3>;

  const handlePincodeCheck = () => {
    if (!pincode) {
      setError("Please enter pincode");
    } else if (!/^[0-9]{6}$/.test(pincode)) {
      setError("Please enter valid 6 digit pincode");
    } else {
      setError("");
      alert("Delivery available 🎉");
    }
  };

  const handleWishlistClick = () => {
    if (liked) {
      setWishlist(wishlist.filter((item) => item.key !== cake.key));
    } else {
      setWishlist([...wishlist, cake]);
    }
    setLiked(!liked);
  };

  return (
    <div className="container py-4">
      <div className="row">
        {/* Cake Image */}
        <div className="col-md-6 icon-wrapper">
          <img
            src={imagesMap[cake.key]}
            alt={cake.alt}
            className="img-fluid w-75"
          />
          <span className="badge-seller">Best Seller</span>
        </div>

        {/* Cake Details */}
        <div className="col-md-6">
          <h2>{cake.alt}</h2>
          <span className="rating">4.7 ★</span>
          <small className="review-text">Rating & 683 Review</small>

          {/* Price */}
          <div className="mb-2">
            <span style={{ fontSize: "29px", fontWeight: "bold" }}>SGD 7.62</span>
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: "10px",
                color: "#777",
                fontSize: "13px",
                position: "relative",
                top: "-12px",
              }}
            >
              SGD 11.22
            </span>
            <span
              style={{
                color: "green",
                textDecoration: "none",
                fontSize: "13px",
                position: "relative",
                top: "-12px",
              }}
            >
              32% OFF
            </span>
          </div>

          {/* Weight Selection */}
          <div className="weight-section">
            <span className="label">Weight :</span>
            <span className="serving">Serving Info</span>
            <div className="weight-buttons">
              {weights.map((weight) => (
                <button
                  key={weight}
                  className={activeWeight === weight ? "active" : ""}
                  onClick={() => setActiveWeight(weight)}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="options">
            <label>
              <input type="radio" /> Eggless
            </label>
            <label>
              <input type="radio" /> Heart Shape
            </label>
          </div>

          {/* Message Input */}
          <input
            type="text"
            className="input-box"
            placeholder="Message on cake"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Pincode Check */}
          <div className="pincode-box">
            <input
              type="text"
              placeholder="Enter pincode to check delivery"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <button onClick={handlePincodeCheck}>Check</button>
          </div>
          {error && <p className="pincode-error">{error}</p>}

          {/* Add to Cart & Wishlist */}
          <div className="cart-actions">
            <button className="wishlist" onClick={handleWishlistClick}>
              {liked ? <AiFillHeart size={24} color="red" /> : <AiOutlineHeart size={24} />}
            </button>

            <button
              className="add-cart"
              onClick={() => {
               addToCart({
  id: cake.key,                     // unique id
  name: cake.alt,                  // use alt if JSON doesn't have name
  price: 7.62,                     // your displayed price
  image: imagesMap[cake.key],      // image object
  qty: 1,                          
  weight: "500 gm"                     
});

                navigate("/cart"); 
              }}
            >
              ADD TO CART
            </button>
          </div>
            <h6>Available Offers</h6>
        </div>
      </div>
    </div>
  );
}
