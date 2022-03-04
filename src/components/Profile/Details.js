import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onValue, set, ref } from "firebase/database";

import { db } from "../../firebase-config";
import Input from "../UI/Input/Input";

const Details = ({ setUserDetails, userDetails, user, user1, children, child, notProfile }) => {

    const navigate = useNavigate()
    console.log(userDetails)
    console.log(user)

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
            console.log('data RETRIEVED')
            console.log('userData = ', userData)
            await set(ref(db, `/Users/Customers/customer ${user?.uid || user1?.uid}/details`), userData)
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
                (user || user1) && await onValue(ref(db, `/Users/Customers/customer ${user?.uid || user1?.uid}/details`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setUserData(storedUserData)
                    // console.log(userData)
                    // newObjLength = newObj && Object.keys(newObj).length + 1
                    console.log('data RETRIEVED')
                })
                console.log('data NOT RETRIEVED. USER NOT SET')

            } catch (error) {
                console.log("ERROR => ", error)
            }
        })()

        return () => {

        }
    }, [user, user1])

    let outerStyle = "px-5 mx-auto md:w-9/12 "

    if (notProfile) {
        outerStyle = "px-5 mx-auto"
    }

    return (
        <div className={outerStyle}>
            <div className="mb-10 col-span-2">

                <form className="space-y-5  flex flex-col justify-center items-center">
                    <div className="w-full space-y-2">
                        <p className="text-left"><strong>Info about you: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => {
                                (notProfile) ? setUserDetails({ ...userDetails, fname: e.target.value }) : setUserData({ ...userData, fname: e.target.value })
                            }} value={
                                (notProfile) ? userDetails.fname : userData.fname
                            } className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input update={(e) => {
                                (notProfile) ? setUserDetails({ ...userDetails, lname: e.target.value }) : setUserData({ ...userData, lname: e.target.value })
                            }} value={
                                (notProfile) ? userDetails.lname : userData.lname

                            } className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input update={(e) => {
                                (notProfile) ? setUserDetails({ ...userDetails, phone: e.target.value }) : setUserData({ ...userData, phone: e.target.value })
                            }} value={
                                (notProfile) ? userDetails.phone : userData.phone

                            } className="w-full mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input update={(e) => {
                                (notProfile) ? setUserDetails({ ...userDetails, email: e.target.value }) : setUserData({ ...userData, email: e.target.value })
                            }} disabled={(userData.email === user?.email || userData.email === user1?.email) ? true : false} value={
                                (notProfile) ? userDetails.email : userData.email
                            } className="w-full mb-5 sm:mb-auto" type={"email"} required placeholder={"E-mail"} />
                        </div>
                    </div>
                    <div className="w-full space-y-2">
                        <p className="text-left"><strong>Delivery Info: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => {
                                (notProfile) ? setUserDetails({ ...userDetails, city: e.target.value }) : setUserData({ ...userData, city: e.target.value })                                
                            }} value={
                                (notProfile) ? userDetails.city : userData.city
                            } className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input update={(e) => {
                                (notProfile) ? setUserDetails({ ...userDetails, address: e.target.value }) : setUserData({ ...userData, address: e.target.value })
                            }} value={
                                (notProfile) ? userDetails.address : userData.address
                            } className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"Address"} />
                            {child}
                        </div>
                    </div>
                    {children}
                    {notProfile ? null : <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Update profile</button>}
                </form>
            </div>
        </div>
    )
}

export default Details;