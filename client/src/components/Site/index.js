import React from "react";
import {
    useState,
    useEffect
} from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { onValue, ref } from "firebase/database"

import { auth, db } from '../../firebase-config'
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
import Failed from "../Checkout/ContactInfo/Failed";
import Login from "../Auth/LogIn";
import SignUp from "../Auth/SignUp";
import Profile from "../Profile/Profile";
import MyOrders from "../Profile/MyOrders";
import Details from "../Profile/Details";
import Admin from "../Admin/Admin"


const Site = () => {
    const [sidebar, sidebarToggler] = useState(true);

    const location = useLocation()

    let style
    if (sidebar) {
        style = {}
    } else {
        style = " right-0"
    }

    const [user, setUser] = useState({})

    useEffect(() => {
        console.log("useEffect start")
        try {
            onValue(ref(db, `Users/Admins`), (snapshot) => {
                onAuthStateChanged(auth, (currentUser) => {
                    setUser(currentUser)
                    const admins = Object.values({ ...snapshot.val() })
                    setUser({ ...currentUser, admin: admins.includes(currentUser?.email) })
                    console.log(admins)
    
                    console.log("Auth state changed")
                })
                console.log("useeffect onValue done. Admin set!")
               
            })
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <div id="home" className="w-screen font-cabin overflow-hidden">
            <Navbar user={user} sidebar={sidebar} doStuff={() => { sidebarToggler(false) }} />
            <Sidebar user={user} sidebar={sidebar} doStuff={() => { sidebarToggler(true) }} style={style} />
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                {user &&
                    <>
                        <Route path='admin' element={<Admin user={user} />} />
                        <Route path='profile' element={<Profile />} >
                            <Route index={true} element={<Details user1={user} />} />
                            <Route path='orders' element={<MyOrders user={user} />} />
                        </Route>
                    </>
                }
            </Routes>
            <Routes>
                <Route path='' exact element={<Home />} />
                <Route path='menu' exact element={<Menu />} />
                <Route path='checkout' element={<CheckOut />} >
                    <Route index={true} element={<Cart />} />
                    <Route path='contact-info' element={<ContactInfo />} >
                        <Route index={true} element={<ContactInfoForm user={user} />} />
                        <Route path='payment' element={<Payment user={user} />} />
                        <Route path='payment/success' element={<Success user={user} />} />
                        <Route path='payment/failed' element={<Failed />} />
                    </Route>
                </Route>
            </Routes>
            {(location.pathname === "/login" || location.pathname === "/signup" || location.pathname === `/profile` || location.pathname === `/admin`) ? null : <Footer />}


        </div>
    )
}

export default Site;