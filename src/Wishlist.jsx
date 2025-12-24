import React from "react";
import { useWishlist } from "./WishlistContext";
import { Navigate } from "react-router-dom";
import imageData from "./images.json";

import choco from "./assets/images/choco.jpeg";
import butterscotch from "./assets/butterscotch.jpg";
import blackforest from "./assets/blackforest.webp";
import pineapple from "./assets/pineapple.jpg";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const imagesMap = { choco, butterscotch, blackforest, pineapple };

  const wishlistItems = imageData
    .filter((img) => wishlist.includes(img.key))
    .map((img) => ({
      ...img,
      url: imagesMap[img.key],
    }));

  return (
    <div className="container py-4">
      <h3>My Wishlist</h3>

      {wishlistItems.length === 0 && <p>Your wishlist is empty</p>}

      <div className="row g-3">
        {wishlistItems.map((item) => (
          <div key={item.key} className="col-6 col-md-3">
            <div className="card p-2 text-center">
              <img
                src={item.url}
                alt={item.alt}
                style={{ height: "120px", objectFit: "cover" }}
              />
              <p>{item.alt}</p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => toggleWishlist(item.key)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
