import { useSelector } from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';

import { MdRestaurantMenu } from "react-icons/md"

import SocialLinks from "../UI/utilities/SocialLinks";
import Backdrop from "../UI/Backdrop/Backdrop"


const home = "";

const Sidebar = (props) => {

    const counter = useSelector((state) => state.cartReducer.counter)

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
                    <div className="text-3xl mt-9 text-orange-00 font-black ml-4"><Link to="/">Spicy soups</Link></div>
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
                    <div className='p-6 flex space-x-5 text-3xl'>
                        <SocialLinks />
                    </div>
                </aside>
            </> : null
    )
}

export default Sidebar;