import React from 'react'
import { useAppState } from '../../redux-store/HookRedux'
import CartItem from './CartItem'

const Cartlist = () => {
    const { cartList } = useAppState((state) => state.cart)
    console.log(cartList)
    return (
        <>
            <div role="list" className="-my-6 divide-y divide-gray-200">
                {cartList && cartList.map((list: any) => (
                    <>
                        <CartItem
                            {...list}
                        />
                    </>
                ))}
            </div>
        </>
    )
}

export default Cartlist
