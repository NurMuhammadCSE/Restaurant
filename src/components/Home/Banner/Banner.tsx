import React from "react";
import assets from "../../../assets";

const Banner = () => {
  return (
    <section className="bg-[#b93329]  ">
      <div className="md:h-[740px] px-6 md:px-[50px] flex justify-center overflow-hidden relative py-10 md:py-0">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center md:items-center gap-8">
          {/* Left Side - Text Content */}
          <div className="flex md:w-1/2 flex-col gap-4 z-10 md:text-left">
            {/* Headline Text */}
            <h1
              className="text-white absolute -pb-[300px] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight md:leading-[100px] tracking-tight"
              style={{
                background:
                  "linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)",
                WebkitBackgroundClip: "text", // For Safari support
              }}
            >
              TASTE THE AUTHENTIC <br className="hidden md:block" />
              SAUDI CUISINE
            </h1>

            {/* Subtext */}
            <p className="text-white text-[16px] relative mt-48 sm:text-[18px] md:text-[24px] font-roboto leading-[24px] md:leading-[32px] max-w-full md:max-w-[559px]">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>

            {/* Explore Menu Button */}
            <a
              href="#"
              className="bg-[#febf00] text-[#0a1425] font-bold text-sm md:text-base px-6 py-3 md:py-4 mt-4 md:mt-6 w-[160px] md:w-[180px] text-center transition-opacity hover:bg-yellow-400"
            >
              EXPLORE MENU
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {/* Image of Food */}
            <img
              src={assets.images.food}
              alt="Saudi Cuisine"
              className="object-cover w-full max-w-[400px] md:max-w-none md:mx-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
