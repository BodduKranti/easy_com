import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface CartItemprops {
    id: number,
    prodTitle: string,
    color: any,
    price: string,
    quantity: number,
    prodThumb: string,
    imageAlt: string,
}

const CartItem: FC<CartItemprops> = ({
    id,
    prodTitle,
    color,
    price,
    quantity,
    prodThumb,
    imageAlt
}) => {
    return (
        <>
            <div key={id} className="flex py-6">
                <div key={id} className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={prodThumb}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <Link to={`/product/${id}`}>{prodTitle}</Link>
                            </h3>
                            <p className="ml-4">{price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{color}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {quantity}</p>

                        <div className="flex">
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
