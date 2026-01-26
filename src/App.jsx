import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./components/Test";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

const App = () => {
  const { showUserLogin } = useAppContext();

  return (
    <div>
      <Navbar />
      {showUserLogin ? <Login /> : ""}
      <Toaster />
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:category" element={<ProductCategory />} />
          <Route
            path="products/:category/:itemId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
