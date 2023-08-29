import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: "",
}

/**
 * Sort slice of the application state
 * Holds selected "sort products by" option.
 */
export const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.sortBy = action.payload
        },
    }
})

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;