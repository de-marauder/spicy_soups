import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onValue, set, ref } from "firebase/database";

import { db } from "../../firebase-config";
import Input from "../UI/Input/Input";

const Details = ({ user }) => {

    const navigate = useNavigate()

    // const [fname, setFname] = useState('')
    // const [lname, setLname] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [city, setCity] = useState('')
    // const [address, setAddress] = useState('')


    const [userData, setUserData] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        city: '',
        address: '',
    })
    console.log(userData)

    const submitContactInfo = async (e) => {
        e.preventDefault()

        try {
            let newObjLength = 0
            await onValue(ref(db, `/Users/Customers`), (snapshot) => {
                const newObj = { ...snapshot.val() }
                console.log(newObj)
                newObjLength = Object.keys(newObj).length + 1
            })
            console.log('data RETRIEVED')
            console.log('userData = ', userData)
            await set(ref(db, `/Users/Customers/customer ${user.uid}`), userData)
            console.log('data sent')
        } catch (error) {
            console.log(error)
        }

        navigate('/')
    }

    useEffect(() => {
        (async () => {
            try {
                // let newObjLength = 0
                await onValue(ref(db, `/Users/Customers/customer ${user.uid}`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setUserData(storedUserData)
                    console.log(userData)
                    // newObjLength = newObj && Object.keys(newObj).length + 1
                })
                console.log('data RETRIEVED')

            } catch (error) {
                console.log("ERROR => ", error)
            }
        })()

        return () => {

        }
    }, [])

    return (
        <div className="px-5 mx-auto md:w-9/12 ">
            <div className="mb-10 col-span-2">

                <form className="space-y-5  flex flex-col justify-center items-center">
                    <div className="w-full space-y-2">
                        <p className="text-left"><strong>Info about you: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setUserData({...userData, fname: e.target.value}) }} value={userData.fname} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input update={(e) => { setUserData({...userData, lname: e.target.value}) }} value={userData.lname} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input update={(e) => { setUserData({...userData, phone: e.target.value}) }} value={userData.phone} className="w-full mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input update={(e) => { setUserData({...userData, email: e.target.value}) }} disabled={userData.email ? true : false} value={userData.email} className="w-full mb-5 sm:mb-auto" type={"email"} required placeholder={"E-mail"} />
                        </div>
                    </div>
                    <div className="w-full space-y-2">
                        <p className="text-left"><strong>Delivery Info: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setUserData({...userData, city: e.target.value}) }} value={userData.city} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input update={(e) => { setUserData({...userData, address: e.target.value}) }} value={userData.address} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"Address"} />
                        </div>
                    </div>

                    <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Update profile</button>
                </form>
            </div>
        </div>
    )
}

export default Details;