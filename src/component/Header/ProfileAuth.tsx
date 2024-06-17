import { Fragment } from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const ProfileAuth = () => {

    const AuthLinks: any = [
        { pageName: "Your Profile", href: "/profile", status: true },
        { pageName: "Dashboard", href: "/dashboard", status: true }
    ]

    return (
        <>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 ">
                <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </MenuButton>
                </div>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute px-3 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                        {AuthLinks.map((links: any, index: number) => (
                            <>
                                {links.status && <MenuItem>
                                    {({ focus }) => (
                                        <Link
                                            to={`${links.href}`}
                                            key={index}
                                            className={classNames(focus ? 'bg-gray-100' : '', 'text-[14px] block px-3 py-2 rounded-3xl font-semibold text-[#AE1C9A] hover:bg-[#AE1C9A] hover:text-white')}
                                        >
                                            {links.pageName}
                                        </Link>
                                    )}
                                </MenuItem>}

                            </>
                        ))}


                        <MenuItem>
                            {({ focus }) => (
                                <div
                                    className={classNames(focus ? 'bg-gray-100' : '', 'text-[14px] block px-3 py-2 rounded-3xl font-semibold text-[#AE1C9A] hover:bg-[#AE1C9A] hover:text-white')}
                                >
                                    Sign out
                                </div>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>
        </>
    )
}

export default ProfileAuth
