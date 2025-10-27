import React from 'react'
import Logo from './imgs/Logo.png';

function Ozzy() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
  backgroundImage: `url('./imgs/Logo.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#173D33] opacity-0 pointer-events-none"></div>

  {/* Optional background frame */}
  <div className="absolute inset-10 bg-[#B29C87] opacity-70 pointer-events-none z-0 rounded-lg"></div>

  <div className="container mx-auto relative z-10">
    <div className="flex justify-start">
      <div className="w-full lg:w-full">
        <h3 className="text-sm md:text-md text-white mb-2">Subheading</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Main Heading</h2>
        <p className="text-white text-lg mb-6">
          Convallis a cras semper auctor neque. Tellus pellentesque eu tincidunt tortor aliquam nulla.
          Lectus urna duis convallis convallis tellus id interdum velit laoreet.
        </p>
        <a
          href="https://mobiri.se"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Ozzy