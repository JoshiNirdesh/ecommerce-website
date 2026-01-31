import React from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/greencart_assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";

const SellerLayout = () => {
  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
  ];

  const { setIsSeller } = useAppContext();
  const handleLogout = () => {
    setIsSeller(false);
  };
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 py-3 px-5">
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="w-15" />
        </Link>
        <div className="flex gap-10">
          <p>Hi! Admin</p>
          <button
            onClick={handleLogout}
            className="border px-4 text-gray-400 rounded-xl text-sm"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="border-r border-gray-300 w-50 border-full h-[550px] ">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex gap-2 px-4 py-3 mt-2 ${isActive ? "bg-primary/20 border-r-4 border-primary" : "hover:bg-gray-100/90"}`
              }
            >
              <img src={item.icon} className="w-7 h-7" alt="" />
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SellerLayout;
