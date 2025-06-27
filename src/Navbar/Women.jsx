import React, { useState } from "react";
import "./Women.css";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

export const womenPerfumes = [
  {
    id: 81,
    name: "Velvet Bloom",
    price: 799,
    originalPrice: 1299,
    image:
      "https://cdn2.stylecraze.com/wp-content/uploads/2013/04/12-Best-Dior-Perfumes-For-Women1.jpg.webp",
    hoverImage:
      "https://shop-beauty.dior.ae/cdn/shop/products/Y0063401_F006342009_E01_GHC.jpg?v=1694791772&width=833",
    description:
      "A floral fragrance with notes of rose and jasmine. Perfect for daytime elegance.",
  },
  {
    id: 82,
    name: "Rose Elegance",
    price: 950,
    originalPrice: 1399,
    image:
      "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw6dc0f1b8/images/beauty/01-FRAGRANCES/2024/MISS-DIOR_2024/RANGEPAGE/MD_Parfum_Instit_NP_EN_E-merch_3000x2250.jpg",
    hoverImage:
      "https://assets.boots.ie/content/dam/boots/brands/brand---d/dior/dior_categories/dior_categories_womens-fragrance/dior_womens-fragrance_10-2024/2023-12_dior_category-page-womens-fragrance_25-teaser_find-your-miss-dior_miss-dior-launch_3-blooming-bouquet.dam.ts%3D1726664390871.jpg",
    description:
      "Delicate rose petals blended with musk and a hint of lavender.",
  },
  {
    id: 83,
    name: "Blush Petals",
    price: 675,
    originalPrice: 999,
    image:
      "https://www.fashiongonerogue.com/wp-content/uploads/2020/02/Natalie-Portman-Miss-Dior-Roses-N-Roses-Campaign02.jpg",
    hoverImage:
      "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw18470f8b/images/beauty/01-FRAGRANCES/2024/MISS-DIOR_2024/PARFUM/LAUNCHPAGE/MD_Parfum_Mood_Detail-Noeud_E-merch_2400x3000.jpg",
    description:
      "Soft powdery scent infused with cherry blossom and sandalwood.",
  },
  {
    id: 84,
    name: "Lavender Kiss",
    price: 850,
    originalPrice: 1200,
    image:
      "https://images.prismic.io/lvmh-com/f0a4174e-c959-44b4-942a-95c2a0d7f27f_MD-BB_S123_Instit_1992x1296.jpg",
    hoverImage:
      "https://cdn.saksfifthavenue.com/is/image/saks/0400014874443_NOCOLOR_A3?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0",
    description:
      "A bold mix of lavender and vanilla notes for an evening mood.",
  },
];

export default function Women({ cart, setCart, likedItems, setLikedItems }) {
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [hoveredImageId, setHoveredImageId] = useState(null);

  const handleAddToCart = (perfume) => {
    const exists = cart.find((item) => item.id === perfume.id);

    if (exists) {
      const updatedCart = cart.map((item) =>
        item.id === perfume.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      toast.info("⚠️ Product already in cart. Quantity updated.");
    } else {
      setCart([...cart, { ...perfume, quantity: 1 }]);
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
    <div className="women-container">
      <h1 className="women-heading">✨ Women's Perfume Collection</h1>
      <p className="women-subtitle">
        Discover our signature scents made to express your essence.
      </p>

      <div className="perfume-grid">
        {womenPerfumes.map((perfume) => (
          <div key={perfume.id} className="perfume-card">
            <div
              className="img-container"
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
              <span className="original-price">₹{perfume.originalPrice}</span>
            </p>

            <div className="button-row">
              <button
                className="buy-btn"
                onClick={() => handleAddToCart(perfume)}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button
                className="like-btn"
                onClick={() => toggleLike(perfume.id)}
              >
                {likedItems[perfume.id] ? (
                  <FaHeart color="crimson" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>

            <button
              className="view-btn"
              onClick={() => setSelectedPerfume(perfume)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedPerfume && (
        <div className="details-popup">
          <div className="details-content">
            <button
              className="close-btn"
              onClick={() => setSelectedPerfume(null)}
            >
              ✖
            </button>
            <div className="details-images">
              <img src={selectedPerfume.image} alt="main" />
              <img src={selectedPerfume.hoverImage} alt="hover" />
            </div>
            <h2>{selectedPerfume.name}</h2>
            <p className="price">
              ₹{selectedPerfume.price}{" "}
              <span className="original-price">
                ₹{selectedPerfume.originalPrice}
              </span>
            </p>
            <p className="desc">{selectedPerfume.description}</p>
            <button
              className="buy-btn"
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
