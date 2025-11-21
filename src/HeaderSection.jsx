import React from "react";
import SearchBar from "./SearchBar";
import Location from "./Location";

export default function Header() {
  return (
    <header className="container-fluid py-2 bg-white">
      <div className="row align-items-center">
        {/* Logo */}
        <div className="col-12 col-md-3 text-center text-md-start mb-2 mb-md-0">
          <img
            src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
            alt="winni"
            className="img-fluid"
            style={{ maxHeight: "50px", cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          />
        </div>

        {/* Search Bar */}
        <div className="col-12 col-md-5 mb-2 mb-md-0">
          <SearchBar />
        </div>

        {/* Location + Icons */}
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
          <Location />
        </div>
      </div>
    </header>
  );
}
y