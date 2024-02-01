import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Removecard, clearCart } from '../util/cartSlice';
import Removeitems from "../components/Removeitems"

const Cart = () => {
    const cartitems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const clearcart=()=>{
        dispatch(clearCart())
    }
   
  return (
    <div className='w-9/12 mx-auto'>
          <h2 className='text-center'>cart page</h2>
          <button onClick={clearcart} className='bg-black border-black text-white'>clear cart</button>
          <Removeitems items={cartitems}/>
    </div>
  )
}

export default Cart