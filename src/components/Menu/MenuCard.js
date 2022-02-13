import Button from "../UI/Button/Button";

const MenuCard = (props) => {
    return (
        <div className="h-max w-full sm:h-max sm:mb-5 sm:mr-5 text-center border-2 sm:w-60 flex flex-row sm:flex-col" id='card'>
            <img className="border-2 w-40 sm:w-full sm:h-60 rounded-3xl" id='card img' src={props.img} alt="meal" />
            <div className="border-2 w-full max-h-max" id='card desc' >
                <p className="" id='name'><strong>{props.meal}</strong></p>
                <hr className="border-orange-300 my-2" />
                <p className="" id='ingred'>{props.desc.slice(0, 70)}</p>
                <div className="" id='price'>
                    <div>
                        <strong><span className="line-through">N</span>{props.price.slice(2)}</strong>
                    </div>
                    <div className="flex justify-between">
                        <Button className="" id='remove from cart'></Button>
                        <p className="" id='counter'>{props.Counter}</p>
                        <Button className="" id='add to cart'></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;