import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Dispatch, FC, SetStateAction } from 'react'
import RightSlideritems from '../Rightslideritem/RightSlideritems'
import Cartlist from '../Cart/Cartlist'
import Subtotal from '../Cart/Subtotal'

interface CartHeaderProps {
    state: any,
    dispatch: Dispatch<SetStateAction<any>>
}


const CartHeader: FC<CartHeaderProps> = ({
    state,
    dispatch
}) => {
    return (
        <>
            {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
                <div className="group -m-2 flex items-center p-2 cursor-pointer"
                    onClick={() => {
                        dispatch({
                            type: "itemSlider",
                            payload: {
                                rightSlider: true
                            }
                        })
                    }}
                >
                    <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                </div>
            </div>

            <RightSlideritems
                show={state.popup.rightSlider}
                onClose={() => {
                    dispatch({
                        type: "itemSlider",
                        payload: {
                            rightSlider: false
                        }
                    })
                }}
                content={
                    <>
                        <Cartlist />
                        <Subtotal />

                    </>
                }
            />
        </>
    )
}

export default CartHeader
