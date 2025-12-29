import React from "react";
import { useWishlist } from "./WishlistContext";
import { Navigate } from "react-router-dom";
import imageData from "./images.json";
import Footer from "./Footer";
import Help from "./Help";
import "./wishlist.css";
import emptyImg from "./assets/your-wish-list-img.avif";
import choco from "./assets/images/choco.jpeg";
import butterscotch from "./assets/butterscotch.jpg";
import blackforest from "./assets/blackforest.webp";
import pineapple from "./assets/pineapple.jpg";
import vennila from "./assets/vennila.webp";
import plum from "./assets/images/plum.webp";
import rasamalai from "./assets/images/rasamalai.avif";
import buttercake from "./assets/images/delicious-butter.avif";
import fruitcake from "./assets/images/fruit-nut.webp";
import { AiFillHeart } from "react-icons/ai";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const imagesMap = { choco, butterscotch, blackforest, pineapple, vennila, plum, rasamalai, buttercake, fruitcake };

  const wishlistItems = wishlist
    .map((key) => {
      const img = imageData.find((item) => item.key === key);
      return img ? { ...img, url: imagesMap[img.key] } : null;
    })
    .filter(Boolean);

  const descendingItems = [...wishlistItems].reverse();

  if (descendingItems.length === 0) {
    return (
      <>
        <div className="empty-wishlist-container">
          <img src={emptyImg} alt="Empty Wishlist" className="empty" />
        </div>
        <Footer />
        <Help />
      </>
    );
  }

  return (
    <>
      <div className="container-fluid py-4">
        <h3 className="text-center mb-4">My Wishlist</h3>
        <div className="row">
          {descendingItems.map((item) => (
            <div key={item.key} className="col-12 col-sm-6 col-md-3 mb-4">
              <div className="wishlist-card">
                <div className="wishlist-img-card">
                  <img src={item.url} alt={item.alt} />
                  <button
                    className="heart-btn"
                    onClick={() => toggleWishlist(item.key)}
                  >
                    <AiFillHeart
                      size={24}
                      color={wishlist.includes(item.key) ? "red" : "#ccc"}
                    />
                  </button>
                </div>
                <div className="cake-body">
                  <p className="cake-name">{item.alt}</p>
                  <div className="price-row">
                    <span className="new-price">SGD 7.62</span>
                    <span className="old-price">SGD 11.22</span>
                    <span className="off">32% Off</span>
                    <span className="rating">4.7 ★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Help />
    </>
  );
}
