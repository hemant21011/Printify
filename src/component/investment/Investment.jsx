import React from 'react'
import './customStyles.css'

const Investment = () => {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Text and Steps */}
        <div className="mt-20 lg:w-1/2 text-center lg:text-left">
          <h1 className="absolute top-16 text-6xl lg:text-5xl font-bold text-[#00000]  mb-5">
            Start with $0 <br /> investment
          </h1>
          {/* Step 1 */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              <span className="text-3xl mr-2">1</span> Select your product
            </h2>
            <p className="ml-8 text-lg text-gray-600 mt-2">
              Choose from over 1000 top quality products including brands you know and love
            </p>
            <div className="mt-4 mr-5 ml-8 text-2xl ">
              <hr className="border-t-2  border-black animate-line-move" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              <span className="text-3xl mr-2">2</span> Add your design
            </h2>
            <p className="ml-8 text-lg text-gray-600 mt-2">
              Designing your products is easy and fun!
            </p>
            <div className="mt-4 mr-5 ml-8 text-2xl ">
              <hr className="border-t-2  border-black animate-line-move" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              <span className="text-3xl mr-2">3</span> Start selling
            </h2>
            <p className="ml-8 text-lg text-gray-600 mt-2">
              You set your profit margin, we take care of production and delivery
            </p>
            <div className="mt-4 mr-5 ml-8 text-2xl ">
              <hr className="border-t-2  border-black animate-line-move" />
            </div>
          </div>
            <button className='bg-black mt-8 text-white px-7 rounded-md py-5 text-[18px] font-extrabold'>Start designing</button>
            <div className='text-[17px] mt-6 font-bold underline'>Learn more</div>
        </div>

        {/* Right Section: Image/Illustration */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="relative">
            <video
              src="https://printify.com/pfh/assets/steps/design.mp4"
              autoPlay
              className="w-[600px] h-[700px] object-cover"
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Investment