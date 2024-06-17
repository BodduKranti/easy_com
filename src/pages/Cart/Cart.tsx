import React from 'react'
import Cartlist from '../../component/Cart/Cartlist'

const Cart = () => {
    return (
        <>
            <div className='w-full py-5'>
                <div className='container'>
                    <div className='w-full flex gap-4'>
                        <div className='sm:w-full md:w-2/3'>
                            <Cartlist />
                        </div>
                        <div className='sm:w-full md:w-1/3'>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
