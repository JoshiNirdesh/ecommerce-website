import { useState } from "react";
import { assets } from "../assets/greencart_assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  if (!product) return null;

  return (
    <div
      className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 max-w-56 min-w-56 w-full"
      onClick={() =>
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
      }
    >
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26"
          src={product.image[0]}
          alt=""
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>
      </div>
      <div className="flex items-center gap-0.5">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <img
              key={i}
              className="md:3.5 w-3"
              src={i < 4 ? assets.star_icon : assets.star_dull_icon}
            />
          ))}
        <p>(4)</p>
      </div>
      <div className="flex items-end justify-between mt-3">
        <p className="md:text-xl text-base  font-medium text-primary">
          ${product.offerPrice}{" "}
          <span className="text-gray-500/60 md:text-sm text-xs line-through">
            {product.price}
          </span>
        </p>
        <div className="text-primary">
          {!cartItems[product._id] ? (
            <button
              className="flex items-center justify-center gap-1 bg-primary-100 border border-primary-30 px-2 py-1 rounded text-primary-600"
              onClick={() => addToCart(product._id)}
            >
              <img src={assets.cart_icon} alt="" />
              Add
            </button>
          ) : (
            <div className="bg-primary-100 flex items-center justify-center px-3 py-2 rounded">
              <button
                className="cursor-pointer text-md h-full"
                onClick={() => removeFromCart(product._id)}
              >
                -
              </button>
              <span className="w-5 text-center"> {cartItems[product._id]}</span>
              <button
                className="cursor-pointer text-md h-full"
                onClick={() => addToCart(product._id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
