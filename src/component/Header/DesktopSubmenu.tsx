import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface DesktopSubmenuprops {
    navigation: { pageName: string, href: string }[],
    navtitle: string
}

const DesktopSubmenu: FC<DesktopSubmenuprops> = ({
    navigation,
    navtitle
}) => {

    console.log(navigation)
    return (
        <>
            <Popover className="relative">
                <PopoverButton className="flex items-center h-full gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    {navtitle}
                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </PopoverButton>

                <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {navigation.map((item: any) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                >
                                    <div className="flex-auto">
                                        <Link to={item.href} className="block font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </PopoverPanel>
                </Transition>
            </Popover>
        </>
    )
}

export default DesktopSubmenu
