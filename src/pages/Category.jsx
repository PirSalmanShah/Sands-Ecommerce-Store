import React from 'react'
import data from '../assets/categoryList.json'
import { Link } from 'react-router'

const Category = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-400 body-font font-sans">
      <div className="container px-5 py-24 mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col text-center w-full mb-16">
          <div className="flex justify-center items-baseline gap-2">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
              ALL
            </h1>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-amber-300 tracking-tight animate-pulse">
              Categories
            </h1>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-4 text-neutral-500">
            Explore our wide range of products curated just for you.
          </p>
        </div>

        {/* --- Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((d, i) => {
            return (
             <div key={i} className="group h-full">
              
                <div className="h-full flex flex-row items-center bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
                  
                  {/* Image Container */}
                  <div className="w-1/3 h-32 sm:h-36 shrink-0 relative overflow-hidden">
                    <img 
                      alt={d.name} 
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" 
                      src={d.image || "https://dummyjson.com/image/150"} 
                    />
                    
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors "></div>
                  </div>

                
                  <div className="p-6 flex flex-col justify-center w-2/3">
                    <h2 className="text-white text-xl title-font font-bold mb-2 group-hover:text-amber-400 transition-colors">
                      {d.name}
                    </h2>
                    
                    <Link to={`/products/${d.slug}`} className="inline-flex items-center text-amber-500 font-medium hover:text-amber-300 transition-colors mt-auto">
                      Shop Now
                      <svg 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                
              </div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}

export default Category