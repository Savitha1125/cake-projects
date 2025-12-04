import React from 'react'
import './footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedinIn, FaTwitter  } from "react-icons/fa";
import img from "./assets/images/google-play.webp";
import img1 from "./assets/images/app-store.webp";
export default function Footer() {
  return (
    <div>
      <div className="winni-logo mt-5 ms-5 ">
            <img
              src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
              alt="Logo"
            />
      </div>
      <div className="footer">
  {/* Our Company Section */}
  <div className="footer-section">
    <h5 className="com mt-5 ms-5">Our Company</h5>
    <div className="footer-links-container1">
      <ul className='ms-5'>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="/affiliate-program">Affiliate Program</a></li>
        <li><a href="/in-news">In News</a></li>
      </ul>
    </div>
  </div>
<div className="footer-divider"></div>
  {/* Quick Links Section */}
  <div className="footer-section">
    <h5 className="company mt-5">Quick Links</h5>
    <div className="footer-links-container">
      <ul>
        <li><a href="/about-us">Wishes</a></li>
        <li><a href="/careers">Sitemap</a></li>
        <li><a href="/contact-us">Customer Reviews</a></li>
        <li><a href="/affiliate-program">Blog - Celebrate Relations</a></li>
        <li><a href="/in-news">Corporate Order</a></li>
        <li><a href="/in-news">Franchise Enquiry</a></li>
      </ul>
    </div>
  </div>
     <div className="footer-divider"></div>

   <div className="footer-section">
    <h5 className="company mt-5">Policy & Security</h5>
    <div className="footer-links-container">
      <ul>
        <li><a href="/about-us">FAQ</a></li>
        <li><a href="/careers">Refund Policy</a></li>
        <li><a href="/contact-us">Privacy Policy</a></li>
        <li><a href="/affiliate-program">Bug Bounty</a></li>
      </ul>
    </div>
  </div>
  <div className='link'>
 <ul>
  <li><a href="/about-us">Data Security</a></li>
  <li><a href="/careers">Cancellation Policy</a></li>
  <li><a href="/careers">Terms and Conditions</a></li>
  <li><a href="/contact-us">Payments and Security</a></li>
</ul>
</div>
</div>
<div className='social-media-section'>
<div className="social-wrapper">
  <h6 className="connect fw-bold mt-4">Connect With Us</h6>

  <div className="social-icons mb-0">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>

  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>

  <a href="https://x.com/winni_gifts" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>

  <a href="https://wa.me/9444727788" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>
</div>
</div>
   <p className='ms-5 reserve mt-3'>© 2013 - 2025 Winni.in. All Rights Reserved</p>

 { /* RIGHT SECTION */}
  <div class="footer-right">
    <h5 className='float-end me-5 exp'>Experience Winni on mobile</h5>
    <div className="footer-apps">
  <a 
    href="https://play.google.com/store/apps/details?id=com.winni.winniapp" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={img} alt="Google Play" className="google-app" />
  </a>

  <a 
    href="https://apps.apple.com/in/app/winni-cake/id1473804069" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src={img1} alt="App Store" className="google-app" />
  </a>
</div>
  </div>
</div>
</div>
  )
}
