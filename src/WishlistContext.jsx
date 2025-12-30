import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const addToWishlist = (cake) => {
    setWishlist((prev) => {
      const updated = [...prev, cake];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleWishlist = (cake) => {
    const exists = wishlist.some((item) => item.id === cake.id);
    if (exists) removeFromWishlist(cake.id);
    else addToWishlist(cake);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);