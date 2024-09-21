import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Text and CTA */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-semibold text-[#000] mb-6">
            Create and Sell <br /> Custom Products
          </h1>

          {/* Features */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <p className="flex items-center text-lg">
              <span className="mr-2">✔️</span> 100% Free to use
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-2">✔️</span> 900+ products
            </p>
            <p className="flex items-center text-lg">
              <span className="mr-2">✔️</span> Global delivery
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-[#21983d] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#16b867] transition duration-300 mb-4">
            Get started for free
          </button>
          <p className="text-gray-600">No credit card required</p>

          {/* Ratings and Trust Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-2 mt-6">
            <p className="text-black font-semibold">Trusted by 8M+ sellers</p>
            <span>|</span>
            <div className="flex items-center">
              <span className="text-[#000000] mr-2">⭐⭐⭐⭐⭐</span>
              <span className="text-[#464225] font-bold">4.8</span>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s"
              alt="Shopify"
              className="h-6 ml-2"
            />
           
          </div>
        </div>

        {/* Right Section: Image/Illustration */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <video
            src="https://printify.com/pfh/assets/hero/newbies-hero-horizontal.mp4"
            autoPlay
            className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
