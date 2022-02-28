import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDatabase, ref, set, onValue } from "firebase/database";

import { app } from '../../../firebase-config'
import OrderSummary from "./OrderSummary";

const Payment = () => {

    const navigate = useNavigate()
    const contactInfo = useSelector((state) => { return state.cartReducer.contactInfo })
    const order = useSelector((state) => { return state.cartReducer.itemCounter })
    const dispatch = useDispatch()

    // const db = getDatabase(app)
    // const [orders, setOrders] = useState({});
    const [orderNo, setOrderNo] = useState(0)

    const makePayment = () => {
        const date = new Date()

        set(ref(getDatabase(app), `Orders/order ${orderNo}`), {
            contactInfo: { ...contactInfo },
            time: date.toString(),
            order: order
        })
        // console.log({ ...contactInfo, time: date.toString(), order: order })
        // console.log(typeof JSON.stringify(date), date.toString())
        dispatch({ type: "DELETE_CONTACT_INFO" })
        navigate('success')
    }

    useEffect(() => {
        console.log("payment useEffect running ....")
        onValue(ref(getDatabase(app), '/Orders'), (snap) => {
            const ExistingOrders = { ...snap.val() }
            const currOrderNo = Object.entries(ExistingOrders).length + 1
            // console.log(currOrderNo)

            setOrderNo(ExistingOrders !== null ? currOrderNo : {})
            // console.log(ExistingOrders)
        })

        return () => {
            setOrderNo(0)
        }

    }, [])

    return (
        <>
            <div className="mb-10 sm:mr-5 col-span-2">

                <div className="p-10 mb-10 bg-gradient-to-br from-stone-400 via-yellow-100 to-stone-200 w-full h-80 rounded-3xl flex justify-center items-center">
                    <input type='radio' name='payment-method' id='paystack' /><label htmlFor='paystack' className="text-6xl font-cabinSketch">Pay via Paystack</label>
                </div>
                <div className="p-10 mb-10 bg-gradient-to-br from-stone-400 via-yellow-100 to-stone-200 w-full h-80 rounded-3xl flex justify-center items-center">
                    <input type='radio' name='payment-method' id='cash' /><label htmlFor='cash' className="text-6xl font-cabinSketch">Pay cash on delivery</label>
                </div>
                <button onClick={makePayment} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Place Order</button>

            </div>
            <div className="col-span-1">
                <OrderSummary />
            </div>
        </>
    )
}

export default Payment