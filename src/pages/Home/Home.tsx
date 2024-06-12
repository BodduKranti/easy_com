import React from 'react'
import { useAppState } from '../../redux-store/HookRedux'
import { publicUrl } from '../../utility/api_url'

const Home = () => {
    const { productTitle } = useAppState((state) => state.products)
    return (
        <>
            <h2>Home {productTitle} {publicUrl}</h2>
        </>
    )
}

export default Home
