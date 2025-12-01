import React from 'react'
import './footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedinIn, FaTwitter  } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="logo mt-5 ms-5">
            <img
              src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png"
              alt="Logo"
            />
      </div>
      <div className="footer">
  {/* Our Company Section */}
  <div className="footer-section">
    <h5 className="company mt-5 ms-5">Our Company</h5>
    <div className="footer-links">
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
    <div className="footer-links">
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
    <div className="footer-links">
      <ul>
        <li><a href="/about-us">FAQ</a></li>
        <li><a href="/careers">Refund Policy</a></li>
        <li><a href="/contact-us">Privacy Policy</a></li>
        <li><a href="/affiliate-program">Bug Bounty</a></li>
      </ul>
    </div>
  </div>
  <div className='footer-links-container'>
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
  <h6 className="connect fw-bold">Connect With Us</h6>

  <div className="social-icons mb-3">
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
</div>
</div>
  )
}
