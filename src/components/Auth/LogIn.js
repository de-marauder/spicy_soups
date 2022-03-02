import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword} from "firebase/auth"

import {auth} from "../../firebase-config"
import Button from "../UI/Button/Button";
import Hero from "../Hero";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const navigate = useNavigate()

    const submitContactInfo = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)
            // set(ref(db, `/Users/user/${email}`), { payload })
            navigate('/')
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

    return (
        <Hero className="h-screen flex flex-col justify-center items-center text-white">
            <h1 className='font-bold font-cabinSketch mb-5 sm:text-7xl md:text-8xl text-5xl'>
                Login
            </h1>
            <p className="text-red-600 px-2 py-1 rounded-xl bg-stone-100/20 backdrop-blur-md w-fit mx-auto">{error}</p>
            <div className="w-10/12 flex flex-col gap-5 sm:w-2/3 mx-auto my-5">
                <input onChange={(event) => {setEmail(event.target.value)}} name="email" type="email" value={email} placeholder="Enter E-mail" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
                <input onChange={(event) => {setPassword(event.target.value)}} name="password" type="password" value={password} placeholder="Enter Password" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
            </div>
            <button onClick={(e) => submitContactInfo(e)} type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl w-fit mx-auto text-white text-xl">Log in</button>

            {/* <Button className="w-3/12">Login</Button> */}
            <p className="pt-10">Don't have an account? <span onClick={()=>{navigate('/signup')}} className="text-orange-400 hover:text-orange-600 hover:cursor-pointer">Sign up</span></p>
        </Hero>
    )
}

export default Login;