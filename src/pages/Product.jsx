import { useState, useEffect } from 'react';
import productdata from '../assets/data.json';
import categorydata from '../assets/categoryList.json'
import { Link, useParams } from 'react-router';

const Product = () => {
  const { slug } = useParams()

  const [selectedFilter, setselectedFilter] = useState([])
  const [filterItems, setfilterItems] = useState(productdata)
  const [prices, setprices] = useState('all')
  const [filterPriceList, setfilterPriceList] = useState(filterItems)


  function handleFilterItems(selectedCategory) {
    if (selectedFilter.includes(selectedCategory)) {
      let filter = selectedFilter.filter((sl) => sl !== selectedCategory)
      setselectedFilter(filter)
    }
    else {
      setselectedFilter((prevFilter) => [...prevFilter, selectedCategory])
    }
    console.log(selectedFilter)
  }

  useEffect(() => {
    if (slug === 'all') {
      return
    }
    else {
      setselectedFilter((prevFilter) => {
        if (prevFilter.includes(slug)) {
          return prevFilter;
        }
        return [...prevFilter, slug];
      })
    }
  }, [])


  useEffect(() => {
    if (selectedFilter.length > 0) {
      let tempItems = selectedFilter.map((selectedItem) => {
        let items = productdata.filter((f) => f.category === selectedItem)
        return items
      })
      setfilterItems(tempItems.flat())
    }
    else {
      setfilterItems(productdata)
    }
  }, [selectedFilter])

  useEffect(() => {
    if (prices === 'all') {
      setfilterPriceList(filterItems)
    }
    else if (prices === 'over-5000') {
      let priceList = filterItems.filter((items) => items.price >= 5000)
      setfilterPriceList(priceList)
    }
    else {
      const [min, max] = prices.split("-")
      let priceList = filterItems.filter((items) => items.price >= min && items.price <= max)
      setfilterPriceList(priceList)

    }
  }, [prices, filterItems])




  return (

    <section data-theme="halloween" className="min-h-screen bg-black text-gray-300 py-10 font-sans w-full">
      <div className="container mx-auto px-4">
        <div className='w-full mb-8'>
          <h1 className='text-3xl font-bold mb-4 '>Category</h1>
          <div className='flex flex-wrap justify-center gap-2'>
            {
              categorydata.map((cat, i) => {
                return <button onClick={() => { handleFilterItems(cat.slug) }} key={i} className={`btn  ${selectedFilter?.includes(cat.slug) ? 'btn-warning' : 'btn-neutral'}`}>{cat.name}</button>
              })
            }
          </div>
        </div>
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar / Filters Section */}
          <aside className="hidden w-full lg:block lg:w-64 shrink-0">
            <div className="bg-neutral p-6 rounded-box shadow-lg border border-neutral-content/20 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filters
              </h2>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="all" defaultChecked />
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="0-50" />
                  <span className="label-text">0$ - 50$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="50-100" />
                  <span className="label-text">50$ - 100$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="100-500" />
                  <span className="label-text">100$ - 500$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="500-1000" />
                  <span className="label-text">500$ - 1000$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="1000-5000" />
                  <span className="label-text">1000$ - 5000$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="over-5000" />
                  <span className="label-text">Over 5000$</span>
                </label>
              </div>
            </div>
          </aside>

          <button className="btn btn-warning rounded-3xl block lg:hidden" onClick={() => document.getElementById('my_modal_2').showModal()}>Price Filter</button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
               <div className="bg-neutral p-6 rounded-box shadow-lg border border-neutral-content/20 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filters
              </h2>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="all" defaultChecked />
                  <span className="label-text">All</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="0-50" />
                  <span className="label-text">0$ - 50$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="50-100" />
                  <span className="label-text">50$ - 100$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="100-500" />
                  <span className="label-text">100$ - 500$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="500-1000" />
                  <span className="label-text">500$ - 1000$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="1000-5000" />
                  <span className="label-text">1000$ - 5000$</span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="radio" name="price" className="radio" onClick={(e) => { setprices(e.target.value) }} value="over-5000" />
                  <span className="label-text">Over 5000$</span>
                </label>
              </div>
            </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>


          <main className="flex-1 w-full">
            {(filterPriceList.length < 1) ? <h1 className='text-5xl  font-bold mb-4 text-center self-center mx-auto'>No Products in that range.</h1> : ""}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filterPriceList.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="card card-compact bg-neutral shadow-black shadow-lg border border-transparent hover:border-primary/50 transition-all duration-300 group h-full flex flex-col"
                  >


                    <figure className="relative h-52 w-full bg-white/5">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </figure>

                    {/* Badge */}
                    <div className="absolute top-2 right-2">
                      <div className="badge badge-secondary font-bold shadow-md">
                        {product.category}
                      </div>
                    </div>

                    <div className="card-body flex flex-col">
                      <h2 className="card-title text-base text-gray-100 truncate group-hover:text-primary transition-colors">
                        {product.title}
                      </h2>

                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xl font-bold text-primary">${product.price}</span>

                        <span className='flex items-center gap-1 text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-1 rounded-lg whitespace-nowrap'>
                          ★ {product.rating}
                        </span>
                      </div>

                      {/* Push Button to Bottom */}
                      <div className="card-actions justify-end mt-auto pt-4">
                        <Link to={`/products-details/${product.id}`} className="btn btn-warning btn-sm w-full text-black font-bold hover:shadow-[0_0_15px_rgba(255,165,0,0.5)]">
                          Buy Now
                        </Link>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </main>

        </div>
      </div>
    </section>
  );
};

export default Product;