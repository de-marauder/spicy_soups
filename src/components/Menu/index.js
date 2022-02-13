import Hero from '../Hero'
import MenuBody from './MenuBody';
// import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const Menu = () => {
    return (
        <>
            <Hero styles="space-y-20 flex-col py-32">
                <h1 className='font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                    <strong>Our Menu</strong>
                </h1>
                <div className="w-10/12 sm:w-2/3 mx-auto my-5 relative">
                    <input className="w-full text-black border-0 p-2 px-10 rounded-2xl bg-white border-c-green" name="search" placeholder="Search"  />
                    <Button className="text-white bg-gradient-to-r from-stone-500 to-orange-600 hover:from-orange-600 w-24 border-0 border-l-0 absolute top-0 right-0 py-2" >Search</Button>
                </div>
            </Hero>
            <MenuBody />
        </>
    )
}

export default Menu;