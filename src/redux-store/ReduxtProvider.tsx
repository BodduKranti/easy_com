import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store'

const ReduxtProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Provider store={Store}>
                {children}
            </Provider>
        </>
    )
}

export default ReduxtProvider
