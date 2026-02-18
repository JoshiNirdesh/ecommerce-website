import React from "react";
import { assets, features } from "../assets/greencart_assets/assets";

const BottomBanner = () => {
  return (
    <div className=" mt-16 md:mt-24 relative">
      <img
        src={assets.bottom_banner_image}
        alt=""
        className="w-full hidden md:block object-cover"
      />

      <img
        src={assets.bottom_banner_image_sm}
        alt=""
        className="w-full md:hidden object-cover"
      />

      <div
        className="
        absolute inset-0 
        flex flex-col 
        sm:mt-10
        lg:justify-center 
        items-center md:items-end 
        px-6 md:px-16 lg:px-24
      "
      >
        <div className="max-w-md md:max-w-lg text-center md:text-left md:hidden lg:block">
          <h1
            className="
            text-xl sm:text-2xl md:text-2xl 
            font-semibold text-primary 
            mb-4 md:mb-6
          "
          >
            Why we are the best ?
          </h1>

          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4 mt-3">
              <img
                src={feature.icon}
                alt=""
                className="w-8 md:w-10 lg:w-11 flex-shrink-0"
              />

              <div>
                <h3
                  className="
                  text-base sm:text-lg md:text-xl 
                  font-semibold
                "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                  text-gray-500/80 
                  text-xs sm:text-sm md:text-base
                  leading-relaxed
                "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
