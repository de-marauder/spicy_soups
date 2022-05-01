import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TiTickOutline} from 'react-icons/ti';
// import { ref, onValue, set } from "firebase/database";

// import { db } from '../../../firebase-config'

import OrderSummary from './OrderSummary';
// {user}
const Success = () => {

    const dispatch = useDispatch()
    const payCash = useSelector((state) => { return state.cartReducer.payCash }) || false

    // const order = useSelector((state) => { return state.cartReducer.itemCounter })

    // const [orderNo, setOrderNo] = useState(0)
    // const [userOrderNo, setUserOrderNo] = useState(0)

    // const contactInfo = useSelector((state) => { return state.cartReducer.contactInfo })
    // useEffect(() => {
    //     console.log("payment useEffect running ....")
    //     // user && (
    //     onValue(ref(db, '/Orders'), (snap) => {
    //         const ExistingOrders = { ...snap.val() }
    //         const currOrderNo = Object.entries(ExistingOrders).length + 1
    //         // console.log(currOrderNo)

    //         setOrderNo(ExistingOrders !== null ? currOrderNo : {})
    //         // console.log("all orders = ", ExistingOrders)
    //     })
    //     // )
    //     user && (
    //         onValue(ref(db, `/Users/Customers/${user?.uid}/orders`), (snap) => {
    //             const ExistingOrders = { ...snap.val() }
    //             const currOrderNo = Object.entries(ExistingOrders).length + 1
    //             // console.log(currOrderNo)

    //             setUserOrderNo(ExistingOrders !== null ? currOrderNo : {})
    //             // console.log("user orders = ", ExistingOrders)
    //         })
    //     )
    //     return () => {
    //         setOrderNo(0)
    //     }
    // }, [user])
    useEffect(()=>{
        // const date = new Date()

        // set(ref(db, `Orders/${orderNo}`), {
        //     contactInfo: { ...contactInfo },
        //     time: date.toString(),
        //     order: order
        // })
        // user && set(ref(db, `/Users/Customers/${user.uid}/orders/${userOrderNo}`), {
        //     time: date.toString(),
        //     order: order
        // })
        // console.log('payment ===> user_id: ', user.uid)
        // user && set(ref(db, `/Users/Customers/${user.uid}`), {
        //     contactInfo: { ...contactInfo }
        // })
        
        // dispatch({ type: "DELETE_CONTACT_INFO" })
        return (()=>{
            console.log("cleanup...")
            // dispatch({ type: "DELETE_CONTACT_INFO" })
            dispatch({type: "EMPTY_CART"})
        })
    }, [dispatch])
    // , user, contactInfo, order, orderNo, userOrderNo])
    return (
        <div className='col-span-3 text-center flex flex-col justify-center items-center'>
            <div className="h-40 w-40 flex items-center rounded-full bg-stone-100"><TiTickOutline className="h-40 w-40 text-green-400" /></div>
            <p className='text-green-300 my-10'>Your order has been successfully received. Your meal is being prepared!</p>
            {payCash ? <p className='text-stone-700 my-10'>You will pay cash on delivery</p> : null}
            <OrderSummary className="w-full sm:w-3/4 md:w-1/2" />
        </div>
    )
}
 
export default Success;