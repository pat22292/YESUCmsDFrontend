import React, { useEffect, useState } from "react";

export default function CenteredLogoNavBar({ Logo, style, menus }) {
    return (
        <nav className="bg-white  py-2  ">
            <div className="  mx-auto">

                <div className="hidden w-full  md:grid justify-items-center" id="navbar-default">
                    <ul className="flex mt-4 flex-row md:space-x-36 ">
                        <li className='h-16 pt-4'>
                            <a href="#" className="text-gray-700 md:hover:text-gray-300" aria-current="page">Home</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="text-gray-700 md:hover:text-gray-300 ">About</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="text-gray-700 md:hover:text-gray-300 ">Products</a>
                        </li>
                        <li className='h-16 '>
                            <a href="#" className="flex  items-center w-full">
                                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png" className="h-6 sm:h-16 " alt="Flowbite Logo" />

                            </a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="text-gray-700 md:hover:text-gray-300 ">Pricing</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="text-gray-700 md:hover:text-gray-300 ">Contact</a>
                        </li>
                        <li className='h-16 pt-4'>
                            <a href="#" className="text-gray-700 md:hover:text-gray-300 ">Galleries</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

