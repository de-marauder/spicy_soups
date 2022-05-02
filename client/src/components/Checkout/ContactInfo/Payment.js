import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ref, set, onValue } from "firebase/database";

import { db } from '../../../firebase-config'
import OrderSummary from "./OrderSummary";

const Payment = ({user}) => {

    const navigate = useNavigate()
    const contactInfo = useSelector((state) => { return state.cartReducer.contactInfo })
    const order = useSelector((state) => { return state.cartReducer.itemCounter })
    const dispatch = useDispatch()

    console.log(Object.entries(order).map((entry) => {
        return {
            id: entry[0],
            quantity: entry[1]
        }
    }))
    
    const [orderNo, setOrderNo] = useState(0)
    const [userOrderNo, setUserOrderNo] = useState(0)

    const makePayment = () => {
        const date = new Date()

        set(ref(db, `Orders/${orderNo}`), {
            contactInfo: { ...contactInfo },
            time: date.toString(),
            order: order
        })
        user && set(ref(db, `/Users/Customers/${user.uid}/orders/${userOrderNo}`), {
            time: date.toString(),
            order: order
        })
        console.log('payment ===> user_id: ', user.uid)
        user && set(ref(db, `/Users/Customers/${user.uid}`), {
            contactInfo: { ...contactInfo }
        })
        
        dispatch({ type: "DELETE_CONTACT_INFO" })
        // process.env.REACT_APP_SERVER_URL || || "https://spicy-soups.herokuapp.com/api/payment" || "http://localhost:5000/api/payment"
        fetch("http://localhost:5000/api/payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: Object.entries(order).map((entry) => {
                    return {
                        id: entry[0],
                        quantity: entry[1]
                    }
                }),
            })
        }).then(async (res) => {

            var response = await res.json()
            console.log(response)
            if (res.ok) {
                console.log("res is ok")
                return response
            }
            console.log("res is not ok!")
            return Promise.reject(response)
        })
        .then(({ url }) => {
            // console.log(url)
            window.location = url
        })
        .catch((error) => {
            console.log("ERROR => ", error)
        })
    }
    const payCash =()=>{
        dispatch({type: 'PAY_CASH'})
        navigate('success')
    }

    useEffect(() => {
        console.log("payment useEffect running ....")
        // user && (
        onValue(ref(db, '/Orders'), (snap) => {
            const ExistingOrders = { ...snap.val() }
            const currOrderNo = Object.entries(ExistingOrders).length + 1
            // console.log(currOrderNo)

            setOrderNo(ExistingOrders !== null ? currOrderNo : {})
            // console.log("all orders = ", ExistingOrders)
        })
        // )
        user && (
            onValue(ref(db, `/Users/Customers/${user?.uid}/orders`), (snap) => {
                const ExistingOrders = { ...snap.val() }
                const currOrderNo = Object.entries(ExistingOrders).length + 1
                // console.log(currOrderNo)

                setUserOrderNo(ExistingOrders !== null ? currOrderNo : {})
                // console.log("user orders = ", ExistingOrders)
            })
        )
        return () => {
            setOrderNo(0)
        }
    }, [user])

    return (
        <>
            <div className="mb-10 sm:mr-5 col-span-2">

                <div onClick={makePayment} className="p-10 mb-10 bg-gradient-to-br from-stone-400 via-yellow-100 to-stone-200 hover:from-yellow-100 hover:to-yellow-100 w-full h-fit rounded-3xl flex justify-center items-center">
                    <p className="text-xl cursor-default md:text-3xl font-gloria">Click to pay online</p>
                </div>
                <div onClick={payCash} className="p-10 mb-10 bg-gradient-to-br from-stone-400 via-yellow-100 to-stone-200 hover:from-yellow-100 hover:to-yellow-100 w-full h-fit rounded-3xl flex justify-center items-center">
                    <p className="text-xl cursor-default md:text-3xl font-gloria">Click to pay cash on delivery</p>
                </div>

            </div>
            <div className="col-span-1">
                <OrderSummary />
            </div>
        </>
    )
}

export default Payment