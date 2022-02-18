import React from "react";
import { NavLink as Link } from "react-router-dom"
import { useSelector } from "react-redux";

import { CgMenuGridR } from "react-icons/cg"
import { BsFillCartFill } from "react-icons/bs"

import SocialLinks from "../UI/utilities/SocialLinks";


const home = ""
const Navbar = (props) => {

    const counter = useSelector((state) => state.cartReducer.counter)
    // console.log(counter)

    const cartCounter = counter ?
        (
            <p className="flex items-center">
                <BsFillCartFill />
                <span className=" text-xs text-center bg-orange-600 px-1 rounded-full">{counter}</span>
            </p>
        ) : null

    return (
        props.sidebar ? (
            <nav className='flex z-50 fixed w-screen text-3xl flex-col sm:flex-row px-3 md:px-10 lg:px-40 sm:items-center sm:justify-between h-20 sm:h-24 text-white shadow bg-c-green'>
                <div className="font-sans text-2xl my-auto sm:text-3xl md:text-4xl py-6 text-green-00 font-black ml-4 px-3"><Link to="/">Spicy soups</Link></div>
                <ul className="sm:flex hidden cursor-pointer text-xl">
                    <Link activeClassName="active" to={home + "/"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Home
                        </li>
                    </Link>
                    <Link activeClassName="active" to={home + "/menu"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Menu
                        </li>
                    </Link>
                    <Link activeClassName="active" className={"flex"} to={home + "/checkout"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Checkout
                        </li>
                        {cartCounter}
                    </Link>
                </ul>
                <div className='hidden p-6 sm:flex space-x-5 '>
                    <SocialLinks />
                </div>
                <div className="flex sm:hidden">
                    {counter ? <span className="absolute top-5 sm:top-8 right-12 z-10 text-xs text-center bg-orange-600 px-1 rounded-full">{counter}</span>
                        : null}
                    <CgMenuGridR
                        onClick={props.doStuff}
                        className="text-white text-4xl absolute top-5 sm:top-8 right-6 hover:text-green-600"
                    />
                </div>
            </nav>) : null
    )
}

export default Navbar;