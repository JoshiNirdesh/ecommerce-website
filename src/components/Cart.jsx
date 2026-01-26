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
  const [addresses, setAddresses] = useState();
  const [selectedAddress, setSelectedAddress] = useState();
  const [paymentOption, setPaymentOption] = useState("COD");

  const getCart = () => {
    let tempArray = [];
    for (const key in cartItems) {
      const product = products.find((item) => item._id === key);
      product.quantity = cartItems[key];
      tempArray.push(product);
    }
    setCartArray(tempArray);
  };
  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  const placeOrder = () => {};
  return products.length > 0 && cartItems ? (
    <div className="flex flex-row justify-between py-16 max-w-6xl w-full px-6 mx-auto">
      <div className="w-full">
        <h2 className="text-3xl font-medium">
          Shopping Cart{" "}
          <span className="text-sm text-primary"> {getCartCount()} items</span>
        </h2>
        <div className="mt-5">
          <div className="grid grid-cols-[2fr_1fr_1fr] font-medium text-gray-500">
            <p className="text-left">Product Detials</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>
          {cartArray.map((product, index) => (
            <div className="grid grid-cols-[2fr_1fr_1fr] mt-5">
              <div
                onClick={() => {
                  navigate(
                    `/products/${product.category.toLoweCase()}/${product._id}`,
                  );
                  scrollTo(0, 0);
                }}
                key={index}
                className="flex items-center gap-5"
              >
                <img
                  src={product.image[0]}
                  alt=""
                  className="w-25 border border-gray-300 rounded"
                />
                <div>
                  <p className="text-gray-500 font-medium">{product.name}</p>
                  <p className="text-gray-400 font-light ">
                    Weight : <span>{product.weight || "N/A"}</span>
                  </p>
                  <div className="flex items-center text-gray-400 font-light">
                    <p>Qty:</p>
                    <select
                      className="outline-none"
                      onChange={(e) =>
                        updateCartItem(product._id, Number(e.target.value))
                      }
                      value={cartItems[product._id]}
                    >
                      {Array(
                        cartItems[product._id] > 9 ? cartItems[product._id] : 9,
                      )
                        .fill("")
                        .map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <p className=" flex items-center justify-center text-gray-500 font-medium">
                ${product.offerPrice * product.quantity}
              </p>
              <button
                onClick={() => removeFromCart(product._id)}
                className="cursor-pointer mx-auto"
              >
                <img
                  src={assets.remove_icon}
                  alt=""
                  className="inline-block w-6 h-6"
                />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium"
        >
          <img
            src={assets.arrow_right_icon_colored}
            alt=""
            className="group-hover:-translate-x-1 transition"
          />
          Continue Shopping
        </button>
      </div>

      <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
        <p>Order Summary</p>
        <hr className="border-gray-300 my-5" />
        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">
              {selectedAddress
                ? `${selectedAddress.street},${selectedAddress.city},${selectedAddress.state},${selectedAddress.country}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-indigo-500 hover:underline cursor-pointer"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                {addresses.map((address, index) => (
                  <p
                    onClick={() => {
                      setSelectedAddress(address);
                      setShowAddress(false);
                    }}
                    className="text-gray-500 p-2 hover:bg-gray-100"
                  >
                    {address.street},{address.city},{address.state},
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => navigate("/add-address")}
                  className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                >
                  Add address
                </p>
              </div>
            )}
          </div>
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
        <div className="flex flex-col gap-2 text-gray-500 font-light">
          <div className="flex justify-between">
            <div>Price</div>
            <div>{getCartAmount()}</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping Fee</div>
            <div className="text-primary">Free</div>
          </div>
          <div className="flex justify-between">
            <div>Tax(2%)</div>
            <div>{getCartAmount() * 0.02}</div>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <div className="">Total Amount</div>
            <div>${getCartAmount() * 0.02 + getCartAmount()}</div>
          </div>
        </div>
        <button
          onClick={placeOrder}
          className="mt-6 bg-primary/90 items-center w-full p-2 py-3 text-white font-medium hover:bg-primary"
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  ) : null;
};

export default Cart;
