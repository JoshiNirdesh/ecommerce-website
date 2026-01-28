import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
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
import AddAddress from "./components/AddAddress";
import MyOrders from "./components/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";

const App = () => {
  const { showUserLogin, isSeller } = useAppContext();
  const location = useLocation();

  const isSellerPage = location.pathname.startsWith("/seller");

  return (
    <div>
      {!isSellerPage && <Navbar />}
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
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/seller" element={isSeller ? null : <SellerLogin />} />
        </Routes>
      </div>
      {!isSellerPage && <Footer />}
    </div>
  );
};

export default App;
