import Button from "../../UI/Button/Button";
import { Products } from "../../Menu/Products";

const PopularDishes = () => {
    const popular = Object.values(Products).slice(0, 5)


    const dishes = popular.map((el, id) => {
        return (
            <div key={id} className="shadow-xl sm:w-6/12 md:w-5/12 lg:w-3/12 px-3 py-5 sm:p-5 bg-white/0">
                <img className="rounded-full h-32 w-32 mb-4 mx-auto" src={el.Img} alt='Popular dish' />
                <div>
                    <strong className="text-xl">{el.meal}</strong>
                    <hr className="my-5" />
                    <p>{el.desc.slice(0, 50)}</p>
                    <strong className="my-5 block"><span className="line-through">N</span>{el.price.slice(2)}</strong>
                    <Button className="text-sm mb-2">Add to Cart</Button>
                </div>
            </div>
        )
    })

    return (
    <>
        <div className="mt-20">
            <p className="font-festive text-2xl">Relieve your taste buds</p>
            <strong className="font-neon text-orange-600 text-4xl sm:text-6xl md:text-8xl">Popular Dishes</strong>
        </div>
        <div className="flex w-full justify-center p-10 flex-wrap gap-5">
            {dishes}
        </div>
        <Button><strong>Checkout Full Menu</strong></Button>
    </>
    )
}

export default PopularDishes;