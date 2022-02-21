import { Outlet, useLocation, useNavigate } from "react-router";

// import OrderSummary from "./OrderSummary";

const ContactInfo = () => {

    const location = useLocation()
    console.log(location.pathname.slice(10))
    const navigate = useNavigate()

    let style1 = ''
    let style2 = ''
    let style3 = ''

    switch (location.pathname.slice(10)) {
        case 'contact-info':
            style1='text-orange-600'
            break;
        case 'contact-info/payment':
            style1='text-orange-600'
            style2='text-orange-600'
            break;
        case 'contact-info/payment/success':
            style1='text-orange-600'
            style2='text-orange-600'
            style3='text-orange-600'
            break;
    
        default:
            break;
    }

    return (
        <section className="bg-white py-20 px-10 sm:px-20 text-center">
            <div className="flex text-stone-400 justify-around pb-4">
                <div onClick={()=>{navigate('/checkout/contact-info')}} className={style1 + " hover:cursor-pointer flex sm:items-center flex-col sm:flex-row"}>
                    <span className="font-cabinSketch mr-2  text-4xl sm:6xl lg:7xl">01. </span><p>Order details</p>
                </div>
                <div onClick={()=>{navigate('/checkout/contact-info/payment')}} className={style2 + " hover:cursor-pointer flex sm:items-center flex-col sm:flex-row"}>
                    <span className="font-cabinSketch mr-2 text-4xl sm:6xl lg:7xl">02. </span><p>Payment Method</p>
                </div>
                <div onClick={()=>{navigate('/checkout/contact-info/payment/success')}} className={style3 + " hover:cursor-pointer flex sm:items-center flex-col sm:flex-row"}>
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