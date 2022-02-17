import Cart from "./Cart/Cart";
import Hero from "../Hero";

const CheckOut = () => {
    return (
        <section>
            <Hero styles="space-y-20 pb-24 pt-40">
                <h1 className='m-auto font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                    <strong>Check Out</strong>
                </h1>
            </Hero>
            <Cart />
        </section>
    )
}

export default CheckOut;