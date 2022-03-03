import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onValue, ref } from "firebase/database";

import { db } from "../../../firebase-config";
import Input from "../../UI/Input/Input";
import OrderSummary from "./OrderSummary";
import Details from "../../Profile/Details";


const ContactInfoForm = ({ user }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [fname, setFname] = useState('')
    // const [lname, setLname] = useState('')
    // const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    // const [city, setCity] = useState('')
    // const [address, setAddress] = useState('')
    // const [delDay, setDelDay] = useState('')
    // const [delTime, setDelTime] = useState('')
    // const [note, setNote] = useState('')

    // console.log(
    //     fname, '\n',
    //     lname, '\n',
    //     phone, '\n',
    //     email, '\n',
    //     city, '\n',
    //     address, '\n',
    //     delDay, '\n',
    //     delTime, '\n',
    //     note, '\n',
    // )

    const [userDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: '',
        city: '',
        address: '',
        delDay: '',
        delTime: '',
        note: '',
    })

    useEffect(() => {
        (async () => {
            try {
                // let newObjLength = 0
                await onValue(ref(db, `/Users/Customers/customer ${user.uid}/details`), (snapshot) => {
                    const storedUserData = { ...snapshot.val() }
                    console.log(storedUserData)
                    snapshot.val() && setUserDetails(storedUserData)
                    // console.log(userData)
                    // newObjLength = newObj && Object.keys(newObj).length + 1
                })
                console.log('data RETRIEVED')

            } catch (error) {
                console.log("ERROR => ", error)
            }
        })()

        return () => {

        }
    }, [user])

    const submitContactInfo = (e) => {
        e.preventDefault()

        dispatch({ type: "SUBMIT_CONTACT_INFO", data: userDetails })
        navigate('payment')
    }

    const child = (
        <>
            <div className="flex items-center justify-between mb-5 sm:mb-auto "><label htmlFor='delivery day'>Delivery day: </label><Input update={(e) => { setUserDetails({ ...userDetails, delDay: e.target.value }) }} value={userDetails.delDay} className="w-auto" type={"date"} required placeholder={"Delivery Day"} id={"Delivery day"} /></div>
            <div className="flex items-center justify-between mb-5 sm:mb-auto"><label htmlFor='delivery time'>Delivery time: </label><Input update={(e) => { setUserDetails({ ...userDetails, DelTime: e.target.value }) }} value={userDetails.delTime} className="w-auto" type={"time"} required placeholder={"Delivery time"} id={"Delivery time"} /></div>

        </>
    )

    return (
        <>
            <div className="mb-10 sm:mr-5 col-span-2">
                <Details user={user} userDetails={userDetails} child={child} notProfile={true}>
                    <div className="space-y-2 w-full">
                        <p className="text-left"><strong>Note: </strong></p>
                        <div className="">
                            <Input update={(e) => { setUserDetails({ ...userDetails, note: e.target.value }) }} row={4} value={userDetails.note} className="sm:mr-5 mb-5 w-full" type='textarea' placeholder={"Order Note"} />
                        </div>
                    </div>
                    <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Choose payment method</button>

                </Details>

                {/* <form className="space-y-5">
                    <div className="space-y-2">
                        <p className="text-left"><strong>Info about you: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setFname(e.target.value) }} value={fname} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input update={(e) => { setLname(e.target.value) }} value={lname} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input update={(e) => { setPhone(e.target.value) }} value={phone} className="w-full mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input update={(e) => { setEmail(e.target.value) }} value={email} className="w-full mb-5 sm:mb-auto" type={"email"} required placeholder={"E-mail"} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-left"><strong>Delivery Info: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setCity(e.target.value) }} value={city} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input update={(e) => { setAddress(e.target.value) }} value={address} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"Address"} />
                            <div className="flex items-center justify-between mb-5 sm:mb-auto "><label htmlFor='delivery day'>Delivery day: </label><Input update={(e) => { setDelDay(e.target.value) }} value={delDay} className="w-auto" type={"date"} required placeholder={"Delivery Day"} id={"Delivery day"} /></div>
                            <div className="flex items-center justify-between mb-5 sm:mb-auto"><label htmlFor='delivery time'>Delivery time: </label><Input update={(e) => { setDelTime(e.target.value) }} value={delTime} className="w-auto" type={"time"} required placeholder={"Delivery time"} id={"Delivery time"} /></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-left"><strong>Note: </strong></p>
                        <div className="sm:grid sm:grid-cols-2">
                            <Input update={(e) => { setNote(e.target.value) }} value={note} className="sm:mr-5 mb-5 w-full" type='textarea' placeholder={"Order Note"} />
                        </div>
                    </div>

                </form> */}
            </div>
            <div className="col-span-1">
                <OrderSummary />
            </div>



        </>
    )
}

export default ContactInfoForm;