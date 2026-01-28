import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setIsSeller(true);
  };
  return (
    !isSeller && (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
        <form
          onSubmit={onSubmitHandler}
          action=""
          className="border w-80 border-gray-500/10 shadow-lg p-8 rounded-lg"
        >
          <p className="text-2xl text-center font-medium">
            <span className="text-primary">Seller</span> Login
          </p>
          <div className="mt-3">
            <p className="text-sm text-gray-500">Email</p>
            <input
              type="email"
              className="border border-gray-200 rounded mt-1 text-sm px-2 py-1 mb-2 w-full outline-none focus:border-primary"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p className="text-sm text-gray-500">Password</p>
            <input
              type="password"
              className="border border-gray-200 rounded mt-1 text-sm px-2 py-1 w-full outline-none focus:border-primary "
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-primary w-full mt-5 p-2 text-medium text-white rounded cursor-pointer">
            Login
          </button>
        </form>
      </div>
    )
  );
};

export default SellerLogin;
