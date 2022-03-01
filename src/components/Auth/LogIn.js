import { useState } from "react";

import Button from "../UI/Button/Button";
import Hero from "../Hero";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Hero styles="h-screen flex-col py-32">
            <h1 className='font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                <strong>Login</strong>
            </h1>
            <div className="w-10/12 flex flex-col gap-5 sm:w-2/3 mx-auto my-5">
                <input onChange={(event) => {setEmail(event.target.value)}} name="email" type="email" value={email} placeholder="Enter E-mail" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
                <input onChange={(event) => {setPassword(event.target.value)}} name="password" type="password" value={password} placeholder="Enter Password" className="w-full text-black p-2 px-10 rounded-2xl bg-white" />
            </div>
            <Button className="w-3/12">Login</Button>
        </Hero>
    )
}

export default Login;