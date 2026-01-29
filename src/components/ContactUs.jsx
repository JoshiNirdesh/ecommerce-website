import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Headphones,
  Package,
  CreditCard,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", category: "General", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-primary py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Our Support Team</h1>
        <p className="mt-3 text-black">
          We’re here to help with orders, payments, deliveries, and support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Store Support</h3>

          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Kathmandu, Nepal</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5 text-primary" />
            <span>+977 98XXXXXXXX</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5 text-primary" />
            <span>support@yourstore.com</span>
          </div>

          <div className="border-t pt-4">
            <h4 className="text-sm font-semibold text-gray-500 mb-3">
              Support Categories
            </h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                Orders & Delivery
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                Payments & Refunds
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-primary" />
                Customer Support
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none border-gray-300"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none  border-gray-300"
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none md:col-span-2 text-gray-500 border-gray-300"
            >
              <option className="">General</option>
              <option>Order Issue</option>
              <option>Payment Problem</option>
              <option>Refund Request</option>
              <option>Delivery Delay</option>
              <option>Product Inquiry</option>
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none md:col-span-2  border-gray-300"
              required
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary transition "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
