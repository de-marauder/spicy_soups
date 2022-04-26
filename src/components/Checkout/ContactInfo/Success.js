import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TiTickOutline} from 'react-icons/ti';

import OrderSummary from './OrderSummary';

const Success = () => {

    const dispatch = useDispatch()
    const payCash = useSelector((state) => { return state.cartReducer.payCash }) || false

    useEffect(()=>{
        return (()=>{
            console.log("cleanup...")
            dispatch({type: "EMPTY_CART"})
        })
    }, [dispatch])
    return (
        <div className='col-span-3 text-center flex flex-col justify-center items-center'>
            <div className="h-40 w-40 flex items-center rounded-full bg-stone-100"><TiTickOutline className="h-40 w-40 text-green-400" /></div>
            <p className='text-green-300 my-10'>Your order has been successfully received. Your meal is being prepared!</p>
            {payCash ? <p className='text-stone-700 my-10'>You will pay cash on delivery</p> : null}
            <OrderSummary className="w-full sm:w-3/4 md:w-1/2" />
        </div>
    )
}
 
export default Success;