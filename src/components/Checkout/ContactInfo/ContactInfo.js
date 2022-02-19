import { NavLink as Link } from "react-router-dom";

import Input from "../../UI/Input/Input";
import OrderSummary from "./OrderSummary";


const ContactInfoForm = () => {
    return (

        < >
            <div className="mb-10 sm:mr-5 col-span-2">

                <form className="space-y-5">
                    <div className="space-y-2">
                        <p className="text-left"><strong>Info about you: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"first name"} />
                            <Input className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"last name"} />
                            <Input className="w-full mb-5 sm:mb-auto" type={"tel"} required placeholder={"phone number"} />
                            <Input className="w-full mb-5 sm:mb-auto" type={"email"} required placeholder={"E-mail"} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-left"><strong>Delivery Info: </strong></p>
                        <div className="sm:grid sm:grid-cols-2 sm:gap-2">
                            <Input className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"City"} />
                            <Input className="w-full mb-5 sm:mb-auto" type={"text"} required placeholder={"Address"} />
                            <div className="flex items-center justify-between mb-5 sm:mb-auto "><label for='delivery day'>Delivery day: </label><Input className="w-auto" type={"date"} required placeholder={"Delivery Day"} id={"Delivery day"} /></div>
                            <div className="flex items-center justify-between mb-5 sm:mb-auto"><label for='delivery time'>Delivery time: </label><Input className="w-auto" type={"time"} required placeholder={"Delivery time"} id={"Delivery time"} /></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-left"><strong>Note: </strong></p>
                        <div className="sm:grid sm:grid-cols-2">
                            <Input className="sm:mr-5 mb-5 w-full" type='textarea' placeholder={"Order Note"} />
                        </div>
                    </div>
                    <Link to="payment">
                        <button type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Choose payment method</button>
                    </Link>
                </form>
            </div>
            <div className="col-span-1">
                <OrderSummary />
            </div>



        </>
    )
}

export default ContactInfoForm;