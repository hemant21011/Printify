import React from 'react';

const Ideas = () => {
  return (
    <div className="max-w-full my-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-extrabold my-10 text-center">Ideas and Inspiration</h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* Left side image */}
          <div className="w-full md:w-6/12">
            <img
              src="https://printify.com/pfh/assets/products-display/grid-image-1.png"
              alt="Display"
              className="w-full h-[400px] md:h-[710px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side grid */}
          <div className="w-full md:w-6/12 flex flex-col gap-4">
            {/* Top Image */}
            <div className="w-full h-60 md:h-96">
              <img
                src="https://printify.com/pfh/assets/products-display/grid-image-2.png"
                alt="Display"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Bottom two smaller images */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <img
                  src="https://printify.com/pfh/assets/products-display/grid-image-3.png"
                  alt="Display"
                  className="w-full h-48 md:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://printify.com/pfh/assets/products-display/grid-image-4.png"
                  alt="Display"
                  className="w-full h-48 md:h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ideas;
