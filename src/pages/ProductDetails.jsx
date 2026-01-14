import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import productdata from "../assets/data.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Slice/CartSlice.js"; 
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  
  const data = productdata.find((p) => p.id === Number(id)) || productdata[0];
  
  const [product, setProduct] = useState(data);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  

  // Calculate Original Price based on Discount
  const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);
  
  const notify = ()=>toast(`${quantity} items added to cart`,{theme: "dark"});
  
  
  
  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-300 body-font font-sans overflow-hidden">
      
      <div className="container px-5 py-12 mx-auto">
        
       
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          
          
          <div className="lg:w-1/2 w-full">
           
            <div className="relative h-100 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center group">
               <img
                alt={product.title}
                className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500"
                src={activeImage}
              />
              {product.discountPercentage > 0 && (
                <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  -{product.discountPercentage}% OFF
                </span>
              )}
            </div>

           
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 shrink-0 rounded-lg cursor-pointer border-2 overflow-hidden bg-neutral-900 ${
                    activeImage === img ? "border-amber-500" : "border-transparent hover:border-neutral-700"
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COL: Product Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            
          
            <h2 className="text-sm title-font text-amber-500 tracking-widest font-bold uppercase mb-1">
              {product.brand}
            </h2>
            <h1 className="text-white text-3xl title-font font-extrabold mb-2">
              {product.title}
            </h1>

          
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                 <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} fill={i < Math.round(product.rating) ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    ))}
                 </div>
                <span className="text-neutral-500 ml-3 text-sm">{product.rating} ({product.reviews.length} Reviews)</span>
              </div>
              <span className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-400 border border-neutral-700">
                SKU: {product.sku}
              </span>
            </div>

           
            <p className="leading-relaxed text-neutral-400 mb-6 border-b border-neutral-800 pb-6">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
               <div className="flex flex-col">
                  <span className="text-neutral-500">Availability</span>
                  <span className={`${product.stock < 10 ? 'text-red-500' : 'text-green-500'} font-semibold`}>
                    {product.availabilityStatus} ({product.stock} left)
                  </span>
               </div>
               <div className="flex flex-col">
                  <span className="text-neutral-500">Dimensions (cm)</span>
                  <span className="text-neutral-300">
                    {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
                  </span>
               </div>
               <div className="flex flex-col">
                  <span className="text-neutral-500">Warranty</span>
                  <span className="text-neutral-300">{product.warrantyInformation}</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-neutral-500">Shipping</span>
                  <span className="text-neutral-300">{product.shippingInformation}</span>
               </div>
            </div>

            {/* Pricing */}
            <div className="flex items-end gap-3 mb-6">
              <span className="title-font font-bold text-4xl text-white">${product.price}</span>
              <span className="text-lg text-neutral-500 line-through mb-1">${originalPrice}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 border-t border-neutral-800 pt-6">
              
              {/* Quantity Counter */}
              <div className="flex items-center border border-neutral-700 rounded-lg overflow-hidden">
                 <button onClick={() => setQuantity(quantity-1)} className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-50" disabled={quantity<=0 ? "true":""}>-</button>
                 <span className="px-4 py-2 bg-neutral-900 text-amber-500 font-bold w-12 text-center">{quantity}</span>
                 <button onClick={() => setQuantity(quantity+1)} className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800" disabled={quantity>=product.stock ? "true":""}>+</button>
              </div>

              {/* Add to Cart */}
            
                <button onClick={()=>{dispatch(addToCart({id:product.id,quantity:quantity,originalPrice:product.price}));notify()}} className="flex-1 text-black bg-amber-500 border-0 py-3 px-8 focus:outline-none hover:bg-amber-400 rounded-lg font-bold transition-colors shadow-lg shadow-amber-900/20">
                Add to Cart
              </button>
              
                      <ToastContainer/>
             
            </div>
             
             {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-neutral-900 text-neutral-500 px-2 py-1 rounded-full border border-neutral-800">#{tag}</span>
                ))}
            </div>

          </div>
        </div>

        {/* --- Reviews Section --- */}
        <div className="mt-20 lg:w-4/5 mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h6 className="text-2xl font-bold text-white">Customer Reviews</h6>
            <div className="h-px flex-1 bg-neutral-800"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-500 to-amber-700 flex justify-center items-center text-black font-bold shadow-lg shadow-amber-900/20">
                      {review.reviewerName[0].toUpperCase()}
                    </div>
                    <div>
                      <h6 className="text-sm font-bold text-white">{review.reviewerName}</h6>
                      <p className="text-xs text-neutral-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-500">
                     {[...Array(5)].map((_, starIndex) => (
                       <svg key={starIndex} fill={starIndex < review.rating ? "currentColor" : "none"} stroke="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                     ))}
                  </div>
                </div>
                <p className="text-neutral-400 text-sm italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;