import React from "react";

const AddProduct = () => {
  return (
    <div className=" py-10">
      <form action="" className="p-4 max-w-lg ">
        <div>
          <h3>Product Image</h3>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`}>
                  <input
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <img
                    className="max-w-24 cursor-pointer"
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                    alt="uploadArea"
                    width={100}
                    height={100}
                  />
                </label>
              ))}
          </div>
        </div>
        <div className="mt-3">
          <h3>Product Name</h3>
          <input
            type="text"
            placeholder="Enter a product name"
            className="border p-2 w-120 border-gray-300 rounded mt-2"
          />
        </div>
        <div className="mt-3 max-w-md">
          <h3>Product Description</h3>
          <textarea
            name=""
            id=""
            rows={4}
            placeholder="Product Description"
            className="border p-2 border-gray-300 rounded resize-none w-120 mt-2"
          ></textarea>
        </div>
        <div className="mt-3  ">
          <h3>Category</h3>

          <select
            name=""
            id=""
            className="border border-gray-300 rounded p-2 w-120 mt-2"
          >
            <option value=""> Select Category</option>
            {[
              { name: "Electronics" },
              { name: "Clothing" },
              { name: "Accessories" },
            ].map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mt-2 gap-6">
          <div>
            <h3>Product Price</h3>
            <input
              type="number"
              className="border p-2 mt-2 border-gray-300 rounded"
              placeholder="0"
            />
          </div>
          <div>
            <h3>Offer Price</h3>
            <input
              type="number"
              className="border p-2 mt-2 border-gray-300 rounded"
              placeholder="0"
            />
          </div>
        </div>
        <div className="mt-3">
          <button className=" px-6 py-2  bg-primary/80 ouline-none text-white hover:bg-primary rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
