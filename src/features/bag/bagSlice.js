import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInBag: [],
    itemsInWishlist: [],
}


/**
 * Bag Slice of the application state.
 * Holds items in Wishlist and Bag/Cart
 */
export const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        addToBag: (state, action) => {
            state.itemsInBag.push(action.payload)
        },
        removeFromBag: (state, action) => {
            state.itemsInBag = state.itemsInBag.filter(item => item.id !== action.payload.id)
        },
        setItemQty: (state, action) => {
            state.itemsInBag.forEach((item, index) => {
                if(item.id === action.payload.id){
                    item = {...item, itemCount: action.payload.count};
                    state.itemsInBag.splice(index,1, item);
                }
            })
        },
        addToWishlist: (state, action) => {
            state.itemsInWishlist.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            state.itemsInWishlist = state.itemsInWishlist.filter(item => item.id !== action.payload)
        },
    },
})

export const { addToBag, removeFromBag, addToWishlist, removeFromWishlist, setItemQty} = bagSlice.actions;

export default bagSlice.reducer;