// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🌸 Brand Info */}
        <div className="footer-section about">
          <h2>Charu's Perfume</h2>
          <p>
            Discover signature scents and budget-friendly perfumes crafted for
            every personality. Experience fragrance like never before.
          </p>
        </div>

        {/* 📑 Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul className="quick_links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Women">Women</a>
            </li>
            <li>
              <a href="/Men">Men</a>
            </li>
            <li>
              <a href="/Charu">All Perfumes</a>
            </li>
            <li>
              <a href="/Cart">Cart</a>
            </li>
          </ul>
        </div>

        {/* 🧾 Support */}
        <div className="footer-section support">
          <h3>Support</h3>
          <ul className="support">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* 📬 Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@charusperfume.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Chennai, India</p>
        </div>
      </div>

      {/* 🌐 Social Icons and Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Charu's Perfume. All rights reserved.
        </p>
        <div className="social-media">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
