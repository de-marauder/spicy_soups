import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onValue, set, ref } from "firebase/database";

import { db } from "../../firebase-config";
import Input from "../UI/Input/Input";

const Details = () => {

    const navigate = useNavigate()

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

    console.log(
        'fname = ', fname, '\n',
        'lname = ',lname, '\n',
        'phone = ',phone, '\n',
        'email = ',email, '\n',
        'city = ',city, '\n',
        'address = ',address, '\n'
    )

    let payload = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        city: city,
        address: address,
    }

    const submitContactInfo = async (e) => {
        e.preventDefault()

        try {

        } catch (error) {
            console.log(error)
        }

        navigate('payment')
    }

    useEffect(async () => {
        try {
            onValue(ref(db, '/Users/Customer'), (snapshot) => {
                console.log(snapshot.val())
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="px-5 mx-auto md:w-9/12 ">
            <div className="mb-10 col-span-2">

                <form className="space-y-5">
                    <div className="space-y-2">
                        <p className="text-left"><strong>Info about you: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setFname(e.target.value) }} value={fname} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input update={(e) => { setLname(e.target.value) }} value={lname} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input update={(e) => { setPhone(e.target.value) }} value={phone} className="w-full mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input update={(e) => { setEmail(e.target.value) }} disabled value={email} className="w-full mb-5 sm:mb-auto" type={"email"} required placeholder={"E-mail"} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-left"><strong>Delivery Info: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setCity(e.target.value) }} value={city} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input update={(e) => { setAddress(e.target.value) }} value={address} className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"Address"} />
                        </div>
                    </div>

                    <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Choose payment method</button>
                </form>
            </div>
        </div>
    )
}

export default Details;