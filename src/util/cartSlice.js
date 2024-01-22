import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        additem:(state,action)=>{
            state.items.push(action.payload);
        },
        Removecard:(state,action)=>{
         state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {additem,Removecard,clearCart}=cartSlice.actions
export default cartSlice.reducer;