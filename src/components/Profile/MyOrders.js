import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";

import { db } from "../../firebase-config";


const MyOrders = ({ user }) => {

    const [userOrders, setUserOrders] = useState({})
    const [products, setProducts] = useState([])

    let orders = {}
    console.log(user)

    const cleanData = () => {
        Object.entries(userOrders).forEach((order) => {
            // Object.entries(order.order).forEach((meal) => {
                products.forEach((meals) => {
                    console.log(order)
                    console.log(order[0])
                    console.log(meals.id)
                    console.log(order[1].order)
                    Object.entries(order[1].order).forEach((el)=>{
                        console.log(el)
                        if (el[0] === meals.id) {
                            orders[order[0]] = meals
                            // console.log(orders)
                        }
                    })
                })
            // })
        })

        console.log(orders)
    }

    useEffect(() => {
        (async () => {
            try {
                // let newObjLength = 0
                user && await onValue(ref(db, `/Users/Customers/customer ${user?.uid}/orders`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setUserOrders(storedUserData)
                    // console.log(userData)
                    console.log('data RETRIEVED')
                })
                console.log('data NOT RETRIEVED. USER NOT SET')

                user && await onValue(ref(db, `/Products`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setProducts(Object.values(storedUserData))
                    // console.log(userData)
                    console.log('data RETRIEVED')
                })
            } catch (error) {
                console.log("ERROR => ", error)
            }
        })()

        return () => {

        }
    }, [user])

    const cartItems = userOrders ? Object.entries(userOrders).map((el, id) => {
        return (
            <div key={el[0]} className="flex justify-center">
                <div className="w-1/4 bg-stone-200">Date</div>
                <div className="w-3/4 bg-green-400">Order</div>
            </div>
        )
    }) : []

    cleanData()

    return (
        <div className="w-10/12 overflow-hidden rounded-3xl text-center mb-10 mx-auto">
            {cartItems}
            {cartItems.length === 0 ? <div className="text-4xl text-center my-10"><strong>You have no orders</strong></div> : null}
        </div>
    )
}

export default MyOrders;