import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/greencart_assets/assets";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { products, navigate, addToCart } = useAppContext();
  const { itemId } = useParams();
  const product = products.find((product) => product._id == itemId);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (products.length > 0 && product) {
      const filterProducts = products.filter(
        (item) => item.category === product.category,
      );
      setRelatedProducts(filterProducts);
    }
  }, [products, product]);

  useEffect(() => {
    setThumbnail(product?.image?.[0] || null);
  }, [product]);

  if (!product) return <h2 className="text-center mt-20">Loading...</h2>;

  return (
    <>
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-20 text-gray-600">
        <p className="text-sm">
          <Link to="/" className="hover:text-primary">
            Home /{" "}
          </Link>
          <Link to="/products" className="hover:text-primary">
            Products /{" "}
          </Link>
          <Link
            to={`/products/${product.category}`}
            className="hover:text-primary"
          >
            {product.category} /
          </Link>
          <span className="font-medium text-gray-800">{product.name}</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-6 px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="flex flex-row md:flex-col gap-3 md:gap-3 w-full md:w-auto overflow-x-auto md:overflow-visible">
          {product.image.map((image, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded cursor-pointer ${
                thumbnail === image ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setThumbnail(image)}
            >
              <img
                src={image}
                alt=""
                className="w-20 h-20 md:w-24 md:h-24 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex-1 border border-gray-300 rounded flex items-center justify-center p-2">
          <img
            src={thumbnail}
            alt={product.name}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>

        <div className="flex-1 w-full md:w-auto p-4">
          <h1 className="text-2xl sm:text-3xl font-medium">{product.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  className="w-4 sm:w-5"
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="star"
                />
              ))}
            <p className="text-sm ml-2">(4)</p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-400 line-through">
              MRP: ${product.price}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              ${product.offerPrice}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              (inclusive of all taxes)
            </p>
          </div>

          <h3 className="mt-4 text-md sm:text-lg font-medium">About Product</h3>
          <ul className="list-disc text-sm sm:text-base text-gray-500 ml-5 mt-2">
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full sm:w-1/2 px-4 py-3 bg-gray-300/50 text-gray-600 font-medium rounded hover:bg-gray-300/70 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product._id);
                navigate("/cart");
              }}
              className="w-full sm:w-1/2 px-4 py-3 bg-primary/80 hover:bg-primary text-white font-medium rounded transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <p className="text-2xl sm:text-3xl font-semibold">Related Products</p>
          <div className="w-20 h-0.5 bg-primary rounded mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {relatedProducts.map((prod, index) => (
            <ProductCard key={index} product={prod} />
          ))}
        </div>
        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="mt-8 px-6 py-3 bg-gray-200 text-primary rounded-lg font-medium hover:border hover:border-primary transition"
        >
          See more
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
