import React from 'react'
import { Link } from 'react-router' // Ensure this matches your router version (react-router-dom usually)
import { useDispatch, useSelector } from 'react-redux'
import { addCount, subCount, removeItem } from '../store/Slice/CartSlice' // Update path if needed

const Cart = () => {
  const dispatch = useDispatch()


  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice)


  const shippingCost = 15.00;
  const grandTotal = totalPrice + shippingCost;

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-neutral-950 text-neutral-300 font-sans py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
        <p className="text-neutral-500 mb-8">Looks like you haven't added anything yet.</p>
        <Link to="/" className="px-8 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition">
          Start Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-300 font-sans py-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-center gap-2 mb-8 border-b border-neutral-800 pb-4">
          <h1 className="text-3xl font-extrabold text-white">Your <span className="text-amber-500">Cart</span></h1>
          <span className="text-neutral-500 text-lg">({cartItems.length} items)</span>
        </div>


        <div className="flex flex-col lg:flex-row gap-8">


          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="group flex flex-col sm:flex-row items-center gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:border-amber-500/30 transition-all duration-300">

                {/* Image */}
                <div className="w-24 h-24  bg-white/5 rounded-lg p-2 flex items-center justify-center">
                  <img src={item.thumbnail} alt={item.title} className="max-w-full max-h-full object-contain" />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.brand}</p>
                  <p className="text-xs text-neutral-600 mt-1">Unit Price: ${item.originalPrice}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-neutral-700 rounded-lg overflow-hidden bg-neutral-800">
                  <button
                    onClick={() => dispatch(subCount(item.id))}
                    disabled={item.quantity <= 1}
                    className="px-3 py-1 text-white hover:bg-neutral-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-amber-500 font-bold min-w-7.5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addCount(item.id))}
                    className="px-3 py-1 text-white hover:bg-neutral-700 transition"
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-center sm:items-end gap-2 min-w-25">
                  
                  <span className="text-xl font-bold text-white">${item.cartTotalPrice.toFixed(2)}</span>

                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-xs text-red-500 hover:text-red-400 hover:underline flex items-center gap-1 transition cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </button>
                </div>

              </div>
            ))}

            {/* Back to Shopping Link */}
            <Link to="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mt-4 font-medium transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
              Continue Shopping
            </Link>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl sticky top-4 shadow-lg shadow-black/50">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  {/* Use Redux TotalPrice */}
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Shipping Estimate</span>
                  <span className="text-white">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Tax Estimate</span>
                  <span className="text-white">$0.00</span>
                </div>

                <div className="border-t border-neutral-800 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-white">Order Total</span>
                  <span className="text-2xl font-bold text-amber-500">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
                
              <Link to={"/checkout"} className="btn w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-lg shadow-lg shadow-amber-900/20 transition-all active:scale-95">
                Checkout Now
              </Link>

              <div className="mt-6 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-xs text-neutral-500">SECURE CHECKOUT</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Cart