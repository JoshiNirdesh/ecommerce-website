import React, { useEffect, useState } from "react";
import { dummyOrders } from "../assets/greencart_assets/assets";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const fetchMyOrders = () => {
    setMyOrders(dummyOrders);
  };
  useEffect(() => {
    fetchMyOrders();
  }, []);
  return (
    <div className="mt-16">
      <div className="">
        <p className="text-2xl font-medium">My Orders</p>
        <div className="h-0.5 w-16 bg-primary rounded"></div>
        {myOrders.map((order, key) => (
          <div
            key={key}
            className="border border-gray-300 p-4 py-5 max-w-4xl mb-10 rounded-lg mt-10"
          >
            <p className="flex justify-between text-gray-400">
              <span>OrderId : {order._id}</span>
              <span>Payment : {order.paymentType}</span>
              <span>Total Amount : {order.amount}</span>
            </p>
            {order.items.map((item, key) => (
              <div key={key} className="flex justify-between mt-5">
                <div className="flex items-center gap-5 mb-4 ">
                  <img
                    src={item.product.image}
                    alt=""
                    className="w-20 bg-gray-200"
                  />
                  <div>
                    <p>{item.product.name}</p>
                    <p>Category: {item.product.category}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center mb-4 text-gray-400 item-center">
                  <p>Quantity : {item.quantity}</p>
                  <p>Status : {order.status}</p>
                  <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <p>Amount : {item.product.price * item.quantity}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
