import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";   // ✅ IMPORTANT
import imageData from "./images.json";

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

  const { addToCart } = useCart(); // ✅ HERE

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

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={imagesMap[cake.key]}
            alt={cake.alt}
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2>{cake.alt}</h2>
          <p>Delicious fresh cake 🎂</p>

          <h4>
            SGD 7.62{" "}
            <span style={{ textDecoration: "line-through" }}>11.22</span>
          </h4>
          <p>⭐ 4.7 (683 Reviews)</p>

          <button
            className="btn btn-danger"
            onClick={() => addToCart(cake)}   // ✅ WORKS NOW
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
