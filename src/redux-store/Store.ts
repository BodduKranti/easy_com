import { configureStore } from "@reduxjs/toolkit";
import ProductSliceReducer from "./ProductSlice";


export const Store = configureStore({
    reducer: {
        products: ProductSliceReducer
    }
})

export type AppState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch