import React from 'react'

const Connectus = () => {
  return (
    <div className="py-16">

      <div className="w-[80%] sm:mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

        {/* Image */}
        <div>
          <img data-aos="zoom-in"
            src={"/images/w2.png"}
            alt="about"
            width={600}
            height={600}
          />
        </div>

        {/* Text content */}
        <div>

          {/* Title */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:w-4/5">
            Connect with team members with ease.
          </div>

          <p className="text-gray-600 text-lg mt-6 sm:w-4/5">
            Create custom landing pages with Fastland that converts more visitors than any website. Easy, Reliable & Fast.
          </p>

          <div>
            <button className="mt-6 text-orange-400 font-medium cursor-pointer text-lg">
              Get Started Now
            </button>

            {/* Underline */}
            <span className="block w-36 h-1 mt-2 bg-orange-400"></span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Connectus