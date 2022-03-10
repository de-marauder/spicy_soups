import { useSelector } from 'react-redux';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';
import { MdRestaurantMenu } from "react-icons/md"
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase-config'
import SocialLinks from "../UI/utilities/SocialLinks";
import Backdrop from "../UI/Backdrop/Backdrop"


const home = "";

const Sidebar = (props) => {

    const navigate = useNavigate()

    const counter = useSelector((state) => state.cartReducer.counter)
    // console.log('user = ', props.user)

    const cartCounter = counter ?
        (
            <p className="absolute bottom-6 left-36 flex items-center">
                <BsFillCartFill />
                <span className="text-xs text-center bg-orange-600 px-1 rounded-full">{counter}</span>
            </p>
        ) : null

    return (
        !props.sidebar ?
            <>
                <Backdrop doStuff={props.doStuff} backdropClass="z-30" />
                <aside className={`z-50 backdrop-blur-xl flex sm:hidden pl-3 py-10 justify-around text-white text-3xl flex-col fixed w-3/4 h-screen transition-all bg-black/30 ${props.style}`}>
                    <MdRestaurantMenu
                        className="absolute top-8 right-10 hover:text-red-700"
                        onClick={props.doStuff} />
                    <div onClick={props.doStuff} className="text-3xl mt-9 flex items-center justify-between text-orange-00 font-black mx-4">
                        <Link to="/">Tasty foods</Link>
                        {props.user?.admin ? <Link to={home + "/admin"}>
                            <div className="bg-green-600 w-fit text-sm rounded-md cursor-pointer shadow-xl hover:bg-orange-600 py-1 px-3">
                                Admin
                            </div>
                        </Link>: null}
                    </div>
                    <hr className="w-full m-auto" />
                    <ul onClick={props.doStuff} className="flex flex-col">
                        <Link className="hover:border-b-2 hover:border-orange-600" to={home + "/"}>
                            <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 px-3">
                                Home
                            </li>
                        </Link>
                        <Link className="hover:border-b-2 hover:border-orange-600" to={home + "/menu"}>
                            <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 px-3">
                                Menu
                            </li>
                        </Link>
                        <Link className="relative hover:border-b-2 hover:border-orange-600" to={home + "/checkout"}>
                            <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 px-3">
                                Checkout
                            </li>
                            {cartCounter}
                        </Link>
                    </ul>
                    <hr className="w-full m-auto" />
                    <div onClick={props.doStuff} className='py-6 flex justify-around items-center space-x-5 text-3xl'>
                        {props.user?.email ?
                            <div className="flex flex-col md:flex-row gap-2">
                                <div onClick={() => { navigate('/profile') }} className="flex justify-center mb-2 sm:mb-0 sm:mr-2 gap-1 items-center text-xl px-2 lg:px-4 lg:py-1 bg-stone-700/80 hover:cursor-pointer hover:bg-stone-900/80 rounded-3xl">
                                    <span><IoIosContact className='text-orange-600 mr-2' /></span>
                                    <p className="">Profile</p>
                                </div>
                                <div onClick={() => { signOut(auth); navigate('/') }} className="flex justify-center gap-1 items-center text-lg px-2 lg:px-4 lg:py-1 bg-orange-700/80 hover:cursor-pointer hover:bg-orange-500/80 rounded-3xl">
                                    {/* <span><IoIosContact className='text-orange-600' /></span> */}
                                    <p className="">Log out</p>
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
                        <SocialLinks className="flex justify-between" />
                    </div>
                </aside>
            </> : null
    )
}

export default Sidebar;