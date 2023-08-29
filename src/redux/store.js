import { configureStore } from '@reduxjs/toolkit'
import bagReducer from '../features/bag/bagSlice'
import filterReducer from '../features/filters/filterSlice'
import sortReducer from '../features/sort/sortSlice'
import { productsApi } from '../features/products/products-api-slice'

// Redux Store configured using redux toolkit and react-redux bindings
export const store = configureStore({
  reducer: {
    bag: bagReducer,
    filter: filterReducer,
    sort: sortReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
    //middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})