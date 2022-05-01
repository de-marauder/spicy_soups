import { Outlet } from "react-router-dom";
import Hero from "../Hero";


const CheckOut = () => {

    return (
        <section>
            <Hero className="space-y-20 pb-24 pt-40 relative cursor-default flex justify-center items-center overflow-hidden text-white h-7/12">
                <h1 className='m-auto font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                    <strong>Check Out</strong>
                </h1>
            </Hero>

            <Outlet />
            
        </section>
    )
}

export default CheckOut;