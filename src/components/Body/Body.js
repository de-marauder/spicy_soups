import PopularDishes from './PopularDishes/PopularDishes';
import Track from './Track/Track'

const Body = () => {
    return (
        <section className='w-screen py-20 relative text-white text-center flex flex-col justify-center items-center bg-c-green' >
            <Track />
            <PopularDishes />
        </section>
    )
}

export default Body;