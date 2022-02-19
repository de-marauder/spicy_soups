import { Outlet } from "react-router";

// import OrderSummary from "./OrderSummary";

const ContactInfo = () => {

    return (
        <section className="bg-white py-20 px-10 sm:px-20 text-center">
            <div className="flex text-stone-400 justify-around pb-4">
                <div className="flex sm:items-center text-orange-600 flex-col sm:flex-row">
                    <span className="font-cabinSketch mr-2  text-4xl sm:6xl lg:7xl">01. </span><p>Order details</p>
                </div>
                <div className="flex sm:items-center flex-col sm:flex-row">
                    <span className="font-cabinSketch mr-2 text-4xl sm:6xl lg:7xl">02. </span><p>Payment Method</p>
                </div>
                <div className="flex sm:items-center flex-col sm:flex-row">
                    <span className="font-cabinSketch mr-2  text-4xl sm:6xl lg:8xl">03. </span><p>Finish</p>
                </div>
            </div>
            <hr />
            <div className="py-10 sm:grid sm:grid-cols-3">
                <Outlet />
            </div>
        </section>
    )
}

export default ContactInfo;