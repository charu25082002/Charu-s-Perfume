import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { womenPerfumes } from "./Women";
import { menPerfumes } from "./Men";
import { charuPerfumes } from "./Charu";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";// stylish outlined user icon


export default function Navbar({ cart, setCart, likedItems, setLikedItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [...womenPerfumes, ...menPerfumes, ...charuPerfumes];

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSearch = (e) => e.preventDefault();

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      const updated = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.name} added to cart! 🛒`);
    closePopup();
  };

  const handleLike = (id, product) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    closePopup();
    navigate("/liked");
  };

  const closePopup = () => setSelectedProduct(null);

  return (
    <div>
      <div className="search-bar-top">
        {filteredProducts.length > 0 && (
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => {
                  setSelectedProduct(product);
                  setSearchTerm("");
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="search-thumb"
                />
                <div className="search-details">
                  <h4>{product.name}</h4>
                  <p>₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="logo">
          <Link to="/" className="logo-link">
            Charu's <span className="logo-highlight">Perfume</span>
          </Link>
        </div>

        <form onSubmit={handleSearch} className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            autoComplete="off"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <div className="icons-wrapper">
          {/* Cart Icon */}
          <Link to="/cart" className="icon-link bubble-icon" aria-label="Cart">
            <div className="icon-circle cart-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="2" />
                <circle cx="17" cy="21" r="2" />
              </svg>
            </div>
            {cart.length > 0 && (
              <span className="bubble-badge">{cart.length}</span>
            )}
          </Link>

          {/* Wishlist Icon */}
          {/* Wishlist Icon */}
          <Link
            to="/liked"
            className="icon-link bubble-icon"
            aria-label="Wishlist"
          >
            <div className="icon-circle wish-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-svg filled-heart"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#ff4081"
                stroke="none"
              >
                <path d="M12 21s-6-4.35-6-9a4.5 4.5 0 119 0 4.5 4.5 0 119 0c0 4.65-6 9-6 9z" />
              </svg>
            </div>
            {Object.keys(likedItems).filter((key) => likedItems[key]).length >
              0 && (
              <span className="bubble-badge wish-badge">
                {
                  Object.keys(likedItems).filter((key) => likedItems[key])
                    .length
                }
              </span>
            )}
          </Link>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/charu" className="nav-link dropdown-toggle">
                PRODUCT
              </Link>
              <div className="dropdown-menu">
                <Link to="/women" className="dropdown-item">
                  Women
                </Link>
                <Link to="/men" className="dropdown-item">
                  Men
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link user-icon stylish-login-icon"
                title="Login"
              >
                <FaSignInAlt size={28} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>₹{selectedProduct.price}</p>

            {selectedProduct.description && (
              <p className="popup-description">{selectedProduct.description}</p>
            )}

            <div className="popup-actions">
              <button onClick={() => handleAddToCart(selectedProduct)}>
                🛒 Add to Cart
              </button>
              <span
                onClick={() => handleLike(selectedProduct.id, selectedProduct)}
              >
                {likedItems[selectedProduct.id] ? "💖" : "🤍"}
              </span>
            </div>
            <button className="popup-close" onClick={closePopup}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
