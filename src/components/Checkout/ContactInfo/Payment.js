import { NavLink as Link } from "react-router-dom";

import OrderSummary from "./OrderSummary";

const Payment = () => {
    return (
        < >
            <div className="mb-10 sm:mr-5 col-span-2">

                <div className="p-10 mb-10 bg-gradient-to-br from-stone-400 via-yellow-100 to-stone-200 w-full h-80 rounded-3xl flex justify-center items-center">
                    <input type='radio' name='payment-method' id='paystack' /><label for='paystack' className="text-6xl font-cabinSketch">Pay via Paystack</label>
                </div>
                <div className="p-10 mb-10 bg-gradient-to-br from-stone-400 via-yellow-100 to-stone-200 w-full h-80 rounded-3xl flex justify-center items-center">
                    <input type='radio' name='payment-method' id='cash' /><label for='cash' className="text-6xl font-cabinSketch">Pay cash on delivery</label>
                </div>
                <Link to="success">
                    <button type={'submit'} className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 hover:via-orange-500 px-4 py-2 rounded-3xl text-white">Place Order</button>
                </Link>

            </div>
            <div className="col-span-1">
                <OrderSummary />
            </div>
        </>
    )
}

export default Payment