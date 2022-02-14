import React from "react";
import { NavLink as Link } from "react-router-dom"

import { CgMenuGridR } from "react-icons/cg"

import SocialLinks from "../UI/utilities/SocialLinks";


const home = "/spicy_soups"
const Navbar = (props) => {

    return (
        props.sidebar ? (
            <nav className='flex z-50 fixed w-screen text-3xl flex-col sm:flex-row md:px-10 lg:px-40 sm:items-center sm:justify-between h-20 sm:h-24 text-white shadow bg-c-green'>
                <div className="font-sans text-2xl my-auto p-6 sm:text-4xl text-green-00 font-black ml-4 px-3"><Link to="/">Spicy soups</Link></div>
                <ul className="sm:flex hidden cursor-pointer text-xl">
                    <Link to={home + "/"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Home
                            </li>
                    </Link>
                    <Link to={home + "/menu"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Menu
                            </li>
                    </Link>
                    <Link to={home + "/"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Checkout
                            </li>
                    </Link>
                </ul>
                <div className='hidden p-6 sm:flex space-x-5 '>
                    <SocialLinks />
                </div>
                <CgMenuGridR
                    onClick={props.doStuff}
                    className="text-white text-4xl absolute top-5 sm:top-8 right-6 hover:text-green-600 sm:hidden"
                />
            </nav>) : null
    )
}

export default Navbar;