import React, { useState } from "react";
import { assets } from "../assets/greencart_assets/assets";

const InputField = ({ type, placeholder, name, address, handleChange }) => (
  <input
    className="px-3 py-2.5 border border-gray-500/30 rounded outline-none text-gray-600 focus:border-primary transition w-full"
    type={type}
    placeholder={placeholder}
    name={name}
    value={address[name]}
    onChange={handleChange}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Address:", address);
    // later → send to backend API
  };

  return (
    <div className="mt-16">
      <p className="text-2xl text-gray-500 mb-6">
        Add Shipping <span className="text-primary font-semibold">Address</span>
      </p>

      <div className="flex gap-10 items-start">
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-1/2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              address={address}
              handleChange={handleChange}
            />

            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              address={address}
              handleChange={handleChange}
            />
          </div>

          <InputField
            type="email"
            name="email"
            placeholder="Email Address"
            address={address}
            handleChange={handleChange}
          />

          <InputField
            type="text"
            name="street"
            placeholder="Street Address"
            address={address}
            handleChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="text"
              name="city"
              placeholder="City"
              address={address}
              handleChange={handleChange}
            />

            <InputField
              type="text"
              name="state"
              placeholder="State"
              address={address}
              handleChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InputField
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              address={address}
              handleChange={handleChange}
            />

            <InputField
              type="text"
              name="country"
              placeholder="Country"
              address={address}
              handleChange={handleChange}
            />
          </div>

          <InputField
            type="tel"
            name="phone"
            placeholder="Phone Number"
            address={address}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-primary text-white py-3 rounded hover:opacity-90 transition"
          >
            Save Address
          </button>
        </form>

        {/* Image */}
        <img
          src={assets.add_address_iamge}
          alt="Add Address"
          className="w-1/3"
        />
      </div>
    </div>
  );
};

export default AddAddress;
