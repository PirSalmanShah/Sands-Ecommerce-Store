import React from 'react'

const HeroCards = () => {
  return (
    <div className='flex justify-center gap-8 my-20 perspective-midrange'>

  {/* Card 1: Left Rotate */}
  <div className="size-80 transform-3d rotate-y-45 rounded-4xl bg-neutral-800 text-neutral-200 hover:rotate-y-0 duration-300 ease-in shadow-2xl shadow-black/50 overflow-hidden group border border-neutral-700/50">
    <div className='h-[50%] flex justify-center items-center bg-neutral-700/30 p-4'>
      <img
        src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
        className='w-full h-full object-contain drop-shadow-lg group-hover:scale-110 duration-300'
        alt="Powder Canister"
      />
    </div>

    <div className='bg-neutral-800 h-[50%] p-5 flex flex-col justify-between'>
      {/* Top Section: Title & Rating */}
      <div>
        <div className='flex justify-between items-start gap-2 mb-2'>
          <h1 className='text-white font-bold text-lg leading-tight'>Powder Canister</h1>
          <span className='flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-1 rounded-lg whitespace-nowrap'>
            ★ 4.64
          </span>
        </div>
        <p className='text-xs text-neutral-400 leading-relaxed line-clamp-3'>
          The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula.
        </p>
      </div>

      
      <div className='flex flex-wrap gap-2'>
        <span className='text-[10px] font-medium text-neutral-300 bg-neutral-700 border border-neutral-600 px-2 py-1 rounded-full uppercase tracking-wider'>
          beauty
        </span>
        <span className='text-[10px] font-medium text-neutral-300 bg-neutral-700 border border-neutral-600 px-2 py-1 rounded-full uppercase tracking-wider'>
          face powder
        </span>
      </div>
    </div>
  </div>

  {/* Card 2: Center Depth */}
  <div className="size-80 rounded-4xl bg-neutral-800 text-neutral-200 -translate-z-45 hover:translate-z-0 duration-300 ease-in shadow-2xl shadow-black/50 overflow-hidden group border border-neutral-700/50">
    <div className='h-[50%] flex justify-center items-center bg-neutral-700/30 p-4'>
      <img
        src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
        className='w-full h-full object-contain drop-shadow-lg group-hover:scale-110 duration-300'
        alt="Calvin Klein CK One"
      />
    </div>

    <div className='bg-neutral-800 h-[50%] p-5 flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-start gap-2 mb-2'>
          <h1 className='text-white font-bold text-lg leading-tight'>Calvin Klein CK One</h1>
          <span className='flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-1 rounded-lg whitespace-nowrap'>
            ★ 4.37
          </span>
        </div>
        <p className='text-xs text-neutral-400 leading-relaxed line-clamp-3'>
          CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.
        </p>
      </div>

      <div className='flex flex-wrap gap-2'>
        <span className='text-[10px] font-medium text-neutral-300 bg-neutral-700 border border-neutral-600 px-2 py-1 rounded-full uppercase tracking-wider'>
          fragrances
        </span>
        <span className='text-[10px] font-medium text-neutral-300 bg-neutral-700 border border-neutral-600 px-2 py-1 rounded-full uppercase tracking-wider'>
          perfumes
        </span>
      </div>
    </div>
  </div>

  {/* Card 3: Right Rotate */}
  <div className="size-80 transform-3d -rotate-y-45 rounded-4xl bg-neutral-800 text-neutral-200 hover:rotate-y-0 duration-300 ease-in shadow-2xl shadow-black/50 overflow-hidden group border border-neutral-700/50">
    <div className='h-[50%] flex justify-center items-center bg-neutral-700/30 p-4'>
      <img
        src="https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp"
        className='w-full h-full object-contain drop-shadow-lg group-hover:scale-110 duration-300'
        alt="Blue & Black Check Shirt"
      />
    </div>

    <div className='bg-neutral-800 h-[50%] p-5 flex flex-col justify-between'>
      <div>
        <div className='flex justify-between items-start gap-2 mb-2'>
          <h1 className='text-white font-bold text-lg leading-tight'>Blue & Black Shirt</h1>
          <span className='flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-1 rounded-lg whitespace-nowrap'>
            ★ 3.64
          </span>
        </div>
        <p className='text-xs text-neutral-400 leading-relaxed line-clamp-3'>
          The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Suitable for casual occasions.
        </p>
      </div>

      <div className='flex flex-wrap gap-2'>
        <span className='text-[10px] font-medium text-neutral-300 bg-neutral-700 border border-neutral-600 px-2 py-1 rounded-full uppercase tracking-wider'>
          clothing
        </span>
        <span className='text-[10px] font-medium text-neutral-300 bg-neutral-700 border border-neutral-600 px-2 py-1 rounded-full uppercase tracking-wider'>
          mens clothing
        </span>
      </div>
    </div>
  </div>

</div>
  )
}

export default HeroCards
