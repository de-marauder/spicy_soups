import { useState, useEffect } from "react"
import { onValue, ref, set } from "firebase/database"

import { db } from "../../firebase-config"

const Admin = ({ user }) => {
    const [userToAdmin, setUserAsAdmin] = useState('')
    const [orders, setOrders] = useState({})
    

    const changeUserToAdmin = (e) => {
        e.preventDefault()
        let adminList = []
        let admin = {}
        try{
            onValue(ref(db, '/Users/Admins'), (snapshot) => {
                console.log(snapshot.val)
                admin = {...snapshot.val()}
                Object.values(admin).forEach((email)=>{
                    adminList.push(email)
                })
            })
            set(ref(db, `/Users/Admins/${adminList.length}`), userToAdmin )
            alert(`${userToAdmin} is now an admin`)
            setUserAsAdmin('')
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        try {
            let OrdersCopy = {}
            user && onValue(ref(db, `/Orders`), (snapshot) => {
                const storedUserData = { ...snapshot.val() }
                snapshot.val() && setOrders(storedUserData)
                // console.log('data RETRIEVED')
                OrdersCopy = storedUserData
            })
            // console.log('data NOT RETRIEVED. USER NOT SET')

            let productsCopy = []

            user && onValue(ref(db, `/Products`), (snapshot) => {
                const storedUserData = { ...snapshot.val() }
                
                
                // console.log('data RETRIEVED')
                productsCopy = Object.values(storedUserData)

                let newOrders = {}
                Object.entries(OrdersCopy).forEach((order) => {
                    let newOrder = []
                    // console.log(order)
                    productsCopy.forEach((meal) => {

                        Object.entries(order[1].order).forEach((el) => {
                            // console.log(el)
                            if (el[0] === meal.id) {
                                let presentMeal = [el[0], meal, el[1]]
                                newOrder.push(presentMeal)

                                newOrders[order[0]] = { ...newOrders[order[0]], order: newOrder }
                                // console.log(newOrders)
                            }
                        })
                    })
                    // console.log(order[0])
                    let time = order[1].time.slice(0, 24)
                    let contactInfo = order[1].contactInfo
                    newOrders[order[0]] = { ...newOrders[order[0]], time: time, contactInfo: contactInfo }
                })
                // console.log(newOrders)
                setOrders(newOrders)
            })

        } catch (error) {
            console.log("ERROR => ", error)
        }


        return () => { }
    }, [user])

    const cartItems = orders ? Object.entries(orders).map((order) => {
        // console.log(orders[order[0]].order)
        const orderedItemsArray = orders[order[0]].order && Object.entries(orders[order[0]].order).map((orderedItems) => {
            // console.log(orderedItems)
            return (
                <div key={orderedItems[0]} className="flex items-center h-20 md:h-24 border-2 border-green-200 rounded-xl overflow-hidden mb-5 sm:mr-5 sm:w-64">
                    <div className="w-1/2 h-full">
                        <img className="w-full h-full" src={orderedItems[1][1]?.img} alt={orderedItems[1][1]?.id} />
                    </div>
                    <div className="w-full px-3">
                        <h2 className="font-bold mx-auto w-fit text-stone-600">{orderedItems[1][1]?.name}</h2>
                        <p className="text-sm mx-auto w-fit">Number of orders: <strong className="text-orange-600">{orderedItems[1][2]}</strong></p>
                    </div>
                </div>
            )
        })
        return (
            <div key={order[0]} className="overflow-hidden bg-green-100 mb-10 shadow-orange-200 shadow-lg rounded-3xl">
                <div className="flex items-center ">
                    <div className="w-1/4 font-bold px-3 text-stone-600 ">{order[1].time}</div>
                    <div className="w-3/4 md:w-full flex flex-col md:flex-row md:flex-wrap justify-centergit status p-5">
                        {orderedItemsArray}
                    </div>
                </div>
                <div className="text-xl bg-c-green rounded-3xl text-orange-500 py-10">
                    <p><span className="text-slate-100">Name:</span> {`${order[1].contactInfo?.fname ? order[1].contactInfo.fname : ''} ${order[1].contactInfo?.lname ? order[1].contactInfo.lname: ''}`} </p>
                    <p><span className="text-slate-100">Time of delivery:</span> {(order[1].contactInfo?.delTime ? order[1].contactInfo?.delDay : '') ? order[1].contactInfo.delTime + '  ' + order[1].contactInfo.delDay : null} </p>
                    <p><span className="text-slate-100">Address:</span> {`${order[1].contactInfo?.address ? order[1].contactInfo.address : ''} ${order[1].contactInfo?.city ? order[1].contactInfo?.city: ''}`} </p>
                </div>
            </div>
        )
    }) : []


    return (
        <>
            <section className="pt-40  bg-slate-300">
                <h1 className="font-bold text-center text-orange-600 text-3xl md:text-6xl  mb-10 ">Here are all orders</h1>
                <div className="w-10/12 overflow-hidden rounded-3xl text-center pb-10 mx-auto">
                    {Object.entries(orders).length === 0 ? <div className="text-4xl text-center my-10"><strong>There are no orders.</strong></div> : cartItems}
                </div>
            </section>
            <section className="py-20 text-center bg-slate-300">
                <h1 className="text-3xl font-cabin font-bold text-orange-500 mb-10">Make a user an admin</h1>
                <form className="mx-auto w-10/12 sm:w-3/4 lg:w-1/2">
                    <input onChange={(e) => setUserAsAdmin(e.target.value)} value={userToAdmin} type="email" placeholder="Enter E-mail" className="mb-10 w-full block text-lg px-5 outline-none bg-inherit border-b-2 border-orange-500 text-slate-500" />
                    <button onClick={(e) => changeUserToAdmin(e)} type="submit" className="bg-green-400 hover:bg-green-600 text-white rounded-xl px-3 py-2">SUBMIT</button>
                </form>
            </section>
        </>
    )
}

export default Admin;
