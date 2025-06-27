import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar({
  products,
  cart,
  setCart,
  likedItems,
  setLikedItems,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

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
    closePopup();
    navigate("/cart");
  };

  const handleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    closePopup();
    navigate("/liked");
  };

  const closePopup = () => setSelectedProduct(null);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
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

      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p>₹{selectedProduct.price}</p>
            <div className="popup-actions">
              <button onClick={() => handleAddToCart(selectedProduct)}>
                🛒 Add to Cart
              </button>
              <span onClick={() => handleLike(selectedProduct.id)}>
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
