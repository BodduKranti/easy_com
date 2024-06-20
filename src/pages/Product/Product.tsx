import { useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import { RichTexteditor } from '../../component'
import { ProductReducerFun, ProductStates } from './ProductReducer'

const Product = () => {
    const [state, dispatch] = useReducer(ProductReducerFun, ProductStates)

    return (
        <>
            Product
            <Outlet />

            <RichTexteditor
                value={state.field.prodDesc}
                onChange={(data: any) => dispatch({
                    type: 'fieldVal',
                    payload: {
                        prodDesc: data
                    }
                })}
            />

            {/* <div dangerouslySetInnerHTML={{ __html: state.field.prodDesc }}></div> */}
        </>
    )
}

export default Product
