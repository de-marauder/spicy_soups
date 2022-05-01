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

    

    const [details, setUserDetails] = useState({
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

    // console.log(
    //     details.fname, '\n',
    //     details.lname, '\n',
    //     details.phone, '\n',
    //     details.email, '\n',
    //     details.city, '\n',
    //     details.address, '\n',
    //     details.delDay, '\n',
    //     details.delTime, '\n',
    //     details.note, '\n',
    // )

    useEffect(() => {
        (async () => {
            try {
                // let newObjLength = 0
                user && await onValue(ref(db, `/Users/Customers/customer ${user.uid}/details`), (snapshot) => {
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

        dispatch({ type: "SUBMIT_CONTACT_INFO", data: details })
        navigate('payment')
    }

    const child = (
        <>
            <div className="flex items-center justify-between mb-5 sm:mb-auto "><label htmlFor='delivery day'>Delivery day: </label><Input update={(e) => { setUserDetails({ ...details, delDay: e.target.value }) }} value={details.delDay} className="w-auto" type={"date"} required placeholder={"Delivery Day"} id={"Delivery day"} /></div>
            <div className="flex items-center justify-between mb-5 sm:mb-auto"><label htmlFor='delivery time'>Delivery time: </label><Input update={(e) => { setUserDetails({ ...details, delTime: e.target.value }) }} value={details.delTime} className="w-auto" type={"time"} required placeholder={"Delivery time"} id={"Delivery time"} /></div>

        </>
    )

    return (
        <>
            <div className="mb-10 sm:mr-5 col-span-2">
                <Details user={user} userDetails={details} setUserDetails={setUserDetails} child={child} notProfile={true}>
                    <div className="space-y-2 w-full">
                        <p className="text-left"><strong>Note: </strong></p>
                        <div className="">
                            <Input update={(e) => { setUserDetails({ ...details, note: e.target.value }) }} row={4} value={details.note} className="sm:mr-5 mb-5 w-full" type='textarea' placeholder={"Order Note"} />
                        </div>
                    </div>
                    <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Choose payment method</button>

                </Details>
            </div>
            <div className="col-span-1">
                <OrderSummary />
            </div>



        </>
    )
}

export default ContactInfoForm;