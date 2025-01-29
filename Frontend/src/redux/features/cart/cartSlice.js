import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers:{
        addtoCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!existingItem){
                state.cartItems.push(action.payload)
                alert("Item added successfully")
            }else(
                alert("Item already in cart")
            )
        }
    }
})

export const {addtoCart} = cartSlice.actions;
export default cartSlice.reducer;