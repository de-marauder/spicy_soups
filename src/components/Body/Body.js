import PopularDishes from './PopularDishes/PopularDishes';
import Track from './Track/Track';
import Why from './Why/Why';

const Body = () => {
    return (
        <section className='w-screen py-20 relative text-white text-center flex flex-col justify-center items-center bg-c-green' >
            <Track />
            <PopularDishes />
            <Why />
        </section>
    )
}

export default Body;