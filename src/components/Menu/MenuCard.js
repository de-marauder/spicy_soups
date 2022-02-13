import Button from "../UI/Button/Button";

const MenuCard = (props) => {
    return (
        <div className="h-max shadow-2xl rounded-3xl w-full sm:h-max mb-5 sm:mr-5 text-center sm:w-60 flex flex-row sm:flex-col" id='card'>
            <img className="w-40 sm:w-full sm:h-60 rounded-3xl" id='card img' src={props.img} alt="meal" />
            <div className="w-full px-4 py-1 max-h-max" id='card desc' >
                <p className="text-xl" id='name'><strong>{props.meal}</strong></p>
                <hr className="border-orange-300 my-2" />
                <p className="" id='ingred'>{props.desc.slice(0, 70)}</p>
                <div className="" id='price'>
                    <div>
                        <strong>Price: <span className="line-through">N</span>{props.price.slice(2)}</strong>
                    </div>
                    <div className="text-white bg-stone-500 my-2 flex justify-between sm:justify-around">
                        <button className="hover:bg-red-600 hover:border-red-600 bg-orange-600 px-2 py-1 border-2 font-black w-1/3 border-orange-600" id='remove from cart'>-</button>
                        <p className="bg-white border-y-2 w-1/3" id='counter'>{props.Counter}</p>
                        <button className="hover:bg-lime-600 hover:border-lime-600 bg-c-green px-2 py-1 border-2 font-black w-1/3 border-c-green" id='add to cart'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;