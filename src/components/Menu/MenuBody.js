import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoChevronDownOutline } from "react-icons/io5"
import { useNavigate } from "react-router";


// import MenuCard from "./MenuCard";
import Button from "../UI/Button/Button";

const MenuBody = (props) => {

    const [tagActive, setTag] = useState(false)
    // const [filterActive, setFilter] = useState(false)
    let navigate = useNavigate()

    const cart = useSelector(state => state.cartReducer.cart)

    // const filterTagHandler = (event) => {
    //     event.preventDefault()

    //     console.log(event.target.value)
    //     console.log(event.target.checked)

    //     if (event.target.checked) {

    //     }
    // }

    // console.log(cart, cart === true)

    useEffect(() => { console.log("Menu body use effect") }, [props.meals])

    const filter = (
        <div className="w-full space-y-3 mb-5 px-4 sm:px-2 h-fit sm:h-full sm:w-4/12">
            <strong onClick={() => setTag(!tagActive)} className="px-2 text-stone-400 flex justify-between text-lg"><span>Tags</span> <IoChevronDownOutline className="hover:text-orange-600" /></strong>
            <hr className=" w-full" />
            <div className={`flex flex-wrap transition-all px-2 overflow-hidden justify-around ${tagActive ? 'h-fit' : 'h-0'} `}>
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['eba'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="eba" />
                {/* <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['bitterleaf'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="bitterleaf" /> */}
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['afang'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="afang" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['egusi'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="egusi" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['okra'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="okra" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['meat'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="meat" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['fish'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="fish" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['chicken'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="chicken" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['towel'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="towel" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['yam'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="yam" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['plantain'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="plantain" />
                <input onChange={(event) => { if (event.target.checked) { props.search(event) } }} type='radio' name="mealTag" className="flex justify-center relative ml-5 mr-8 w-8 mb-8 checked:before:bg-green-600 before:absolute before:content-['rice'] before:w-max before:before:p-1 before:px-4 before:mr-3 before:mb-3 before:bg-stone-600 before:hover:bg-green-300 before:rounded-3xl before:text-white" value="rice" />
            </div>
            {/* <strong onClick={() => setFilter(!filterActive)} className="text-stone-400 flex justify-between text-lg"><span>Filter</span> <IoChevronDownOutline className="hover:text-orange-600" /></strong>
            <hr className=" w-full" />
            {filterActive ? <ul className="grid grid-cols-2 pl-2 sm:flex sm:flex-col" >
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="rice" name="mealFilter" value="rice" /><label for="rice" >rice</label>
                </li>
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="meat" name="mealFilter" value="meat" /><label for="meat" >meat</label>
                </li>
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="veggies" name="mealFilter" value="veggies" /><label for="veggies" >veggies</label>
                </li>
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="chicken" name="mealFilter" value="chicken" /><label for="chicken" >chicken</label>
                </li>
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="okra" name="mealFilter" value="okra" /><label for="okra" >okra</label>
                </li>
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="plantain" name="mealFilter" value="plantain" /><label for="" >plantain</label>
                </li>
                <li className="list-none text-stone-500">
                    <input className="mr-4 md:mr-10 hover:bg-orange-500 active:bg-orange-600" type="checkbox" id="isam" name="mealFilter" value="isam" /><label for="isam" >isam</label>
                </li>
            </ul > : null} */}
        </div >
    )
    // console.log(props.loadMore)
    return (
        <div className="bg-white py-5 sm:py-12 min-h-screen mx-2 sm:mx-8 my-10 rounded-2xl border-y-2 border-c-green flex flex-col justify-center items-center ">
            <div className=" w-full flex flex-col justify-center items-start sm:flex-row">
                {filter}
                {/* <hr className="flex-1 h-px w-full sm:w-96 my-2 sm:rotate-90" /> */}
                <div className="w-full h-screen overflow-y-scroll sm:w-9/12 flex flex-wrap justify-center items-center px-2 pt-10 sm:pt-0">
                    {props.children}
                </div>
            </div >
            <div className="pt-10 flex justify-around w-3/4 sm:justify-around sm:w-2/4" >
                <Button disabled={props.disabled} doStuff={props.loadMore} className="hover:text-white">Load More</Button>
                {cart.length > 0 ? <Button doStuff={() => {
                    navigate('/checkout')
                }} className="hover:text-white">Checkout</Button> : null}
            </div>
        </div >
    )
}

export default MenuBody;