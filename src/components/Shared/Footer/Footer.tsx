import React from "react";
import assets from "../../../assets";

const Footer = () => {
  return (
    <div>
      <footer
        className=" w-full relative bg-cover bg-center  mx-auto py-16 px-4 sm:px-8 lg:px-20 text-white font-sans"
        style={{
          backgroundImage: `url(${assets.images.table})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative max-w-7xl w-full mx-auto py-12 lg:py-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight text-center mb-10 bebas-font">
            WE'RE READY TO GIVE YOU THE BEST DINING EXPERIENCE
          </h2>

          {/* Information Sections */}
          <div className="flex flex-col gap-8 lg:flex-row justify-between items-center text-center text-gray-300">
            <div className="flex flex-col items-center text-center w-80 h-36 gap-4">
              <div className="text-yellow-400 text-5xl mb-4">
                <img src={assets.images.clock} alt="" />
              </div>
              <h3 className="text-lg font-semibold bebas-font text-white">
                OPENING HOURS
              </h3>
              <p>
                Monday - Sunday
                <br />
                9:00 AM to 11:30 PM
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-80 h-36 gap-4">
              <div className="text-yellow-400 text-5xl mb-4">
                <img src={assets.images.talk} alt="" />
              </div>
              <h3 className="text-lg font-semibold bebas-font text-white">
                LET'S TALK
              </h3>
              <p>
                Phone: 1-800-222-4545
                <br />
                Fax: 1-800-222-4545
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-80 h-36 gap-4">
              <div className="text-yellow-400 text-5xl mb-4">
                <img src={assets.images.email} alt="" />
              </div>
              <h3 className="text-lg font-semibold bebas-font text-white">
                BOOK A TABLE
              </h3>
              <p>
                Email: demo@website.com
                <br />
                Support: support@website.com
              </p>
            </div>

            <div className="flex flex-col items-center text-center w-80 h-36 gap-4">
              <div className="text-yellow-400 text-5xl mb-4">
                <img src={assets.images.email} alt="" />
              </div>
              <h3 className="text-lg font-semibold bebas-font text-white">
                OUR ADDRESS
              </h3>
              <p>
                123 Street, New York City,
                <br />
                United States of America
              </p>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="relative z-10 mt-12 flex flex-col items-center text-center">
          <div className="flex justify-center items-center text-center space-x-4 text-white mb-6">
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center border-2 border-white rounded-full bg-white text-white"
            >
              <img src={assets.images.fb} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center border-2 border-white rounded-full bg-white text-black"
            >
              <img src={assets.images.li} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center border-2 border-white rounded-full bg-white text-black"
            >
              <img src={assets.images.x} alt="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex justify-center items-center border-2 border-white rounded-full bg-white text-black"
            >
              <img
                src={assets.images.instagram}
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; 2024 <span className="text-yellow-400">Niomax</span> All
            Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
