import React from "react";
import assets from "../../../assets";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  return (
    // Testimonial Section
    <div className="bg-white text-black flex  justify-center items-center h-auto md:h-[965px] py-8 md:py-0">
      <section className="w-full max-w-7xl px-4 md:px-8 py-8 md:py-16">
        {/* Top Text and Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-red-600 text-lg">■ Crispy, Every Bite Taste</p>
            <h2 className="bebas-font text-3xl md:text-5xl font-bold text-gray-800 mt-2 md:mt-4 text-center md:text-left">
              WHAT SOME OF MY CUSTOMERS SAY
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="arrow left w-12 h-12 md:w-14 md:h-14 text-xl md:text-2xl font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              &#10094;
            </button>
            <button className="arrow right w-12 h-12 md:w-14 md:h-14 text-xl md:text-2xl font-semibold text-[#d82e2f] bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none flex items-center justify-center">
              &#10095;
            </button>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="flex flex-col md:flex-row items-center gap-0 ">
                {/* Image Section (on mobile: above, on desktop: to the right) */}
                <div
                  className="w-full md:w-1/2 h-64 md:h-[555px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${assets.images.testimonial})`,
                  }}
                ></div>

                {/* Testimonial Box */}
                <div className="bg-yellow-500 h-auto md:h-[555px] p-6 md:p-8 text-black w-full md:w-1/2 relative">
                  <p className="text-3xl flex items-start md:text-[3xl] leading-relaxed mb-4">
                    <img src={assets.images.quotation} alt="" />
                    <p>
                      You can't go wrong with Chicken Mandi, I had it twice. The
                      chicken was cooked perfectly, juicy & soft (usually mandi
                      chicken is a bit dry). I would definitely recommend it.
                    </p>
                  </p>
                  <div className="flex items-center justify-between mt-28 md:mt-32 gap-4">
                    <div
                      className="w-10 h-10 bg-center bg-cover rounded-full"
                      style={{ backgroundImage: `url(${assets.images.Image})` }}
                    ></div>
                    <div>
                      <p className="font-semibold">KHALID AL DAWSRY</p>
                      <p className="text-sm">Jeddah, Saudi</p>
                    </div>
                  </div>
                  <hr className="mt-8 border-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center gap-0 ">
                {/* Image Section (on mobile: above, on desktop: to the right) */}
                <div
                  className="w-full md:w-1/2 h-64 md:h-[555px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${assets.images.fish})`,
                  }}
                ></div>

                {/* Testimonial Box */}
                <div className="bg-yellow-500 h-auto md:h-[555px] p-6 md:p-8 text-black w-full md:w-1/2 relative">
                  <p className="text-3xl flex items-start md:text-[3xl] leading-relaxed mb-4">
                    <img src={assets.images.quotation} alt="" />
                    <p>
                      You can't go wrong with Chicken Mandi, I had it twice. The
                      chicken was cooked perfectly, juicy & soft (usually mandi
                      chicken is a bit dry). I would definitely recommend it.
                    </p>
                  </p>
                  <div className="flex items-center justify-between mt-28 md:mt-32 gap-4">
                    <div
                      className="w-10 h-10 bg-center bg-cover rounded-full"
                      style={{ backgroundImage: `url(${assets.images.Image})` }}
                    ></div>
                    <div>
                      <p className="font-semibold">KHALID AL DAWSRY</p>
                      <p className="text-sm">Jeddah, Saudi</p>
                    </div>
                  </div>
                  <hr className="mt-8 border-black" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row items-center gap-0 ">
                {/* Image Section (on mobile: above, on desktop: to the right) */}
                <div
                  className="w-full md:w-1/2 h-64 md:h-[555px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${assets.images.burger})`,
                  }}
                ></div>

                {/* Testimonial Box */}
                <div className="bg-yellow-500 h-auto md:h-[555px] p-6 md:p-8 text-black w-full md:w-1/2 relative">
                  <p className="text-3xl flex items-start md:text-[3xl] leading-relaxed mb-4">
                    <img src={assets.images.quotation} alt="" />
                    <p>
                      This burger delivers everything you'd want from a classic
                      cheeseburger experience. The perfectly seasoned, juicy,
                      and cooked to a nice medium, a smoky depth to each bite.
                      .
                    </p>
                  </p>
                  <div className="flex items-center justify-between mt-28 md:mt-32 gap-4">
                    <div
                      className="w-10 h-10 bg-center bg-cover rounded-full"
                      style={{ backgroundImage: `url(${assets.images.Image})` }}
                    ></div>
                    <div>
                      <p className="font-semibold">KHALID AL DAWSRY</p>
                      <p className="text-sm">Jeddah, Saudi</p>
                    </div>
                  </div>
                  <hr className="mt-8 border-black" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
