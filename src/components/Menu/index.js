import { useEffect, useState } from 'react';
// import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database'

import Hero from '../Hero'
import MenuBody from './MenuBody';
import MenuCard from './MenuCard';
import Button from '../UI/Button/Button';
// import products from "./Products";
import { app } from '../../firebase-config';




const Menu = () => {

    let [products, setProducts] = useState({})
    // console.log(products)

    const [mealno, setMealno] = useState(4);

    let mealArray = products && Object.values(products).slice(0, 4);
    console.log(products)
    console.log(mealArray)

    const [meals, setMeals] = useState((mealArray.length > 0) ? mealArray.map((el, id) => <MenuCard key={id} el={el} />) : '');
    // setMeals(mealArray.map((el, id) => <MenuCard key={id} el={el} />))

    // meals = mealArray.map((el, id) => <MenuCard key={id} el={el} />)
    console.log(meals)

    const loadMore = () => {
        console.log("loadmore active")

        let meal = meals
        // console.log(mealno)
        if (mealno <= Object.keys(products).length) {
            if (Object.keys(products).length - mealno > 3) {
                setMealno(mealno + 3)
                mealArray = Object.values(products).slice(0, mealno + 3)
                console.log("setting meal number")
                console.log(mealno)
            } else if (Object.keys(products).length - mealno < 3) {
                mealArray = Object.values(products).slice(0, mealno + 1)
                setMealno(mealno + 1)
            }

            console.log(mealArray)
            meal = mealArray.map((el, id) => <MenuCard key={id} el={el} />)
            setMeals(meal)
            console.log("setting meal")
            console.log(meal)
        } else
            setMeals(meal)
    }


    const search = (event) => {
        // event.preventDefault()
        const searchResultArray = []
        console.log(event.target.value)
        Object.values(products).forEach((el, id) => {
            console.log(el, id)
            console.log(el.ingred.split(' '))
            if (el.ingred.includes(event.target.value.toLowerCase()) || el.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                console.log("searched item in ingred")
                searchResultArray.push(el)
            }
        })
        console.log(searchResultArray)
        const meal = (searchResultArray.length > 0) ?
            searchResultArray.map((el, id) => <MenuCard key={id} el={el} />)
            : <div className="text-center">
                <h1 className="text-3xl mb-10">Your Searched item is not available. </h1>
                <p>Try again</p>
            </div>
        console.log(meal)
        setMeals(meal)
    }

    useEffect(() => {
        console.log("useEffect starts");

        onValue(ref(getDatabase(app), 'Products/'), (snapshot) => {
            console.log("product loading")
            const newProducts = { ...snapshot.val() }
            setProducts(newProducts)
            console.log('use effect products')
            const newMealArray = Object.values(newProducts).slice(0, 4);

            setMeals(newMealArray.map((el, id) => <MenuCard key={id} el={el} />))
            console.log('use effect meals')
        })

        console.log("useEffect ENDS")
    }, [])



    console.log(Hero)
    return (
        <>
            <Hero styles="space-y-20 flex-col py-32">
                <h1 className='font-cabinSketch sm:text-7xl md:text-8xl text-5xl'>
                    <strong>Our Menu</strong>
                </h1>
                <div className="w-10/12 sm:w-2/3 mx-auto my-5 relative">
                    <input onChange={(event) => search(event)} name="search" type="search" placeholder="Search" className="w-full text-black border-0 p-2 px-10 rounded-2xl bg-white border-c-green" />
                    <Button className="text-white bg-gradient-to-r from-stone-500 to-orange-600 hover:from-orange-600 w-24 border-0 border-l-0 absolute top-0 right-0 py-2" >Search</Button>
                </div>
            </Hero>
            <MenuBody loadMore={loadMore} search={search} disabled={(mealno >= Object.keys(products).length) ? true : false} >{meals}</MenuBody>
        </>
    )
}

export default Menu;
// useMemo( Menu, (nextState, prevState) => {
//     if (nextState === prevState) return true
// } );