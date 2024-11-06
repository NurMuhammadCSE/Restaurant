import React from "react";
import assets from "../../../assets";

const PopularFood = () => {
  return (
    <div>
      {/* Popular Food Items */}
      <div className="bg-[#fbf7f2]">
        <section className="p-5 lg:p-28 h-[710px] font-sans w-full max-w-7xl px-4 lg:px-8 py-8 lg:py-16 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:mb-20 gap-5 lg:gap-0">
            {/* Left Content: Header Text */}
            <div className="text-center lg:text-left">
              <p className="text-[#d82e2f] font-bold text-lg mb-2">
                ■ Crispy, Every Bite Taste
              </p>
              <h1 className="text-[#222] text-3xl lg:text-5xl font-bold font-['Bebas_Neue'] tracking-wider">
                POPULAR FOOD ITEMS
              </h1>
            </div>

            {/* Right Content: Navigation Arrows */}
            <div className="flex gap-3">
              <button className="w-10 h-10 lg:w-14 lg:h-14 text-lg lg:text-2xl font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center">
                &#10094;
              </button>
              <button className="w-10 h-10 lg:w-14 lg:h-14 text-lg lg:text-2xl font-semibold text-[#d82e2f] bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center">
                &#10095;
              </button>
            </div>
          </div>

          {/* Food Items Section */}
          <div className="food-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            {/* Food Item Card */}
            <div className="food-item bg-white w-full h-[300px] p-8 shadow-lg rounded-lg text-center flex flex-col items-center">
              <img
                src={assets.images.f1}
                alt="Vegetables Burger"
                className="w-20 h-20 lg:w-28 lg:h-28 mb-4"
              />
              <div className="divider w-14 h-1 bg-[#d82e2f] mx-auto my-3"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#222] font-['Bebas_Neue']">
                VEGETABLES BURGER
              </h3>
              <p className="text-[#555] text-sm lg:text-base font-normal leading-8 tracking-tight mt-1">
                Barbecue Italian cuisine pizza
              </p>
            </div>

            <div className="food-item bg-white w-full h-[300px] p-8 shadow-lg rounded-lg text-center flex flex-col items-center">
              <img
                src={assets.images.f2}
                alt="Special Pizza"
                className="w-20 h-20 lg:w-28 lg:h-28 mb-4"
              />
              <div className="divider w-14 h-1 bg-[#d82e2f] mx-auto my-3"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#222] font-['Bebas_Neue']">
                SPECIAL PIZZA
              </h3>
              <p className="text-[#555] text-sm lg:text-base font-normal leading-8 tracking-tight mt-1">
                Barbecue Italian cuisine pizza
              </p>
            </div>

            <div className="food-item bg-white w-full h-[300px] p-8 shadow-lg rounded-lg text-center flex flex-col items-center">
              <img
                src={assets.images.f3}
                alt="Special French Fries"
                className="w-20 h-20 lg:w-28 lg:h-28 mb-4"
              />
              <div className="divider w-14 h-1 bg-[#d82e2f] mx-auto my-3"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#222] font-['Bebas_Neue']">
                SPECIAL FRENCH FRIES
              </h3>
              <p className="text-[#555] text-sm lg:text-base font-normal leading-8 tracking-tight mt-1">
                Barbecue Italian cuisine
              </p>
            </div>

            <div className="food-item bg-white w-full h-[300px] p-8 shadow-lg rounded-lg text-center flex flex-col items-center">
              <img
                src={assets.images.f2}
                alt="Cuisine Chicken"
                className="w-20 h-20 lg:w-28 lg:h-28 mb-4"
              />
              <div className="divider w-14 h-1 bg-[#d82e2f] mx-auto my-3"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#222] font-['Bebas_Neue']">
                CUISINE CHICKEN
              </h3>
              <p className="text-[#555] text-sm lg:text-base font-normal leading-8 tracking-tight mt-1">
                Japanese Cuisine Chicken
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PopularFood;
