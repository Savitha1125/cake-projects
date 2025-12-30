import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "./assets/images/login-side-image.avif"; 
import { FaUser } from "react-icons/fa";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //  Check if already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
    
    }
  }, [navigate]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!emailOrPhone) {
      setErrorMsg("Please enter your email or phone number");
      return;
    }
    if (/^\d+$/.test(emailOrPhone)) {
      if (!phoneRegex.test(emailOrPhone)) {
        setErrorMsg("Please enter a valid 10-digit phone number");
        return;
      }
    } else {
      if (!emailRegex.test(emailOrPhone)) {
        setErrorMsg("Please enter a valid email address");
        return;
      }
    }
    setErrorMsg("");
    setOtpSent(true);
  };

  const handleVerifyOtp = (e) => {
  e.preventDefault();

  if (otp === "1234") {
    localStorage.setItem("isLoggedIn", "true");
    navigate(-1); // 👈 previous page (cakes)
  } else {
    setErrorMsg("Invalid OTP");
  }
};


  return (
    <div className="container mt-5 login-page">
      <div className="row shadow-none border">
        <div className="col-md-6 d-none d-md-block p-0 login-left-image">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="col-md-6 p-4">
          <h2 className="mb-4 text-center fw-bold">Login</h2>
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="shadow-none">
              <div className="mb-3 position-relative">
                <label className="form-label">Email or Phone</label>
                <div className="input-group">
                  <span className="input-group-text"><FaUser /></span>
                  <input
                    type="text"
                    className="form-control no-outline"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="Email ID / Phone Number"
                  />
                </div>
                {errorMsg && <small className="text-danger">{errorMsg}</small>}
              </div>
              <button type="submit" className="btn ctn-btn w-100">CONTINUE</button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="shadow-none">
              <div className="mb-3">
                <label>Enter OTP</label>
                <input
                  type="text"
                  className="form-control no-outline"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
                {errorMsg && <small className="text-danger">{errorMsg}</small>}
              </div>
              <button type="submit" className="btn btn-success w-100">Verify OTP</button>
              <p className="text-center mt-2" style={{ fontSize: "12px", color: "#555" }}>
                By continuing, you agree to winni 
                <span style={{ color: "blue", fontWeight: "bold" }}> Terms of Use </span> 
                and 
                <span style={{ color: "#e10d68", fontWeight: "bold" }}> Privacy Policy</span>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
