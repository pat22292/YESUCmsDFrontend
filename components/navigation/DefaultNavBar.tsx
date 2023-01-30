import React, { useEffect, useState } from "react";

export default function DefaultNavBar() {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="  mx-auto">

                <div className="hidden w-full  md:grid justify-items-center " id="navbar-default">
                    <ul className="flex p-4 mt-4 border text-center border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-36 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='h-16 pt-4'>
                            <a href="#" className="block py-4  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="block py-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="block py-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li className='h-16 '>
                            <a href="https://flowbite.com/" className="flex  items-center w-full">
                                <img src="https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png" className="h-6 sm:h-16 " alt="Flowbite Logo" />

                            </a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="block py-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="block py-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="block py-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

