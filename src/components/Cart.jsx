import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/greencart_assets/assets";

const Cart = () => {
  const {
    products,
    cartItems,
    removeFromCart,
    getCartCount,
    updateCartItem,
    navigate,
    getCartAmount,
  } = useAppContext();

  const [showAddress, setShowAddress] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [paymentOption, setPaymentOption] = useState("COD");

  const getCart = () => {
    const tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      if (product) {
        product.quantity = cartItems[key];
        tempArray.push(product);
      }
    }
    setCartArray(tempArray);
  };

  useEffect(() => {
    if (products.length > 0 && cartItems) getCart();
  }, [products, cartItems]);

  const placeOrder = () => {};

  if (!products.length || !cartItems) return null;

  return (
    <div className="flex flex-col md:flex-row gap-8 py-16 px-4 sm:px-8 md:px-16 lg:px-20 max-w-6xl mx-auto">
      {/* Cart Items */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-medium">
          Shopping Cart{" "}
          <span className="text-sm text-primary">{getCartCount()} items</span>
        </h2>

        <div className="mt-5">
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] font-medium text-gray-500">
            <p className="text-left">Product Details</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>

          {cartArray.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] items-center md:items-start gap-4 md:gap-0 mt-5 p-4 border border-gray-300 rounded-lg"
            >
              {/* Product Info */}
              <div
                className="flex items-center gap-4 md:gap-5 w-full cursor-pointer"
                onClick={() => {
                  navigate(
                    `/products/${product.category.toLowerCase()}/${product._id}`,
                  );
                  scrollTo(0, 0);
                }}
              >
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-24 h-24 md:w-28 md:h-28 border border-gray-300 rounded object-cover"
                />
                <div>
                  <p className="font-medium text-gray-700">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    Weight: {product.weight || "N/A"}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <span>Qty:</span>
                    <select
                      className="outline-none border border-gray-300 rounded px-1 py-0.5 text-sm"
                      value={cartItems[product._id]}
                      onChange={(e) =>
                        updateCartItem(product._id, Number(e.target.value))
                      }
                    >
                      {Array(
                        cartItems[product._id] > 9 ? cartItems[product._id] : 9,
                      )
                        .fill("")
                        .map((_, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Subtotal */}
              <p className="text-gray-700 font-medium md:flex justify-center w-full">
                ${product.offerPrice * product.quantity}
              </p>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(product._id)}
                className="mx-auto md:mx-0 cursor-pointer"
              >
                <img
                  src={assets.remove_icon}
                  alt="Remove"
                  className="w-6 h-6"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="group flex items-center gap-2 mt-6 text-indigo-500 font-medium"
        >
          <img
            src={assets.arrow_right_icon_colored}
            alt=""
            className="group-hover:-translate-x-1 transition-transform"
          />
          Continue Shopping
        </button>
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-96 bg-gray-100/40 p-5 border border-gray-300 rounded mt-8 md:mt-0">
        <p className="font-medium">Order Summary</p>
        <hr className="border-gray-300 my-5" />

        {/* Address */}
        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <div className="relative mt-2">
            <p className="text-gray-500">
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-indigo-500 hover:underline ml-2"
            >
              Change
            </button>

            {showAddress && (
              <div className="absolute top-8 left-0 py-1 bg-white border border-gray-300 w-full text-sm z-10">
                {addresses.map((address, idx) => (
                  <p
                    key={idx}
                    onClick={() => {
                      setSelectedAddress(address);
                      setShowAddress(false);
                    }}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {address.street}, {address.city}, {address.state},{" "}
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => navigate("/add-address")}
                  className="text-indigo-500 p-2 text-center hover:bg-indigo-50 cursor-pointer"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          {/* Payment */}
          <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
          <select
            onChange={(e) => setPaymentOption(e.target.value)}
            className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-gray-300 my-5" />

        {/* Price Details */}
        <div className="flex flex-col gap-2 text-gray-500 font-light text-sm">
          <div className="flex justify-between">
            <span>Price</span>
            <span>${getCartAmount()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-primary">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax(2%)</span>
            <span>${(getCartAmount() * 0.02).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium text-gray-800 text-base mt-2">
            <span>Total Amount</span>
            <span>${(getCartAmount() * 1.02).toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={placeOrder}
          className="mt-6 w-full py-3 bg-primary text-white font-medium rounded hover:bg-primary/90 transition"
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
