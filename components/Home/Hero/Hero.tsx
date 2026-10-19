import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex w-full h-[145vh] md:h-[120vh] lg:h-[160vh] items-center justify-center flex-col">

      <div className="relative">
        {/* Circle */}
        <div data-aos="zoom-in"
         className="absolute -top-16 -left-10 -z-10 h-36 w-36 rounded-full bg-yellow-300"></div>

        {/* Heading text */}
        <h1
        data-aos="fade-up"
        data-aos-delay="100"
         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800">
          The intelligent way to <br /> manage projects.
        </h1>

        {/* Subheading */}
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="200" className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-center text-gray-500">
        Create custom landing pages with Fastland that <br /> converts more visitors than any website,
      </p>

      <div data-aos="fade-up"
           data-aos-delay="200"
       className="h-20 rounded-full mt-8 md:px-4 w-[95%] md:w-1/2 lg:w-1/3 border-2 border-gray-300 flex items-center justify-between">
        {/* Input */}
        <input
          type="text"
          className="h-[90%] outline-none ml-4 placeholder:text-gray-600 text-gray-600 rounded-full"
          placeholder="@ Enter Your Email"
        />

        <button className="bg-orange-600 cursor-pointer hover:bg-orange-400 transition-all duration-200 px-8 h-[70%] mr-2 md:mr-0 text-sm text-white rounded-full">
          Start Now
        </button>
      </div>

      <div data-aos="fade-up"
          data-aos-delay="300"
      className="mt-15">
        <img src="/images/hero.png" alt="img" width="500" height="500" />
      </div>

    </div>
  )
}

export default Hero