import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom"

// import Hero from "../Hero";
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Menu from "../Menu";
import Cart from "../Checkout/Cart/Cart";
import CheckOut from "../Checkout/Checkout";
import ContactInfo from "../Checkout/Cart/ContactInfo/ContactInfo";


// const home = "/spicy_soups"
const Site = () => {
    const [sidebar, sidebarToggler] = useState(true);

    let style
    if (sidebar) {
        style = {}
    } else {
        style = " right-0"
    }

    return (
        <div id="home" className="w-screen font-cabin overflow-hidden">
            <Navbar sidebar={sidebar} doStuff={() => { sidebarToggler(false) }} />
            <Sidebar sidebar={sidebar} doStuff={() => { sidebarToggler(true) }} style={style} />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/menu' exact element={<Menu />} />
                <Route path='/checkout' element={<CheckOut />} >
                    <Route index={true} element={<Cart />} />
                    <Route path='contact-info'  element={<ContactInfo />} />
                </Route>
            </Routes>


            {/* <Hero />
            <Body /> */}
            <Footer />
        </div>
    )
}

export default Site;