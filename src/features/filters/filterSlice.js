import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [],
    brandsId: [],
    priceArray: [],
    discountArray: [],
    searchString: "", 
}


/**
 * Filter Slice of the application State
 * Holds state for - 
 * 1. Men, Women, Girls, Boys filter
 * 2. Brands filter
 * 3. Price filter
 * 4. Discounts filter
 * 5. Search String for traditional search
 */
export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        // Reducer for 1. Men, Women, Girls, Boys filter
        setCategory: (state, action) => {
            state.category.push(action.payload)
        },
        removeCategory: (state, action) => {
            state.category = state.category.filter(cat => cat !== action.payload)
        },

        // Reducers for Brands filter
        setBrandsId: (state, action) => {
            state.brandsId.push(action.payload)
        },
        removeBrandsId: (state, action) => {
            state.brandsId = state.brandsId.filter(brandsId => brandsId !== action.payload)
        },

        // Reducers for Price filter
        setPriceArray: (state, action) => {
            state.priceArray.push(action.payload)
        },
        removePriceArray: (state, action) => {
            state.priceArray = state.priceArray.filter(price => price.lowerPrice !== action.payload.lowerPrice)
        },

        // Reducers for Discount filter
        setDiscountArray: (state, action) => {
            state.discountArray.push(action.payload)
        },
        removeDiscountArray: (state, action) => {
            state.discountArray = state.discountArray.filter(discount => discount !== action.payload)
        },

        // Reducer for traditional search string
        setSearchString: (state, action) => {
            state.searchString = action.payload
        }
    },
})

export const { setCategory, removeCategory, setBrandsId, removeBrandsId, setPriceArray, removePriceArray, setDiscountArray, removeDiscountArray, setSearchString } = filterSlice.actions;

export default filterSlice.reducer;