import React, { useState } from "react";
import "./About.css";

const perfumes = [
  {
    name: "Velvet Rose",
    image:
      "https://perfumegallery.ae/cdn/shop/files/For-Him_1177b3c2-7246-4d62-b0f7-b42a56e6e295.png?v=1743673171&width=1420",
    backImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "A luxurious blend of Turkish rose, oud, and a hint of clove for an unforgettable aura.",
  },
  {
    name: "Citrus Whisper",
    image:
      "https://imgmedia.lbb.in/media/2023/06/649c309e4a32d7701e70c967_1687957662487.jpg",
    backImage:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80",
    description:
      "Fresh and energizing citrus notes balanced with soft white musk. Perfect for daytime wear.",
  },
  {
    name: "Amber Dusk",
    image:
      "https://www.fragrancereview.com/php_assets/uploads/2020/09/Best-Victorias-Secret-perfumes.jpg",
    backImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    description:
      "Rich amber, vanilla, and patchouli come together for a mysterious evening scent.",
  },
  {
    name: "Ocean Bloom",
    image: "https://i.ebayimg.com/images/g/O-oAAOSwEnplF2PT/s-l1200.jpg",
    backImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "Marine freshness with floral undertones, evoking the calm of the sea breeze.",
  },
];

export default function AboutPerfumeCards() {
  const [modalData, setModalData] = useState(null);

  return (
    <div className="about-card-container">
      <h1 className="title">Our Signature Scents</h1>
      <p className="intro-text">
        At <strong>ScentAura</strong>, we believe every fragrance tells a story.
        Founded in 2023, our mission is to craft perfumes that capture the
        essence of elegance and individuality. From floral whispers to bold
        musks, our collections are designed for those who dare to feel
        unforgettable.
      </p>

      <h2 className="section-heading">Art of Perfumery</h2>
      <p className="section-text">
        Each bottle is a masterpiece, blending rare ingredients sourced from
        around the world. Our expert perfumers combine tradition with innovation
        to deliver timeless scents that linger in memory long after you’ve left
        the room.
      </p>
      <div className="card-grid">
        {perfumes.map((perfume, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <img
                  src={perfume.image}
                  alt={perfume.name}
                  className="card-img"
                />
              </div>

              {/* Back with different image */}
              <div
                className="flip-card-back"
                style={{ backgroundImage: `url(${perfume.backImage})` }}
              >
                <h3>{perfume.name}</h3>
                <button
                  className="read-btn"
                  onClick={() => setModalData(perfume)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalData.name}</h2>
            <p>{modalData.description}</p>
            <button className="close-btn" onClick={() => setModalData(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      <h2 className="section-heading">What Sets Us Apart</h2>
      <ul className="features-list">
        <li>🌿 Natural and ethically sourced ingredients</li>
        <li>🎨 Artistic and elegant packaging</li>
        <li>👃 Long-lasting, signature fragrances</li>
        <li>💖 Personalized scent curation</li>
        <li>🌍 Eco-conscious and cruelty-free practices</li>
      </ul>

      <div className="quote-section">
        <blockquote>
          “Perfume is the art that makes memory speak.” — Francis Kurkdjian
        </blockquote>
      </div>
    </div>
  );
}
