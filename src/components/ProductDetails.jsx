import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/greencart_assets/assets";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { products, navigate, addToCart } = useAppContext();

  const { itemId } = useParams();
  const product = products.find((product) => product._id == itemId);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filterProducts = products.filter(
        (item) => item.category == product.category,
      );
      setRelatedProducts(filterProducts);
    }
  }, [products]);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    setThumbnail(product?.image[0] ? product.image[0] : null);
  }, [product]);
  return (
    product && (
      <>
        {" "}
        <div className="mt-16">
          <p>
            <Link to="/">Home /</Link>
            <Link to="/products">Products /</Link>
            <Link to={`/products/${product.category}`}>
              {product.category}/
            </Link>
            <span>{product.name}</span>
          </p>
          <div className="flex mt-4 gap-12 ">
            <div className="flex w-350 gap-4">
              <div>
                {product.image.map((image, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 mb-3 rounded cursor-pointer mt-3"
                    onClick={() => setThumbnail(image)}
                  >
                    <img src={image} alt="" key={index} className="w-25 " />
                  </div>
                ))}
              </div>
              <div className="border border-gray-300 rounded ">
                <img src={thumbnail} alt="" className="w-120" />
              </div>
            </div>
            <div className="w-full p-4">
              <h1 className="text-3xl font-medium">{product.name}</h1>
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
              <div className="mt-5 mb-5">
                <p className="text-sm text-gray-400 line-through  ">
                  MRP: ${product.price}{" "}
                </p>
                <h2 className="text-2xl font-medium">
                  MRP: ${product.offerPrice}
                </h2>
                <p className="text-sm text-gray-400">
                  (inclusive of all taxes)
                </p>
              </div>

              <h3 className="text-md font-medium line-space-4">
                About Product
              </h3>
              <ul className="list-disc text-sm text-gray-400">
                {product.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
              <div className="mt-12 w-full flex gap-5">
                <button
                  onClick={() => addToCart(product._id)}
                  className="w-full bg-gray-300/50 px-5 py-3 font-medium text-gray-500 hover:bg-gray-300/70 cursor-pointer"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(product._id);
                    navigate("/cart");
                  }}
                  className="w-full bg-primary/80 hover:bg-primary px-5 py-3"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl">Related Products</p>
            <div className="w-20 h-0.5 bg-primary rounded "></div>
          </div>
          <div className="grid grid-cols-5 mt-10">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/products");
              scrollTo(0, 0);
            }}
            className="mt-16 bg-gray-200 px-6 py-4 text-primary rounded-lg font-medium cursor-pointer hover:border border-primary"
          >
            See more
          </button>
        </div>
      </>
    )
  );
};

export default ProductDetails;
