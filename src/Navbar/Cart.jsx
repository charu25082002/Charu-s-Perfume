import React from "react";
import "./Cart.css";
import axios from "axios";

export default function Cart({ cart, setCart }) {
  // Handle quantity increment/decrement
  const handleQuantityChange = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updatedCart);
  };

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Calculate total amount
  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handlePlaceOrder = async () => {
    try {
      // Get token from localStorage or context
      const token = localStorage.getItem("token");

      if (!token) {
        alert("❌ You must be logged in to place order.");
        return;
      }

      for (const item of cart) {
        const { id, name, price, image, quantity } = item;

        await axios.post(
          "http://localhost:5000/cart/add",
          {
            productId: id,
            name,
            price,
            image,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      alert("✅ Order placed & saved to DB!");
      setCart([]);
    } catch (err) {
      console.error("❌ Error saving cart to DB:", err);
      alert("❌ Failed to save cart to DB");
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name || "product"} />
            <div>
              <p>Price: ₹{item.price}</p>

              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </div>

              <p>Total: ₹{item.price * item.quantity}</p>

              <button
                className="remove-btn"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <>
          <h3>Grand Total: ₹{total}</h3>
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button
              onClick={handlePlaceOrder}
              style={{
                padding: "12px 24px",
                fontSize: "16px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              🧾 Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
