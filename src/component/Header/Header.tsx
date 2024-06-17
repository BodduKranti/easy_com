import { useReducer, useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
    PopoverGroup,
} from '@headlessui/react'
import { Link } from 'react-router-dom'
import Mobilemenu from './Mobilemenu'
import ProfileAuth from './ProfileAuth'
import CartHeader from './CartHeader'
import DesktopSubmenu from './DesktopSubmenu'
import { HeaderReducer, HeaderState } from './HeaderReducerfun'
const Header = () => {
    const navigation: any = [
        { name: 'Home', href: '/' },
        {
            name: 'Product', href: '/product',
            subLinks: [
                { name: "Product", href: "/product" },
                { name: "Product Category", href: "/product/product-category" }
            ]
        },
        { name: 'About', href: '/about' },
        { name: 'Cart', href: '/cart' },
    ]

    const [open, setOpen] = useState<any>(false)

    const [state, dispatch] = useReducer(HeaderReducer, HeaderState)

    return (
        <>
            <div className="bg-white">

                {/* ===== Mobile Menu ========  */}
                <Mobilemenu
                    navigation={navigation}
                    open={open}
                    setOpen={setOpen}
                />
                <header className="relative bg-white">
                    <p className="flex h-10 items-center justify-center bg-[#EAC6E5] px-4 text-sm font-medium text-[#AE1C9A] sm:px-6 lg:px-8">
                        Get free delivery on orders over $100
                    </p>

                    <nav aria-label="Top" className="w-full ">
                        <div className="border-b-4 border-[#FFBB38] px-4 ">
                            <div className="flex h-16 items-center">
                                <button
                                    type="button"
                                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Logo */}
                                <div className="ml-4 flex lg:ml-0">
                                    <Link to={"/"}>
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8 w-auto"
                                            src="./images/logo.webp"
                                            alt=""
                                        />
                                    </Link>
                                </div>

                                {/* Flyout menus */}
                                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        {navigation.map((page: any) => (
                                            <>
                                                {page.subLinks ?
                                                    <DesktopSubmenu
                                                        navtitle={page.name}
                                                        navigation={page.subLinks}
                                                    /> :
                                                    <Link
                                                        key={page.name}
                                                        to={page.href}
                                                        className="flex items-center text-base font-medium text-[#AE1C9A] hover:text-[#EAC6E5]"
                                                    >
                                                        {page.name}
                                                    </Link>
                                                }


                                            </>

                                        ))}
                                    </div>
                                </PopoverGroup>

                                <div className="ml-auto flex items-center">
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <Link to={"/login"} className="text-base font-medium text-[#AE1C9A] hover:text-[#EAC6E5]">
                                            Sign in
                                        </Link>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                        <Link to={"/register"} className="text-base font-medium text-[#AE1C9A] hover:text-[#EAC6E5]">
                                            Create account
                                        </Link>
                                    </div>



                                    {/* Search */}
                                    <div className="flex lg:ml-6">
                                        <div className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
                                            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                    </div>

                                    <CartHeader
                                        state={state}
                                        dispatch={dispatch}
                                    />

                                    <ProfileAuth />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header
