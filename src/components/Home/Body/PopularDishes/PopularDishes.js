import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"

import Button from "../../../UI/Button/Button";
// import Products from "../../../Menu/Products";
import N from "../../../UI/utilities/Naira/N";
import { app } from "../../../../firebase-config"

const PopularDishes = () => {

    const dispatch = useDispatch()

    // const popular = Object.values(Products).slice(0, 5)
    const buttonStyle = " hover:relative hover:top-1 "

    const [products, setProducts] = useState({})
    // console.log(products)

    // const [mealno, setMealno] = useState(4);

    let popular = products && Object.values(products).slice(0, 5);
    console.log(products)
    console.log(popular)

    // const [meals, setMeals] = useState((popular.length > 0) ? popular.map((el, id) => <MenuCard key={id} el={el} />) : '');

    useEffect(() => {
        console.log("useEffect starts");

        onValue(ref(getDatabase(app), 'Products/'), (snapshot) => {
            console.log("product loading")
            const newProducts = { ...snapshot.val() }
            setProducts(newProducts)
            console.log('use effect products')
            // const newMealArray = Object.values(newProducts).slice(0, 4);

            // setMeals(newMealArray.map((el, id) => <MenuCard key={id} el={el} />))
            // console.log('use effect meals')
        })

        console.log("useEffect ENDS")
    }, [])

    const dishes = popular.map((el, id) => {
        return (
            <div key={id} className="shadow-xl text-black rounded-xl mb-5 sm:mr-5 sm:w-6/12 md:w-5/12 lg:w-3/12 px-3 py-5 sm:p-5 bg-white">
                <img className="rounded-full h-32 w-32 mb-4 mx-auto" src={el.img} alt='Popular dish' />
                <div>
                    <strong className="text-xl">{el.meal}</strong>
                    <hr className="my-5 border-black" />
                    <p>{el.desc.slice(0, 50)}</p>
                    <strong className="my-5 block">Price: <N />{el.price}</strong>
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