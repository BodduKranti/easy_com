import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./ProductSlice";
import CartItemssliceReducer from "./CartItemsslice";


export const Store = configureStore({
    reducer: {
        products: ProductSliceReducer,
        cart: CartItemssliceReducer
    }
})

export type AppState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch