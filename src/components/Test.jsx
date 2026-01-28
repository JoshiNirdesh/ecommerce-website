import React from "react";

const Test = () => {
  const cartArray = [
    { name: "Apple", price: 100 },
    { name: "Banana", price: 50 },
  ];
  return (
    <div>
      {cartArray.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
