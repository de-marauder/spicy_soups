import { useState } from "react";
import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { set, ref, onValue } from "firebase/database"


import { auth, db } from "../../firebase-config"
import Input from "../UI/Input/Input";
import Hero from "../Hero";

const SignUp = () => {

    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState()

    let userData = {
        login: {
            email: email,
            password: password
        },
        fname: fname,
        lname: lname,
        phone: phone,
        city: city,
        address: address
    }

    const submitContactInfo = async (e) => {
        // e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            const newObjLength = 0
            await onValue(ref(db, `/Users/Customers`), (snapshot) => {
                const newObj = { ...snapshot.val() }
                console.log(newObj)
                newObjLength = Object.keys(newObj).length + 1
            })
            await set(ref(db, `/Users/Customers/${email}/customer ${newObjLength}`), { userData })

            // dispatch({type:'LOGIN'})
            navigate('/')
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }

    }
    //  block sm:flex md:flex-row sm:justify-around
    return (
        <Hero className="h-screen text-center sm:pt-40 overflow-y-scroll sm:overflow-y-hidden text-white ">
            <div className="sm:flex sm:flex-row sm:justify-around justify-center items-center mb-10">
                <h1 className='cursor-pointer w-1/3 pt-36 sm:pt-0 font-cabinSketch sm:text-7xl md:text-8xl text-5xl mx-auto text-center'>
                    Sign Up
                </h1>
                <form className="w-8/12 mx-auto space-y-5 sm:w-5/12">
                    {error && <p className="text-red-600 px-2 py-1 rounded-xl bg-stone-100/20 backdrop-blur-md w-fit mx-auto">{error}</p>}
                    <div className="flex flex-col gap-5 mx-auto my-5">
                        <input onChange={(event) => { setEmail(event.target.value) }} required name="email" type="email" value={email} placeholder="Enter E-mail" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
                        <input onChange={(event) => { setPassword(event.target.value) }} required name="password" type="password" value={password} placeholder="Enter Password" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />

                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setFname(e.target.value) }} value={fname} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input update={(e) => { setLname(e.target.value) }} value={lname} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input update={(e) => { setPhone(e.target.value) }} value={phone} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input update={(e) => { setCity(e.target.value) }} value={city} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input update={(e) => { setAddress(e.target.value) }} value={address} row={2} className="w-full backdrop-blur-xl col-span-2 mb-5 sm:mb-auto" type={"textarea"} required placeholder={"Address"} />
                        </div>


                    </div>
                    <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl w-fit mx-auto text-white text-xl">Sign Up</button>
                </form>
            </div>
            <p className="pb-10 sm:pb-0 sm:backdrop-blur-sm w-max mx-auto">Already have an account? <span onClick={() => { navigate('/login') }} className="text-orange-400 hover:text-orange-600 hover:cursor-pointer">Log in</span></p>
        </Hero>
    )
}

export default SignUp;