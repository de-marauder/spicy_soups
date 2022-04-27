// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import {MdOutlineCancel} from 'react-icons/md';
import {RiArrowGoBackFill} from 'react-icons/ri';

import OrderSummary from './OrderSummary';

const Failed = () => {

    const navigate = useNavigate()
    // const dispatch = useDispatch()

    // useEffect(()=>{
    //     return (()=>{
    //         console.log("cleanup...")
    //         dispatch({type: "EMPTY_CART"})
    //     })
    // })
    return (
        <div className='col-span-3 text-center flex flex-col justify-center items-center'>
            <div className="h-40 w-40 flex items-center rounded-full bg-stone-100"><MdOutlineCancel className="h-40 w-40 text-red-400" /></div>
            <p className='text-red-500 mt-10'>Sorry, your order was not completed.</p>
            <div onClick={()=> {navigate(-2)}} className="my-10 cursor-pointer flex items-center justify-between text-orange-300 hover:text-orange-600"><RiArrowGoBackFill className='mr-2'/><p>Go back </p> </div>
            <OrderSummary className="w-full sm:w-3/4 md:w-1/2" />
        </div>
    )
}

export default Failed;