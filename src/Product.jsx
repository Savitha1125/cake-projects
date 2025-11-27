import React from "react";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";  // <-- import useNavigate
import img1 from "./assets/cake.webp";
import img2 from "./assets/flowers.avif";
import img3 from "./assets/combos.webp";
import img4 from "./assets/plants.avif";
import img5 from "./assets/chocolates.webp";
import img6 from "./assets/gifts.avif";
import img7 from "./assets/personalised.avif";
import img8 from "./assets/global.webp";
import './product.css';

export default function Product() {
  const navigate = useNavigate();  

  const images = [
  { src: img1, name: "Cakes", link: "/cakes" },
  { src: img2, name: "Flowers", link: "/flowers" },
  { src: img3, name: "Combos", link: "/combos" },
  { src: img4, name: "Plants", link: "/plants" },
  { src: img5, name: "Chocolates", link: "/chocolates" },
  { src: img6, name: "Gifts", link: "/gifts" },
  { src: img7, name: "Personalized", link: "/personalized" },
  { src: img8, name: "Global", link: "/global" },
];


  return (
    <div>
  <div className="product-section">
    <Container>
      <div className="product-inline">
        {images.map((item, index) => (
          <div
            key={index}
            className="product-item"
            onClick={() => item.link && navigate(item.link)}
            style={{ cursor: item.link ? "pointer" : "default" }}
          >
            <Image src={item.src} alt={item.name} className="product-img" />
            <p className="mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
</div>

  );
}