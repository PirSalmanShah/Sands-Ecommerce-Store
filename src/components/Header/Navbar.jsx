import React, { useState } from 'react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state)=>state.cart.cartItems);

  return (
    <nav className=" w-full z-50 top-0 start-0 border-b border-white/10 bg-black/80 backdrop-blur-md text-white">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        
        
        <Link to="/" className="font-[inter] font-bold italic text-3xl sm:text-4xl cursor-pointer text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-600 hover:to-amber-400 transition-all">
          S&S
        </Link>

        <div className='hidden md:flex flex-1 justify-center'>
          <ul className='flex gap-8 font-medium text-lg text-neutral-300'>
            <li>
              <Link to={'category'} className='cursor-pointer'>
                Categories
              </Link>
            </li>
            <li>
              <Link to={'products/all'} className='cursor-pointer'>
                Products
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="flex items-center gap-4">
          
          <Link to={"/cart"} className="relative group cursor-pointer hover:scale-110 transition-transform">
            
             <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
             
             {cart.length>0 && (<span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-black">{cart.length}</span>)}
             
          </Link>

          {/* Mobile Menu Button (Visible only on small screens) */}
          <button 
            className="md:hidden text-neutral-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
               // X Icon
               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            ) : (
               // Hamburger Icon
               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
            )}
          </button>
        </div>

      </div>

   
      <div className={`md:hidden bg-neutral-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className='flex flex-col gap-4 p-6 text-center font-medium text-lg text-neutral-300'>
            <li>
                <Link to={'category'} onClick={() => setIsMenuOpen(false)} className='block py-2 hover:text-amber-400 transition-colors'>Categories</Link>
            </li>
            <li>
                <Link to={'products/all'} onClick={() => setIsMenuOpen(false)} className='block py-2 hover:text-amber-400 transition-colors'>Products</Link>
            </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar