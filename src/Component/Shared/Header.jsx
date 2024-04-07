import React, { Fragment } from 'react'
import { HiOutlineChatAlt, HiOutlineSearch, HiOutlineBell } from 'react-icons/hi'
import { Popover, Transition, Menu } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="px-4 bg-white h-14 flex justify-between items-center border-b border-gray-300">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-md pl-10 px-4"
                />
            </div>
            <div className="flex items-center gap-2.5 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'inline-flex text-gray-700 items-center hover:text-opacity-100 focus:outline-none p-1.5 rounded-sm active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80 border">
                                    <div className=" bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is messages pannel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'inline-flex text-gray-700 items-center hover:text-opacity-100 focus:outline-none p-1.5 rounded-sm active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80 border">
                                    <div className=" bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is Notifications pannel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative ">
                    <div>
                        <Menu.Button className="ml-2 inline-flex focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded-full">
                            <span className="sr-only">Open Source Menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-cover bg-sky-500 bg-no-repeat bg-center"
                                style={{ backgroundImage: "URL('https://source.unsplash.com/80x80?face')" }}
                            >
                                <span className="sr-only">Jackson</span>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 right-0 absolute mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => <div onClick={() => navigate('./profile')} className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2')}>Your Profile</div>}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => <div onClick={() => navigate('./settings')} className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2')}>Settings</div>}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => <div onClick={() => navigate('./signout')} className={classNames(active && 'bg-gray-100','text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2')}>Sign Out</div>}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default Header
