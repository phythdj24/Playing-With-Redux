import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: 'Cart',
    initialState:[],
    reducers: {
        addIte:(state, action)=>{
      state.push = [...state, action.payload]
        }
    }
})

export default CartSlice.reducer;