import React from 'react'

const Downloadsection = () => {
  return (
    <div className="w-full flex justify-center min-h-screen items-center px-4 py-10">

      <div data-aos="zoom-out"
        className="relative w-full max-w-6xl min-h-[180px] md:h-[200px] rounded-2xl overflow-hidden shadow-lg flex items-center">

        {/* Background */}
        <div className="absolute inset-0 bg-indigo-600"></div>
        <div className="absolute right-0 top-0 h-full md:w-[50%] bg-teal-400"></div>

        {/* Content */}
        <div className="relative z-10 flex md:flex-row items-start md:items-center justify-between gap-6 w-full px-6 md:px-12 py-6 md:py-0">

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center md:text-left max-w-md">
            Get started by <br className="hidden sm:block" />
            downloading apps
          </h2>

          <button className="bg-white w-full sm:w-auto cursor-pointer text-black font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition text-base sm:text-lg">
            Download App
          </button>

        </div>

      </div>

    </div>
  )
}

export default Downloadsection