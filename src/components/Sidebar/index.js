import {NavLink as Link} from 'react-router-dom';

import { MdRestaurantMenu } from "react-icons/md"

import SocialLinks from "../UI/utilities/SocialLinks";



const home = "spicy_soups/";

const Sidebar = (props) => {

    return (
        !props.sidebar ? <aside className={`z-50 flex sm:hidden pl-3 py-10 justify-around text-white text-3xl flex-col fixed w-3/4 h-screen transition-all bg-black ${props.style}`}>
            <MdRestaurantMenu 
                className="absolute top-8 right-10 hover:text-red-700"
                onClick={props.doStuff} />
            <div className="text-3xl mt-9 text-orange-00 font-black ml-4"><Link to="/">Spicy soups</Link></div>
            <hr className="w-3/4 m-auto" />
            <ul className="flex flex-col">
                <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                    <Link to={home + "/"}>Home</Link>
                </li>
                <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                    <Link to={home + "/menu"}>Menu</Link>
                </li>
                <li className="hover:text-orange-600 pb-5 pt-7 cursor-pointer hover:pb-4 hover:border-orange-600 hover:border-b-2 px-3">
                    <Link to={home + "/"}>Checkout</Link>
                </li>
            </ul>
            <hr className="w-3/4 m-auto" />
            <div className='p-6 flex space-x-5 text-3xl'>
                <SocialLinks />
            </div>
        </aside> : null
    )
}

export default Sidebar;