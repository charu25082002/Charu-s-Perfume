import React, { useState } from "react";
import "./Men.css";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

export const menPerfumes = [
  {
    id: 101,
    name: "Ocean Mist",
    price: 999,
    originalPrice: 1599,
    image:
      "https://www.wildstone.in/cdn/shop/files/category_banner_-_Mobile.jpg?v=1740994905",
    hoverImage:
      "https://www.wildstone.in/cdn/shop/files/1_2_1445x.jpg?v=1742815921",
    description: "A fresh, aquatic scent with hints of citrus and cedarwood.",
  },
  {
    id: 102,
    name: "Woody Rush",
    price: 849,
    originalPrice: 1399,
    image:
      "https://t4.ftcdn.net/jpg/03/38/57/35/360_F_338573560_vg5SwHmziR3tVXc0aiHScv6ymbYzbS0M.jpg",
    hoverImage:
      "https://threadcurve.com/wp-content/uploads/2021/03/types-of-perfume-Mar222021-1-min.jpg",
    description: "Earthy woody notes with patchouli and warm amber.",
  },
  {
    id: 103,
    name: "Citrus Ice",
    price: 749,
    originalPrice: 1099,
    image:
      "https://denverformen.com/cdn/shop/files/Mahesh_Babu_Celebrity_General_trade_Poster_500_x_500_-3.11.23.jpg",
    hoverImage:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/f/0/i/-original-imah8j2vngkdtps6.jpeg?q=90&crop=false",
    description: "Crisp citrus with a burst of mint and bergamot freshness.",
  },
  {
    id: 104,
    name: "Night Pulse",
    price: 899,
    originalPrice: 1299,
    image:
      "https://pixies.in/media/catalog/product/cache/e9780188a08ae15edb442fcb34502371/b/e/beardo-godfather-perfume-for-men-citrus-aromatic_8.jpg",
    hoverImage:
      "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/beardo/COMBO_240105061609-XEF/0/KWsXFiwuKi-960877_Combo_19-1.jpg",
    description: "Bold musky fragrance for confident evening wear.",
  },

  
];

export default function Men({ cart, setCart, likedItems = {}, setLikedItems }) {
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      toast.info("⚠️ Product already in cart. Quantity updated.");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("✅ Product added to cart!");
    }
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="men-container">
      <h1 className="men-heading">🔥 Men's Perfume Collection</h1>
      <p className="men-subtitle">
        Bold fragrances crafted for the modern man.
      </p>

      <div className="men-grid">
        {menPerfumes.map((perfume) => (
          <div key={perfume.id} className="men-card">
            <div
              className="men-img-box"
              onMouseEnter={() => setHoveredImageId(perfume.id)}
              onMouseLeave={() => setHoveredImageId(null)}
            >
              <img
                src={
                  hoveredImageId === perfume.id
                    ? perfume.hoverImage
                    : perfume.image
                }
                alt={perfume.name}
              />
            </div>

            <h3>{perfume.name}</h3>
            <p>
              ₹{perfume.price}{" "}
              <span className="men-original-price">
                ₹{perfume.originalPrice}
              </span>
            </p>

            <div className="men-btn-row">
              <button
                className="men-buy-btn"
                onClick={() => handleAddToCart(perfume)}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button
                className="men-like-btn"
                onClick={() => toggleLike(perfume.id)}
              >
                {likedItems[perfume.id] ? (
                  <FaHeart color="royalblue" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>

            <button
              className="men-view-btn"
              onClick={() => setSelectedPerfume(perfume)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedPerfume && (
        <div className="men-popup">
          <div className="men-popup-content">
            <button
              className="men-close-btn"
              onClick={() => setSelectedPerfume(null)}
            >
              ✖
            </button>
            <div className="men-popup-images">
              <img src={selectedPerfume.image} alt="main" />
              <img src={selectedPerfume.hoverImage} alt="hover" />
            </div>
            <h2>{selectedPerfume.name}</h2>
            <p className="men-price">
              ₹{selectedPerfume.price}{" "}
              <span className="men-original-price">
                ₹{selectedPerfume.originalPrice}
              </span>
            </p>
            <p className="men-desc">{selectedPerfume.description}</p>
            <button
              className="men-buy-btn"
              onClick={() => handleAddToCart(selectedPerfume)}
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
