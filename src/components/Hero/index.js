import React from 'react';

import { Hero } from './StyledHero'

const hero = () => {
    return (
        <Hero className="relative cursor-default flex justify-center overflow-hidden text-white">
            <div className='absolute left-2 sm:left-16 md:left-20 top-1/4 md:top-40 pr-2 md:pr-4 pb-8 border-lime-600 border-b-4 shadow-heroTitle shadow-lime-200/80 border-r-4'>
                <h1 className='bg-hero-pattern mb-5 font-cabinSketch sm:text-7xl md:text-8xl text-5xl font-semibold'>Spicy soups</h1>
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
                <button className='mx-auto px-4 text-2xl border-x-2 border-lime-400 hover:text-lime-400'>
                    Place an order
                </button>
            </div>
        </Hero>
    )
}
export default hero;