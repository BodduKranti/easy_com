import React, { Fragment, useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Transition,
} from '@headlessui/react'
import { Link } from 'react-router-dom'
import Mobilemenu from './Mobilemenu'
import ProfileAuth from './ProfileAuth'
import CartHeader from './CartHeader'
import DesktopSubmenu from './DesktopSubmenu'
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
                    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                        Get free delivery on orders over $100
                    </p>

                    <nav aria-label="Top" className="w-full px-4">
                        <div className="border-b border-gray-200">
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
                                    <a href="#">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt=""
                                        />
                                    </a>
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
                                                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
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
                                        <Link to={"/login"} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Sign in
                                        </Link>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                        <Link to={"/register"} className="text-sm font-medium text-gray-700 hover:text-gray-800">
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

                                    <CartHeader />

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
