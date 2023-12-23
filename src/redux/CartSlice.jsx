import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "Cart",
    initialState:[],
    reducers:{
        AddItem:(state, action)=>{
         state.push(action.payload)
        }
    }
})

export const {AddItem} = CartSlice.actions;

export default CartSlice.reducer;