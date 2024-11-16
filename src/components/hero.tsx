import React from 'react'

function Hero() {
  return (
    <section className="flex items-center justify-center h-screen  bg-cover bg-center text-white bg-hero-image rounded-xl mx-4" >
    <div className="text-center max-w-md px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to My Next.js Site</h1>
      <p className="text-lg md:text-xl mb-8">Your journey to learn web development starts here!</p>
      <button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-700 rounded-lg transition duration-300">
        Get Started
      </button>
    </div>
    <div>this a form</div>
  </section>
  )
}

export default Hero