import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Cart, Forgetpwd, Home, Login, Product, Productsignlepage, Register } from "../pages";
import CheckoutPage from "../pages/Checkout/Checkout";

export const RouterNav = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/product/:id",
                element: <Productsignlepage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forgotpwd",
                element: <Forgetpwd />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <CheckoutPage />
            }
        ]
    }
])