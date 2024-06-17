import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const products: any = [
    {
        id: 1,
        prodTitle: 'Throwback Hip Bag',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        prodThumb: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        prodTitle: 'Medium Stuff Satchel',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        prodThumb: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

interface cartItemlist {
    cartList: {
        id: number,
        prodTitle: string,
        color: any,
        price: string,
        quantity: number,
        prodThumb: string,
        imageAlt: string,
        total: number
    }[]
}

const initialState: cartItemlist = {
    cartList: products
}

const CartItemslice = createSlice({
    name: "Carts",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.cartList = products
        }
    }
})

export const { addToCart } = CartItemslice.actions
export default CartItemslice.reducer

