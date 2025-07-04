import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link } from 'react-scroll';

const navigation = [
    { name: 'About Me', section: 'aboutMe' },
    { name: 'Work Experience', section: 'work' },
    { name: 'Technical Projects', section: 'projects' },
    { name: 'Awards', section: 'awards' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-grey md:bg-transparent fixed w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            {/* <img
                                alt="Your Company"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto pr-4"
                            /> */}

                            <h2 className='text-white text-sm font-serif'>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="cursor-pointer transition-all"
                                >
                                    Marco A. Padilla
                                </Link>
                            </h2>
                        </div>

                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        to={item.section}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        activeClass="text-blue-300 border-b-4 border-blue-300"
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium ',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile drop-down menu */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <Link
                            to={item.section}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            activeClass="text-grey bg-blue-300"
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium text-center'

                        >
                            <DisclosureButton
                                key={item.name}

                            >
                                {item.name}
                            </DisclosureButton>
                        </Link>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
