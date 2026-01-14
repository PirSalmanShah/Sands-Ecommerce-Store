import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../store/Slice/CartSlice'
import { useNavigate } from 'react-router'
const CheckOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>

            <div className="w-full max-w-2xl mx-auto bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Checkout Details</h2>

                <form className="space-y-6">
                    {/* --- Personal Information --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text text-neutral-400">First Name</span></label>
                            <input type="text" placeholder="Salman" className="input input-bordered bg-neutral-950 border-neutral-700 text-white focus:border-amber-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text text-neutral-400">Last Name</span></label>
                            <input type="text" placeholder="Shah" className="input input-bordered bg-neutral-950 border-neutral-700 text-white focus:border-amber-500" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label"><span className="label-text text-neutral-400">Email Address</span></label>
                            <input type="email" placeholder="salman@example.com" className="input input-bordered bg-neutral-950 border-neutral-700 text-white focus:border-amber-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text text-neutral-400">Phone Number</span></label>
                            <input type="tel" placeholder="+92 300 000000 0" className="input input-bordered bg-neutral-950 border-neutral-700 text-white focus:border-amber-500" />
                        </div>
                    </div>

                    {/* --- Payment Information --- */}
                    <div className="mt-8 pt-6 border-t border-neutral-800">
                        <h3 className="text-lg font-semibold text-amber-500 mb-4">Payment Method</h3>

                        <div className="form-control mb-4">
                            <label className="label"><span className="label-text text-neutral-400">Card Number</span></label>
                            <div className="relative">
                                <input type="text" placeholder="0000 0000 0000 0000" className="input input-bordered w-full bg-neutral-950 border-neutral-700 text-white focus:border-amber-500 pl-12" />
                                <svg className="w-6 h-6 absolute left-4 top-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label"><span className="label-text text-neutral-400">Expiry Date</span></label>
                                <input type="text" placeholder="MM/YY" className="input input-bordered bg-neutral-950 border-neutral-700 text-white focus:border-amber-500" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-neutral-400">CVV</span></label>
                                <input type="password" placeholder="***" className="input input-bordered bg-neutral-950 border-neutral-700 text-white focus:border-amber-500" />
                            </div>
                        </div>
                    </div>


                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button type="submit" className="btn btn-primary w-full mt-6 bg-amber-500 hover:bg-amber-600 border-none text-black font-bold text-lg shadow-lg shadow-amber-900/20" onClick={() => document.getElementById('my_modal_5').showModal()}>Pay Now</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Confirm Payment</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                <button  className="btn btn-primary mt-6 bg-amber-500 hover:bg-amber-600 border-none text-black font-bold text-lg shadow-lg shadow-amber-900/20" onClick={() => {dispatch(clearCart());
                                navigate("/products/all",{replace:true})}
                            }>Pay Now</button>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-primary mt-6 mx-8 bg-neutral-500 hover:bg-amber-600 border-none text-black font-bold text-lg shadow-lg shadow-amber-900/20">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </form>
            </div>
        </div>
    )
}

export default CheckOut
