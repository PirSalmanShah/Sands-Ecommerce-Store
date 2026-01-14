import React from 'react'

import SwiperSlider from '../components/LandingPageComponents/SwiperSlider'
import HeroCards from '../components/LandingPageComponents/HeroCards'
const LandingPage = () => {
  return (
    <section className="text-gray-600 body-font">

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">

 
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">

          <div className="mb-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Elevate Your Everyday. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-600">
              Premium Essentials.
            </span>
          </h1>

          <p className="text-neutral-400 max-w-lg mb-8 text-sm md:text-base leading-relaxed hidden md:block">
            Discover our curated selection of high-quality fashion, beauty, and fragrances designed for the modern lifestyle.
          </p>

          {/* CTA Button - Styled with amber gradient */}
          <button className="w-fit px-8 py-3 bg-linear-to-r from-amber-500 to-amber-700 text-white font-bold rounded-full shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
            Explore Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          </div>
        </div>

        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 relative">
          <img
            className="object-cover object-center w-full h-full rounded-2xl grayscale contrast-125 brightness-110 drop-shadow-2xl"
            alt="S&S Store Lifestyle"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
            style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
          />
        </div>

      </div>

      <div className='relative my-10 '>
            <div className="absolute -inset-1 bg-amber-800 blur"></div>
            <div className='relative bg-black'>
                <h1 className='text-6xl my-20 text-center text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-600 tracking-tight font-extrabold py-5'>Choose form Best Brands</h1>
            </div>
            
      </div>
     <SwiperSlider/>

      <div className='relative my-10 '>
            <div className="absolute -inset-1 bg-amber-800 blur"></div>
            <div className='relative bg-black'>
                <h1 className='text-6xl my-20 text-center text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-600 tracking-tight font-extrabold py-5'>Best Sellers</h1>
            </div>
            
      </div>
      
        <HeroCards/>

        <div className='relative my-10 '>
            
            <div className='relative bg-linear-to-r form-amber-300 to-amber-600 animate-pulse'>
                <h1 className='text-6xl my-20 text-center text-white tracking-tight font-extrabold py-5'>GET 15% OFF -LIMITED TIME</h1>
            </div>
            
      </div>
      
    </section>
  )
}

export default LandingPage
