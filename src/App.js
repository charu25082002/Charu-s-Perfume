import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Navbar/Home";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Navbar from "./Navbar/Navbar";
import Login from "./Navbar/Login";
import Premium_Perfume from "./Navbar/Premium_Perfume";
import Upsilon_Perfume from "./Navbar/Upsilon_Perfume";
import Vanilla_Wood from "./Navbar/Vanilla_Wood";
import Footer from "./Navbar/Footer";
import Cart from "./Navbar/Cart";
import Liked from "./Navbar/Liked";
import ProductDetail from "./Navbar/ProductDetail";
import Charu, { charuPerfumes } from "./Navbar/Charu";
import Women, { womenPerfumes } from "./Navbar/Women";
import Men, { menPerfumes } from "./Navbar/Men";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [likedItems, setLikedItems] = useState({});

  const allPerfumes = [...womenPerfumes, ...menPerfumes, ...charuPerfumes];

  return (
    <div className="app-container">
      <Navbar
        cart={cart}
        setCart={setCart}
        likedItems={likedItems}
        setLikedItems={setLikedItems}
      />
      <ToastContainer position="top-center" autoClose={2000} />

      <div style={{ paddingTop: "120px", minHeight: "80vh" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                likedItems={likedItems}
                setLikedItems={setLikedItems}
              />
            }
          />
          <Route
            path="/liked"
            element={
              <Liked
                likedItems={likedItems}
                setLikedItems={setLikedItems}
                products={allPerfumes}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/premium" element={<Premium_Perfume />} />
          <Route path="/upsilon" element={<Upsilon_Perfume />} />
          <Route path="/vanila-wood" element={<Vanilla_Wood />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/charu"
            element={
              <Charu
                cart={cart}
                setCart={setCart}
                likedItems={likedItems}
                setLikedItems={setLikedItems}
              />
            }
          />
          <Route
            path="/women"
            element={
              <Women
                cart={cart}
                setCart={setCart}
                likedItems={likedItems}
                setLikedItems={setLikedItems}
              />
            }
          />
          <Route
            path="/men"
            element={
              <Men
                cart={cart}
                setCart={setCart}
                likedItems={likedItems}
                setLikedItems={setLikedItems}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
