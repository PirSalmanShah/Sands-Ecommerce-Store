import { createSlice } from "@reduxjs/toolkit";
import productdata from "../../assets/data.json";

const initialState ={
    totalPrice: 0,
    cartItems:[],

}

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const {id,quantity,originalPrice} = action.payload
            const cartPrice = originalPrice*quantity;
            // check if item is present in cart ,if not then the value will be undefined
            const findItem = state.cartItems.find((f)=> f.id === id)
            if(!findItem){

                let newItem = productdata.find((f)=> f.id === id)
                newItem.quantity =quantity;
                newItem.originalPrice =originalPrice;
                newItem.cartTotalPrice= cartPrice; 
                state.cartItems.push(newItem)
            }
            else{
                state.cartItems =state.cartItems.map((item)=>{
                    if(item.id===findItem.id){
                        const newQuantity = item.quantity + quantity
                        const newCartTotalPrice = item.cartTotalPrice + cartPrice;
                        return {...item,quantity: newQuantity,cartTotalPrice:newCartTotalPrice}
                    }
                    return item
                })
            }
            state.totalPrice = state.cartItems.reduce((acc,cur)=>acc+cur.cartTotalPrice,0)
        },
        addCount:(state,action)=>{
            state.cartItems = state.cartItems.map((item)=>{
                if(item.id== action.payload){

                    return {...item,quantity:item.quantity+1,cartTotalPrice:item.cartTotalPrice+item.originalPrice}
                }
                return item
            })
            console.log("store fired")
            state.totalPrice = state.cartItems.reduce((acc,cur)=>acc+cur.cartTotalPrice,0)
        },
        subCount:(state,action)=>{
            state.cartItems = state.cartItems.map((item)=>{
                if(item.id== action.payload){
                    return {...item,quantity:item.quantity-1,cartTotalPrice:item.cartTotalPrice-item.originalPrice}
                }
                return item
            })
            state.totalPrice = state.cartItems.reduce((acc,cur)=>acc+cur.cartTotalPrice,0)
        },
        removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter((item)=> item.id!== action.payload)
        },
        clearCart:(state)=>{
            state.cartItems = []
        }

    }

})

export const {addToCart,addCount,subCount,removeItem,clearCart}=CartSlice.actions

export default CartSlice.reducer