import { useState } from "react";
import { useSelector } from "react-redux";
import {IoChevronDownOutline} from "react-icons/io5"

import { Products } from "./Products";
import MenuCard from "./MenuCard";
import Button from "../UI/Button/Button";

const MenuBody = () => {

    const [tagActive, setTag] = useState(false)
    const [filterActive, setFilter] = useState(false)

    // const itemCounter = useSelector(state=>state.itemCounter)

    // console.log(itemCounter)

    const meals = Object.values(Products).map((el, id) => {
        return (
            <MenuCard key={id} 
            // itemCounter={itemCounter} 
            el={el} />
        )
    })

    const filter = (
        <div className="w-full space-y-3 mb-5 px-4 h-fit sm:h-full sm:w-3/12">
                    <strong className="text-stone-400 flex justify-between text-lg"><span>Tags</span> <IoChevronDownOutline className="hover:text-orange-600" onClick={()=>setTag(!tagActive)} /></strong>
                    <hr className=" w-full" />
                    {tagActive ? <div className="flex flex-wrap">
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">native</div>
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">eba</div>
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">rice</div>
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">afang</div>
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">egusi</div>
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">bitterleaf</div>
                        <div className="w-fit p-1 px-4 mr-3 mb-3 bg-stone-600 hover:bg-orange-500 rounded-3xl text-white">white</div>
                    </div> : null}
                    <strong className="text-stone-400 flex justify-between text-lg"><span>Filter</span> <IoChevronDownOutline className="hover:text-orange-600" onClick={()=>setFilter(!filterActive)} /></strong>
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
                    </ul > : null}
                </div >
    )
    return (
        <div className="bg-white py-5 sm:py-12 min-h-screen mx-2 sm:mx-8 my-10 rounded-2xl border-y-2 border-c-green flex flex-col justify-center items-center ">
            <div className="p-2 w-full flex flex-col justify-center items-start sm:flex-row">
                {filter}
                <hr className="flex-1 h-px w-full sm:w-96 my-2 sm:rotate-90" />
                <div className="w-full h-screen overflow-scroll sm:w-9/12 flex flex-wrap justify-center items-center px-2 pt-10 sm:pt-0">
                    {meals}
                </div>
            </div >
            <Button className="hover:text-white sm:w-1/4">Load More</Button>
        </div >
    )
}

export default MenuBody;