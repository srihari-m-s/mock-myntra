import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


/**
 * RTK Query to retrieve shop data from FakeStore API
 * Generates hooks to fetch clothing from Men and Women category
 */
export const productsApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com"
    }),
    endpoints(builder){
        return {
            fetchWomenProducts: builder.query({
                query(limit = 10){
                    return `/products/category/women's%20clothing?limit=${limit}`;
                }
            }),
            fetchMenProducts: builder.query({
                query(limit = 10){
                    return `/products/category/men's%20clothing?limit=${limit}`;
                }
            })
        }
    }
})

export const { useFetchWomenProductsQuery, useFetchMenProductsQuery } = productsApi;