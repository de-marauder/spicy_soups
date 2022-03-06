import { useState } from "react"

import { makeAdmin } from "../../../functions"

const Admin = () => {
    const [user, setUserAsAdmin] = useState

    const changeUserToAdmin = (e) => {
        e.preventDefault()
        makeAdmin({ email: user })
    }
    return (
        <section className="h-96 pt-40 text-center bg-slate-300">
            <h1 className="text-3xl font-cabin font-bold text-orange-500 mb-10">Make a user an admin</h1>
            <form className="mx-auto w-10/12 sm:w-3/4 lg:w-1/2">
                <input onChange={(e) => setUserAsAdmin(e.target.value)} value={user} type="email" placeholder="Enter E-mail" className="mb-10 w-full block text-lg px-5 outline-none bg-inherit border-b-2 border-orange-500 text-slate-500" />
                <button onClick={(e) => changeUserToAdmin(e)} type="submit" className="bg-green-400 hover:bg-green-600 text-white rounded-xl px-3 py-2">SUBMIT</button>
            </form>
        </section>
    )
}

export default Admin;
