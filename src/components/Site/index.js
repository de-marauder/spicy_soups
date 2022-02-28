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
import ContactInfo from "../Checkout/ContactInfo";
import ContactInfoForm from "../Checkout/ContactInfo/ContactInfo";
import Payment from "../Checkout/ContactInfo/Payment";
import Success from "../Checkout/ContactInfo/Success";


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
                    <Route path='contact-info' element={<ContactInfo />} >
                        <Route index={true} element={<ContactInfoForm />} />
                        <Route path='payment' index={true} element={<Payment />} />
                        <Route path='payment/success' index={true} element={<Success />} />
                    </Route>
                </Route>
            </Routes>

            <Footer />
        </div>
    )
}

export default Site;