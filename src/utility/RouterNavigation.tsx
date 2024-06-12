import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import App from "../App";
import About from "../pages/About/About";
import Productsignlepage from "../pages/Product/Productsignlepage";

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
            }
        ]
    }
])