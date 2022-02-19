import { useDispatch } from "react-redux";
import {NavLink} from "react-router-dom"

import Button from "../../../UI/Button/Button";
import { Products } from "../../../Menu/Products";
import N from "../../../UI/utilities/Naira/N";

const PopularDishes = () => {

    const dispatch = useDispatch()

    const popular = Object.values(Products).slice(0, 5)
    const buttonStyle = " hover:relative hover:top-1 "

    const dishes = popular.map((el, id) => {
        return (
            <div key={id} className="shadow-xl text-black rounded-xl mb-5 sm:mr-5 sm:w-6/12 md:w-5/12 lg:w-3/12 px-3 py-5 sm:p-5 bg-white">
                <img className="rounded-full h-32 w-32 mb-4 mx-auto" src={el.Img} alt='Popular dish' />
                <div>
                    <strong className="text-xl">{el.meal}</strong>
                    <hr className="my-5 border-black" />
                    <p>{el.desc.slice(0, 50)}</p>
                    <strong className="my-5 block">Price: <N />{el.price.slice(2)}</strong>
                    <Button doStuff={() => dispatch({ type: "ADD_ITEM_TO_CART", data: el })} className={"text-sm mb-2 " + buttonStyle}>Add to Cart</Button>
                </div>
            </div>
        )
    })

    return (
        <div className="py-20" >
            <div>
                <p className="font-great text-2xl sm:text-3xl">Relieve your taste buds</p>
                <strong className="font-neon text-orange-600 text-4xl sm:text-6xl md:text-8xl">Popular Dishes</strong>
            </div>
            <div className="flex w-full justify-center p-10 flex-wrap">
                {dishes}
            </div>
            <NavLink to='/menu' >
                <Button className={"text-xl w-3/4" + buttonStyle}><strong>Checkout Full Menu</strong></Button>
            </NavLink>
        </div >
    )
}

export default PopularDishes;