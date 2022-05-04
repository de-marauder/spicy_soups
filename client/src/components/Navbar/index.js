import React from "react";
import { NavLink as Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase-config"
import { CgMenuGridR } from "react-icons/cg"
import { BsFillCartFill } from "react-icons/bs"
import { IoIosContact } from "react-icons/io"

import SocialLinks from "../UI/utilities/SocialLinks";


const home = ""
const Navbar = (props) => {

    const navigate = useNavigate()

    const counter = useSelector((state) => state.cartReducer.counter)

    const cartCounter = counter ?
        (
            <div className="flex items-center">
                <BsFillCartFill />
                <span className=" text-xs text-center bg-orange-600 px-1 rounded-full">{counter}</span>
            </div>
        ) : null

    return (
        props.sidebar ? (
            <nav className='flex z-50 fixed w-screen text-3xl flex-col sm:flex-row px-3 md:px-10  sm:items-center sm:justify-between text-white backdrop-blur-xl bg-gradient-to-r from-c-green to-c-green/10'>
                <div className="font-sans text-2xl my-auto sm:text-3xl md:text-4xl py-6 text-green-00 font-black px-3"><Link to="/">Spicy soups</Link></div>
                <ul className="sm:flex px-1 hidden cursor-pointer text-xl">
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
                    <Link className={"flex"} to={home + "/checkout"}>
                        <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                            Checkout
                        </li>
                        {cartCounter}
                    </Link>
                </ul>
                {props.user?.admin ? <Link className="hidden px-1 sm:block" to={home + "/admin"}>
                    <p className="bg-green-600 sm:ml-2 lg:ml-0 w-fit text-sm rounded-md cursor-pointer shadow-xl hover:bg-orange-600 py-1 px-3">
                        Admin
                    </p>
                </Link> : null}
                <div className='hidden p-6 sm:flex justify-between '>
                    <SocialLinks className="hidden lg:flex items-center justify-center mr-5" />
                    {props.user?.email ?
                        <div className="flex flex-col md:flex-row gap-2">
                            <div onClick={() => { navigate('/profile') }} className="flex justify-center mb-2 sm:mb-0 sm:mr-2 gap-1 items-center text-lg px-2 lg:px-4 lg:py-1 bg-stone-700/80 hover:cursor-pointer hover:bg-stone-900/80 rounded-3xl">
                                <span><IoIosContact className='text-orange-600 mr-2' /></span>
                                <p className="">Profile</p>
                            </div>
                            <div onClick={() => { signOut(auth); navigate('/') }} className="flex justify-center gap-1 items-center text-lg px-2 lg:px-4 lg:py-1 bg-orange-700/80 hover:cursor-pointer hover:bg-orange-500/80 rounded-3xl">
                                {/* <span><IoIosContact className='text-orange-600' /></span> */}
                                <p className="w-max">Log out</p>
                            </div>
                        </div> :
                        <div className='flex flex-col gap-1 items-center justify-center'>
                            <div onClick={() => { navigate('/login') }} className="flex justify-center mb-2 sm:mb-0 sm:mr-2 gap-1 items-center text-xl md:text-2xl px-4 py-1 bg-stone-700/80 hover:cursor-pointer hover:bg-stone-900/80 rounded-3xl">
                                <span><IoIosContact className='text-orange-600 mr-2' /></span><p className="w-fit">Login</p>
                            </div>
                            <div onClick={() => { navigate('/signup') }} className='hover:cursor-pointer'>
                                <p className="text-base text-orange-400 hover:text-orange-500">SignUp</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="flex space-x-4 absolute sm:hidden top-5 sm:top-8 right-6">

                    <Link to='/checkout'>
                        {cartCounter}
                    </Link>

                    <CgMenuGridR
                        onClick={props.doStuff}
                        className="text-white text-4xl  hover:text-green-600"
                    />
                </div>
            </nav>) : null
    )
}

export default Navbar;