import React from "react";
import { useState } from "react";

import Hero from "../Hero";
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Site = () => {
    const [sidebar, sidebarToggler] = useState(true);

    let style
    if (sidebar) {
        style={}
    } else {
        style=" right-0"
    }

    return (
        <div className="w-screen font-cabin overflow-hidden">
            <Navbar sidebar={sidebar} doStuff={()=>{sidebarToggler(false)}} />
            <Sidebar sidebar={sidebar} doStuff={()=>{sidebarToggler(true)}} style={style} />
            <Hero />
            <Body />
            <Footer />
        </div>
    )
}

export default Site;