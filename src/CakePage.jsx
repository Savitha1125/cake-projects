import React from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function CakePage() {
  const navigate = useNavigate();

  
  return (
    <Container>
      <h2 className="my-3">Our Cakes</h2>
      <div className="cake-grid">

      </div>
    </Container>
  );
}
