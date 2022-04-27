import PopularDishes from './PopularDishes/PopularDishes';
import Track from './Track/Track';
import Why from './Why/Why';

const Body = () => {
    return (
        <section className='w-screen pt-20 relative text-white text-center flex flex-col justify-center items-center bg-c-green' >
            <Track />
            <PopularDishes className="py-20" />
            <Why />
        </section>
    )
}

export default Body;