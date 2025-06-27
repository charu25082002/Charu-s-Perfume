import React from "react";
import "./Liked.css";
import { toast } from "react-toastify";

export default function Liked({ likedItems, setLikedItems, products }) {
  const handleUnlike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: false,
    }));
    toast.info("💔 Removed from Liked");
  };

  const likedProducts = products.filter((product) => likedItems[product.id]);

  return (
    <div className="liked-page">
      <h2>❤️ Liked Products</h2>

      {likedProducts.length === 0 ? (
        <p>You haven't liked any products yet.</p>
      ) : (
        likedProducts.map((product) => (
          <div className="liked-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="liked-details">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button
                className="remove-like-btn"
                onClick={() => handleUnlike(product.id)}
              >
                💔 Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
