import React from "react";
import { useParams } from "react-router-dom";
import imageData from "./images.json";
import choco from "./assets/images/choco.jpeg";
import butterscotch from "./assets/butterscotch.jpg";
import blackforest from "./assets/blackforest.webp";
import pineapple from "./assets/pineapple.jpg";

const imagesMap = { choco, butterscotch, blackforest, pineapple };

export default function CakeDetail() {
  const { key } = useParams();
  const cake = imageData.find((img) => img.key === key);

  if (!cake) return <div>Cake not found!</div>;

  return (
    <div className="container py-5">
      <h2>{cake.alt}</h2>
      <img src={imagesMap[cake.key]} alt={cake.alt} className="img-fluid mb-3" />
      <p>Starting Price: SGD 7.62</p>
      <p>More details about {cake.alt}...</p>
    </div>
  );
}
