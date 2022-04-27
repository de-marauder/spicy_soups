import { useState, useEffect } from "react";
import { onValue, ref } from "firebase/database";

import { db } from "../../firebase-config";


const MyOrders = ({ user }) => {

    const [userOrders, setUserOrders] = useState({})
    const [products, setProducts] = useState([])

    const [orders, setOrders] = useState({})
    console.log(user)
    console.log(userOrders)
    console.log(products)
    console.log(orders)

    useEffect(() => {
        (async () => {
            try {
                let userOrdersCopy = {}
                user && onValue(ref(db, `/Users/Customers/${user?.uid}/orders`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setUserOrders(storedUserData)
                    // console.log(userOrders)
                    console.log('data RETRIEVED')
                    userOrdersCopy = storedUserData
                })
                console.log('data NOT RETRIEVED. USER NOT SET')

                let productsCopy = []

                user && onValue(ref(db, `/Products`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setProducts(Object.values(storedUserData))
                    // console.log(userData)
                    console.log('data RETRIEVED')
                    productsCopy = Object.values(storedUserData)

                    let newOrders = {}
                    Object.entries(userOrdersCopy).forEach((order) => {
                        let newOrder = []
                        productsCopy.forEach((meal) => {
                            Object.entries(order[1].order).forEach((el) => {
                                if (el[0] === meal.id) {
                                    let presentMeal = [el[0], meal, el[1]]
                                    newOrder.push(presentMeal)

                                    newOrders[order[0]] = { ...newOrders[order[0]], order: newOrder }
                                    console.log(newOrders)
                                }
                            })
                        })
                        console.log(order[0])
                        let time = order[1].time.slice(0, 24)
                        newOrders[order[0]] = { ...newOrders[order[0]], time: time }
                    })
                    console.log(newOrders)
                    setOrders(newOrders)
                })

            } catch (error) {
                console.log("ERROR => ", error)
            }
        })()

        return () => { }
    }, [user])


    const cartItems = orders ? Object.entries(orders).map((order) => {
        const orderedItemsArray = orders[order[0]].order.map((orderedItems) => {
            return (
                <div key={orderedItems[0]} className="flex items-center h-20 md:h-24 border-2 border-orange-500 rounded-xl overflow-hidden mb-5 sm:mr-5 sm:w-64">
                    <div className="w-1/2 h-full">
                        <img className="w-full h-full" src={orderedItems[1].img} alt={orderedItems[1].id} />
                    </div>
                    <div className="w-full px-3">
                        <h2 className="font-bold mx-auto w-fit text-stone-600">{orderedItems[1].name}</h2>
                        <p className="text-sm mx-auto w-fit">Number of orders: <strong className="text-orange-600">{orderedItems[2]}</strong></p>
                    </div>
                </div>
            )
        })
        return (
            <div key={order[0]} className="flex items-center mb-10  border-2 border-orange-500 rounded-3xl bg-orange-100">
                <div className="w-1/4 font-bold px-3 text-stone-600 ">{order[1].time}</div>
                <div className="w-3/4 md:w-full flex flex-col md:flex-row md:flex-wrap justify-centergit status p-5">
                    {orderedItemsArray}
                </div>
            </div>
        )
    }) : []

    console.log(Object.entries(orders))
    console.log(orders)


    return (
        <div className="w-10/12 overflow-hidden rounded-3xl text-center mb-10 mx-auto">
            {Object.entries(orders).length === 0 ? <div className="text-4xl text-center my-10"><strong>You have no orders</strong></div> : cartItems}
        </div>
    )
}

export default MyOrders;