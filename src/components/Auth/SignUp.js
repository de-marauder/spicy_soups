import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

// import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Hero from "../Hero";

const SignUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')

    let payload = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        city: city,
        address: address
    }

    const submitContactInfo = (e) => {
        e.preventDefault()

        // dispatch({ type: "SUBMIT_CONTACT_INFO", data: payload })
        // navigate('payment')
    }

    return (
        <Hero className="h-screen flex-col md:flex-row sm:justify-around">
            <h1 className='pt-40 sm:pt-0 font-cabinSketch w-fit sm:text-7xl md:text-8xl text-5xl'>
                Sign Up
            </h1>
            <form className="w-10/12 space-y-5 sm:w-5/12">
                <div className="flex flex-col gap-5 mx-auto my-5">
                    <input onChange={(event) => { setEmail(event.target.value) }} name="email" type="email" value={email} placeholder="Enter E-mail" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
                    <input onChange={(event) => { setPassword(event.target.value) }} name="password" type="password" value={password} placeholder="Enter Password" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
                    <div className="space-y-2">
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input update={(e) => { setFname(e.target.value) }} value={fname} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input update={(e) => { setLname(e.target.value) }} value={lname} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input update={(e) => { setPhone(e.target.value) }} value={phone} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input update={(e) => { setCity(e.target.value) }} value={city} className="w-full backdrop-blur-xl mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input update={(e) => { setAddress(e.target.value) }} value={address} row={2} className="w-full backdrop-blur-xl col-span-2 mb-5 sm:mb-auto" type={"textarea"} required placeholder={"Address"} />
                        </div>
                    </div>

                    <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl w-fit mx-auto text-white">Sign Up</button>
                </div>
            </form>
            {/* <Button className="w-3/12">Sign Up</Button> */}
        </Hero>
    )
}

export default SignUp;