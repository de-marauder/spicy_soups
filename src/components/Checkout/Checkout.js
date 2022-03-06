import {
    // Route, Routes, useMatch, 
    Outlet
    // useLocation
} from "react-router-dom";

// import ContactInfo from "./Cart/ContactInfo/ContactInfo";
// import Cart from "./Cart/Cart";
import Hero from "../Hero";


// const home = "/spicy_soups";

const CheckOut = () => {

    // const location = useLocation()
    // console.log(location)

    // const root = location.search === "" ? <Cart /> : null

    // console.log(location.search.match(/page=(.*)/)?.[1])
    // const contactPage = location.search.match(/page=(.*)/)?.[1] === "contact-info" ? <ContactInfo /> : null
    // console.log(root)
    // console.log(contactPage)
    // .match(/type=(.*)/)
    // console.log(match)

    // const route = useMatch(/(.*)/)
    // console.log(route)
    return (
        <section>
            <Hero className="space-y-20 pb-24 pt-40 relative cursor-default flex justify-center items-center overflow-hidden text-white h-7/12">
                <h1 className='m-auto font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                    <strong>Check Out</strong>
                </h1>
            </Hero>

            <Outlet />
            
        </section>
    )
}

export default CheckOut;