import React from "react";
import { useWishlist } from "./WishlistContext";
import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import Help from "./Help";
import "./wishlist.css";
import emptyImg from "./assets/your-wish-list-img.avif";
import { AiFillHeart } from "react-icons/ai";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  const descendingItems = [...wishlist].reverse();

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="empty-wishlist-container">
        <img src={emptyImg} alt="Empty Wishlist" className="empty" />
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid py-4">
        <h3 className="text-center my-wishlist">My Wishlist({wishlist.length})</h3>
        <div className="container-fluid wishlist-container">
  <div className="row g-4">
    {descendingItems.map((item) => (
      <div key={item.id} className="col-12 col-sm-6 col-md-3">
        <div className="wishlist-card mt-5">
          <div className="wishlist-img-card">
            <img src={item.image} alt={item.name} className="w-100" />
            <button className="heart-btn" onClick={() => toggleWishlist(item)}>
              <AiFillHeart size={24} color="red" />
            </button>
          </div>
          <div className="cake-body">
            <p className="cake-name">{item.name}</p>
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
    </div>

      <Footer />
      <Help />
    </>
  );
}
