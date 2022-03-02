// import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from "react-router";

import Hero from "../Hero";

const Profile = () => {

    const location = useLocation()
    const navigate = useNavigate()

    console.log(location.pathname.slice(9))

    let detailActive = ''
    let ordersActive = ''

    if (location.pathname.slice(9) === '') {
        detailActive = 'bg-orange-500 text-white'
    }
    if (location.pathname.slice(9) === 'orders') {
        ordersActive = 'bg-orange-500 text-white'
    }

    return (
        <section>
            <Hero className="space-y-20 pb-24 pt-40 p-40 relative cursor-default flex justify-center items-center overflow-hidden text-white h-7/12">
                <h1 className='m-auto font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                    <strong>Profile</strong>
                </h1>
            </Hero>
            <div className="mx-auto font-bold cursor-default text-orange-500 my-10 sm:w-1/2 flex justify-around sm:justify-between">
                <div onClick={() => navigate('/profile')} className={detailActive + " w-fit border-2 rounded-3xl border-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2"}>Contact Details</div>
                <div onClick={() => navigate('orders')} className={ordersActive + " w-fit border-2 rounded-3xl border-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2"}>My Orders</div>
            </div>
            <Outlet />
        </section>

    )
}

export default Profile;