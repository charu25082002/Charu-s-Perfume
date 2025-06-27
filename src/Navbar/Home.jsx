import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

const fullscreenSlides = [
  "https://www.jananfragrances.com/cdn/shop/files/Desktop_Banner_0d4fe6e8-40bf-4d5a-9b64-f99611387592.png?v=1746533019&width=1920",
  "https://m.media-amazon.com/images/I/61m478rPE0L._UF1000,1000_QL80_.jpg",
  "https://cdn.shopify.com/s/files/1/0436/4012/7649/files/What-Makes-Men_s-And-Women_s-Fragrances-Different_1024x1024.jpg?v=1645531950",
];




const perfumeCategories = [
  {
    title: "Luxury Perfumes for Women",
    linkText: "See all",
    products: [
      {
        name: "Velvet Rose",
        image:
          "https://www.engageshop.in/cdn/shop/files/PENPS0069_3.webp?v=1743765774&width=1946",
      },
      {
        name: "Royal Oud",
        image: "https://m.media-amazon.com/images/I/61lk8wyFYzL.jpg",
      },
      {
        name: "Jasmine Bloom",
        image:
          "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017964888_437Wx649H_202306151548204.jpeg",
      },

      {
        name: "Amber Grace",
        image: "https://www.junaidjamshed.com/media/wysiwyg/spray.jpg",
      },
      {
        name: "Citrus Rush",
        image:
          "https://rukminim2.flixcart.com/image/750/900/xif0q/perfume/n/l/e/-original-imah5fwfhgdbyezn.jpeg?q=90&crop=false",
      },
      {
        name: "Fresh Linen",
        image:
          "https://media.naheed.pk/catalog/product/cache/2f2d0cb0c5f92580479e8350be94f387/s/c/screenshot_2022-09-20_093027jpg21.jpg",
      },
      {
        name: "Ocean Breeze",
        image:
          "https://theelegance.pk/wp-content/uploads/2023/08/J.-Marjaan-Perfume-for-Him-Online-Gifts-in-Paksitan.webp",
      },
      {
        name: "Green Tea Zest",
        image: "https://i.ebayimg.com/images/g/uSAAAOSweaFhrlNF/s-l1200.webp",
      },
    ],
  },
  {
    title: "Elegant Evening Picks",
    linkText: "Shop now",
    products: [
      {
        name: "Midnight Blossom",
        image:
          "https://i0.wp.com/farina.com.bo/wp-content/uploads/2020/07/sauvage-par-1x1-1.jpg?fit=1110%2C1200&ssl=1",
      },
      {
        name: "Opal Dream",
        image:
          "https://images-static.nykaa.com/media/catalog/product/f/d/fdbc2ceGIOAA00000064_3.jpg?tr=w-500",
      },
      {
        name: "Golden Twilight",
        image:
          "https://www.gononsense.in/cdn/shop/products/Nonsense_Pafeum_Post-3.jpg?v=1671194771&width=1445",
      },
      {
        name: "Sapphire Mist",
        image: "https://m.media-amazon.com/images/I/71ThfjsLuqL.jpg",
      },
      {
        name: "Velvet Rose",
        image:
          "https://www.engageshop.in/cdn/shop/files/PENPS0069_3.webp?v=1743765774&width=1946",
      },
      {
        name: "Royal Oud",
        image: "https://m.media-amazon.com/images/I/61lk8wyFYzL.jpg",
      },
      {
        name: "Jasmine Bloom",
        image:
          "https://img.tatacliq.com/images/i11/437Wx649H/MP000000017964888_437Wx649H_202306151548204.jpeg",
      },

      {
        name: "Amber Grace",
        image: "https://www.junaidjamshed.com/media/wysiwyg/spray.jpg",
      },
    ],
  },
  {
    title: "Daily Wear Fragrances",
    linkText: "Discover",
    products: [
      {
        name: "Citrus Rush",
        image:
          "https://rukminim2.flixcart.com/image/750/900/xif0q/perfume/n/l/e/-original-imah5fwfhgdbyezn.jpeg?q=90&crop=false",
      },
      {
        name: "Fresh Linen",
        image:
          "https://media.naheed.pk/catalog/product/cache/2f2d0cb0c5f92580479e8350be94f387/s/c/screenshot_2022-09-20_093027jpg21.jpg",
      },
      {
        name: "Ocean Breeze",
        image:
          "https://theelegance.pk/wp-content/uploads/2023/08/J.-Marjaan-Perfume-for-Him-Online-Gifts-in-Paksitan.webp",
      },
      {
        name: "Green Tea Zest",
        image: "https://i.ebayimg.com/images/g/uSAAAOSweaFhrlNF/s-l1200.webp",
      },
      {
        name: "Midnight Blossom",
        image:
          "https://i0.wp.com/farina.com.bo/wp-content/uploads/2020/07/sauvage-par-1x1-1.jpg?fit=1110%2C1200&ssl=1",
      },
      {
        name: "Opal Dream",
        image:
          "https://images-static.nykaa.com/media/catalog/product/f/d/fdbc2ceGIOAA00000064_3.jpg?tr=w-500",
      },
      {
        name: "Golden Twilight",
        image:
          "https://www.gononsense.in/cdn/shop/products/Nonsense_Pafeum_Post-3.jpg?v=1671194771&width=1445",
      },
      {
        name: "Sapphire Mist",
        image: "https://m.media-amazon.com/images/I/71ThfjsLuqL.jpg",
      },
    ],
  },
  {
    title: "Seasonal Favorites",
    linkText: "Explore",
    products: [
      {
        name: "Spring Meadow",
        image:
          "https://glamzone.pk/cdn/shop/files/J._Bloom_Perfume_100ml_-_Luxury_Floral_Fragrance_for_Men_and_Women3.jpg?v=1738510194",
      },
      {
        name: "Summer Dew",
        image: "https://i.ebayimg.com/images/g/-DUAAOSwYA5lBIV6/s-l400.jpg",
      },
      {
        name: "Autumn Spice",
        image:
          "https://creedboutique.com/cdn/shop/files/royal-water-ingredients.jpg?v=1693970438&width=1500",
      },
      {
        name: "Winter Musk",
        image:
          "https://images.meesho.com/images/products/92106214/5vcfo_512.webp",
      },
      {
        name: "Citrus Rush",
        image:
          "https://rukminim2.flixcart.com/image/750/900/xif0q/perfume/n/l/e/-original-imah5fwfhgdbyezn.jpeg?q=90&crop=false",
      },
      {
        name: "Fresh Linen",
        image:
          "https://media.naheed.pk/catalog/product/cache/2f2d0cb0c5f92580479e8350be94f387/s/c/screenshot_2022-09-20_093027jpg21.jpg",
      },
      {
        name: "Ocean Breeze",
        image:
          "https://theelegance.pk/wp-content/uploads/2023/08/J.-Marjaan-Perfume-for-Him-Online-Gifts-in-Paksitan.webp",
      },
      {
        name: "Green Tea Zest",
        image: "https://i.ebayimg.com/images/g/uSAAAOSweaFhrlNF/s-l1200.webp",
      },
    ],
  },
];

const perfumeSliderItems = [
  {
    image: "https://images.meesho.com/images/products/302661758/jof0y_512.webp",
    alt: "Velvet Rose",
  },
  {
    image:
      "https://mist.pk/wp-content/uploads/2024/12/Janan-oud-is-best-for-winter.webp",
    alt: "Jasmine Bloom",
  },
  {
    image:
      "https://plazza.pk/wp-content/uploads/2022/02/Junaid-Jamshed-J.-Defender-Pour-Femme.jpg",
    alt: "Lavender Luxe",
  },
  {
    image:
      "https://brands4less.pk/wp-content/uploads/2024/06/GIORGIO-ARMANI-Acqua-Di-Gio-Profondo-4.2-oz-EDP-Spray-Men-6.jpg",
  },
  {
    image:
      "https://www.jananfragrances.com/cdn/shop/files/Desktop_Banner_0d4fe6e8-40bf-4d5a-9b64-f99611387592.png?v=1746533019&width=1920",
  },
  {
    image: "https://i.ebayimg.com/thumbs/images/g/ldMAAOSw4KVlw8Ih/s-l1200.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/22/af/86/22af86167b4cd873340a5b64d5a747e2.png",
  },
  {
    image:
      "https://www.jananfragrances.com/cdn/shop/files/Desktop_Banner_0d4fe6e8-40bf-4d5a-9b64-f99611387592.png?v=1746533019&width=1920",
  },
 
  
];

export default function Home() {
  const topSliderRef = useRef();
  const bottomSliderRef = useRef();

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % fullscreenSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="amazon-style-home">
      <div className="fullscreen-slider">
        <div
          className="fullscreen-slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {fullscreenSlides.map((img, i) => (
            <div
              className="fullscreen-slide"
              key={i}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>

      <div className="perfume-slider-wrapper">
        <h2 className="slider-title">
          🌟 Deals of the Day | Upto 40% Off <a href="./Women">See all</a>
        </h2>
        <div className="slider-container">
          <button
            className="slider-btn left"
            onClick={() => scrollLeft(topSliderRef)}
          >
            ❮
          </button>
          <div className="slider" ref={topSliderRef}>
            {perfumeSliderItems.map((item, idx) => (
              <img key={idx} src={item.image} alt={item.alt} />
            ))}
          </div>
          <button
            className="slider-btn right"
            onClick={() => scrollRight(topSliderRef)}
          >
            ❯
          </button>
        </div>
      </div>

      {perfumeCategories.map((category, index) => (
        <div className="category-card gradient-bg" key={index}>
          <h2 className="category-title">{category.title}</h2>
          <div className="products-grid">
            {category.products.map((product, idx) => (
              <div className="product-item" key={idx}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <a href="./charu" className="category-link">
            {category.linkText}
          </a>
        </div>
      ))}

      <div className="perfume-slider-wrapper">
        <h2 className="slider-title">
          🔁 Discover More <a href="./Charu">View all</a>
        </h2>
        <div className="slider-container">
          <button
            className="slider-btn left"
            onClick={() => scrollLeft(bottomSliderRef)}
          >
            ❮
          </button>
          <div className="slider" ref={bottomSliderRef}>
            {perfumeSliderItems.map((item, idx) => (
              <img key={idx} src={item.image} alt={item.alt} />
            ))}
          </div>
          <button
            className="slider-btn right"
            onClick={() => scrollRight(bottomSliderRef)}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
