import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo_Image from '../../assets/logo_Image.png';
import ProfileDropdown from '../ProfileDropdown.jsx'
import { useAuth } from '../../authContest/AuthContext.jsx';



function Header() {
    const {isLoggedIn, logout} = useAuth();
    return (
        <header className="  shadow sticky z-50 top-0  rounded-sm">
            <nav className="bg-customGray border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo_Image}
                            className="mr-3 h-16 rounded-xl"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {/* dinamically chainging the render base on the login state start */}
                        {isLoggedIn ? (
                            <ProfileDropdown handleLogout={logout} />
                        ) : (
                            <>
                                <Link
                                    to="login"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4
                     focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5
                      py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="register"
                                    className="text-white bg-orange-700 hover:bg-orange-800 
                    focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                     text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Get started
                                </Link>
                            </>
                        )}
                    </div>
                    {/* dinamic rendering based on logedin state complete */}
                    <div
                        className="hidden justify-between items-center
                 w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium
                 lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                 ${isActive ? "text-orange-700" : "text-gray-700"}
                                 border-gray-100 hover:bg-gray-50 
                                 lg:hover:bg-transparent lg:border-0
                                  hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                 ${isActive ? "text-orange-700" : "text-gray-700"}
                                 border-gray-100 hover:bg-gray-50 
                                 lg:hover:bg-transparent lg:border-0
                                  hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                 ${isActive ? "text-orange-700" : "text-gray-700"}
                                 border-gray-100 hover:bg-gray-50 
                                 lg:hover:bg-transparent lg:border-0
                                  hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                 ${isActive ? "text-orange-700" : "text-gray-700"}
                                 border-gray-100 hover:bg-gray-50 
                                 lg:hover:bg-transparent lg:border-0
                                  hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                           


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header