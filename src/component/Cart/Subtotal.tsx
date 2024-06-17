import { useNavigate } from 'react-router-dom'
import Actionbtn from '../common_fields/Actionbtn'
import ActionBtnborder from '../common_fields/ActionBtnborder'

const Subtotal = () => {
    const navigation: any = useNavigate()
    return (
        <>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <p className='w-full'>

                        <Actionbtn
                            btnText={<>Checkout</>}
                            onClick={() => navigation('/checkout')}
                        />

                    </p>

                </div>
                <div className="mt-6 w-full flex justify-center text-center text-sm text-gray-500">
                    <p className='w-full'>

                        <ActionBtnborder
                            btnText={<>Continue Shopping &rarr;</>}
                            onClick={() => navigation('/product')}
                        />

                    </p>
                </div>
            </div>
        </>
    )
}

export default Subtotal
