import { Products } from "./Products";
import MenuCard from "./MenuCard";

const MenuBody = () => {
    const meals = Object.values(Products).map((el, id) => {
        return (
            <MenuCard key={id} img={el.Img} price={el.price} meal={el.meal} desc={el.desc} />
        )
    })
    return (
        <div className="bg-white py-12 min-h-screen flex justify-center items-center ">
            <div className="p-2 py-10 w-10/12 border-y-2 border-c-green rounded-2xl flex flex-col justify-center items-center sm:flex-row">
                <div className="w-full h-32 sm:h-full sm:w-3/12">
                    <h1>Yokuzo</h1>
                </div>
                    {/* <hr className="border-orange-300 flex-1 h-px w-full sm:w-96 my-5 sm:rotate-90" /> */}
                <div className="w-full sm:w-9/12 h-screen overflow-scroll flex flex-wrap justify-center items-center  px-2">
                    {meals}
                </div>
            </div>
        </div>
    )
}

export default MenuBody;