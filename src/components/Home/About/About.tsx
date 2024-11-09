import React, { useState } from "react";
import assets from "../../../assets";

const About = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-white text-black font-sans">
      <section className="flex flex-col lg:flex-row items-center max-w-screen-xl lg:h-[600px] mx-auto py-12 px-4 md:px-6 lg:px-12 gap-8">
        {/* Left Section (Image + Experience Badge) */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={assets.images.tomato}
            alt="Burger and Beer"
            className="w-full max-w-[600px] h-auto object-cover"
          />
          <div className="absolute w-[160px] md:w-[200px] h-20 md:h-24 top-4 md:top-6 left-4 md:left-6 bg-white p-4 rounded-lg flex items-center gap-2 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 md:w-[60px] md:h-[60px] text-black text-lg md:text-xl border-x-4 border-y-4 rounded-full border-yellow-300 font-bold">
              50+
            </div>
            <div className="text-black font-semibold text-xs md:text-sm">
              Market Experiences
            </div>
          </div>
        </div>

        {/* Right Section (Text Content) */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 lg:text-left px-4 md:px-0">
          {/* Tabs */}
          <div className="flex justify-center lg:justify-start space-x-4 md:space-x-8 text-black">
            <button
              onClick={() => setActiveTab("about")}
              className={`hover:text-white hover:bg-red-800 px-4 py-2 border-b-2 ${
                activeTab === "about" ? "border-red-500" : "border-transparent"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`hover:text-white hover:bg-red-800 px-4 py-2 border-b-2 ${
                activeTab === "experience"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`hover:text-white hover:bg-red-800 px-4 py-2 border-b-2 ${
                activeTab === "contact"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "about" && (
            <>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
              </h2>
              <p className="text-black text-sm md:text-base">
                LAt our restaurant, we pride ourselves on offering an
                exceptional culinary experience, where every dish is crafted
                with passion and precision. Our chefs combine the finest
                ingredients with innovative cooking techniques to create meals
                that are not only delicious but also a feast for the senses.
              </p>
            </>
          )}
          {activeTab === "experience" && (
            <>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                UNPARALLELED CULINARY EXPERIENCE
              </h2>
              <p className="text-black text-sm md:text-base">
                With over 50 years of culinary expertise, our restaurant offers
                an unparalleled dining experience where tradition meets
                innovation. Each dish is thoughtfully prepared by our team of
                skilled chefs, ensuring a perfect balance of flavors and
                presentation. From farm-fresh ingredients to locally sourced
                produce, every meal is designed to deliver the highest quality
                and taste.
              </p>
            </>
          )}
          {activeTab === "contact" && (
            <>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-black text-sm md:text-base">
                Whether you have a question, need assistance with your
                reservation, or want to share your feedback, we are here to
                help! Our team is dedicated to ensuring your experience is
                nothing short of exceptional. We encourage you to reach out for
                any inquiries or concerns you may have, and we'll respond
                promptly. Visit us, call us, or connect with us online – we’re
                always ready to assist you. Your satisfaction is our priority,
                and we look forward to hearing from you! Contact us today and
                let’s make great things happen together!
              </p>
            </>
          )}

          {/* About Button and Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <a
              href="#"
              className="bg-yellow-500 text-black font-semibold py-2 px-4 md:py-3 md:px-6 hover:bg-yellow-600"
            >
              ABOUT MORE
            </a>
            <a
              href="tel:+883426739485"
              className="text-red-500 flex items-center space-x-2"
            >
              <img
                src={assets.images.Vector}
                alt="Phone Icon"
                className="w-5 h-5"
              />
              <span className="text-black font-semibold">+88 3426 739 485</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 max-w-screen-xl mx-auto py-8 px-4 md:px-6 lg:px-12 text-gray-800">
        {/* Fast Delivery */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-1/3 space-y-4 md:space-y-0">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-lg">
            <img
              src={assets.images.bag}
              alt="Fast Delivery Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          <div className="text-black md:ml-4">
            <h3 className="text-xl font-semibold">FAST DELIVERY</h3>
            <p className="text-sm md:text-base">Within 30 minutes</p>
          </div>
        </div>

        {/* Absolute Dining */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-1/3 space-y-4 md:space-y-0">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-lg">
            <img
              src={assets.images.medal}
              alt="Absolute Dining Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          <div className="text-black md:ml-4">
            <h3 className="text-xl font-semibold">ABSOLUTE DINING</h3>
            <p className="text-sm md:text-base">Best buffet restaurant</p>
          </div>
        </div>

        {/* Pickup Delivery */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-1/3 space-y-4 md:space-y-0">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-lg">
            <img
              src={assets.images.packages}
              alt="Pickup Delivery Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </div>
          <div className="text-black md:ml-4">
            <h3 className="text-xl font-semibold">PICKUP DELIVERY</h3>
            <p className="text-sm md:text-base">Grab your food order</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
