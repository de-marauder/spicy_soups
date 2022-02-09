import React from "react";
import { useState } from "react";

import Hero from "../Hero";
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";

const Site = () => {
    const [sidebar, sidebarToggler] = useState(true);

    let style
    if (sidebar) {
        style={}
    } else {
        style=" right-0"
    }

    return (
        <div className="w-screen overflow-hidden">
            <Navbar sidebar={sidebar} doStuff={()=>{sidebarToggler(false)}} />
            <Sidebar sidebar={sidebar} doStuff={()=>{sidebarToggler(true)}} style={style} />
            <Hero />
        </div>
    )
}

export default Site;