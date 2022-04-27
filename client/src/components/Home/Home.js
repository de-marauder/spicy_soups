import { NavLink } from "react-router-dom";

import Hero from "../Hero";
import Body from "./Body/Body";
import Button from "../UI/Button/Button";


const Home = () => {
    return (
        <>
            <Hero className="sm:p-40 relative cursor-default flex justify-center items-center overflow-hidden text-white h-screen">
                <div className='absolute left-2 sm:left-16 md:left-20 top-1/4 md:top-40 pr-2 md:pr-4 pb-8 border-lime-600 border-b-4 border-r-4'>
                    <h1 className='mb-5 font-cabinSketch sm:text-7xl md:text-8xl text-5xl font-semibold'>Spicy soups</h1>
                    <h2 className="font-festive text-4xl sm:text-6xl md:text-7xl">The Naija way</h2>
                </div>
                <div className='relative flex flex-col justify-center align-center -bottom-40'>
                    <h3 className='mb-3 font-gloria text-3xl sm:text-4xl'>Feeling hungry?</h3>
                    <div className='mx-auto text-lime-600 w-1/2 flex justify-around text-3xl mb-3'>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                    </div>
                    <NavLink className={"w-fit  mx-auto"} to='/menu'>
                        <Button className="text-2xl hover:relative hover:top-1 ">
                            Place an order
                        </Button>
                    </NavLink>
                </div>
            </Hero>
            <Body />
        </>
    )
}

export default Home;