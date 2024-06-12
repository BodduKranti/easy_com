import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    productStore: [],
    productTitle: "Samsung"
}

const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {
        addProduct: (state: any, action: PayloadAction<any>) => {
            state.productStore = []
        },
    },
    extraReducers: (build: any) => {

    }
})

export const { addProduct } = ProductSlice.actions
export default ProductSlice.reducer