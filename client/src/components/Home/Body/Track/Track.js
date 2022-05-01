const Track = () => {
    
    return (
        <div className="-mt-32 w-3/4 md:w-10/12 lg:w-9/12 flex flex-wrap lg:gap-x-8 justify-center items-center">
            <div className="mb-10 h-48 sm:h-44 md:h-40 sm:mr-10 lg:m-0 space-y-3 lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl bg-gray-300 ">
                <h3 className="text-gray-500 text-left font-bold text-xl">Step 1</h3>
                <h2 className="text-orange-400 text-base">Make Order</h2>
                <hr className="border-orange-700" />
                <p className="text-gray-600 text-sm">Select your desired meal from our wide menu.</p>
            </div>
            <div className="mb-10 h-48 sm:h-44 md:h-40 sm:mr-10 lg:m-0 space-y-3 lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl bg-gray-300 ">
                <h3 className="text-gray-500 text-left font-bold text-xl">Step 2</h3>
                <h2 className="text-orange-400 text-base">Enter Contact Info</h2>
                <hr className="border-orange-700" />
                <p className="text-gray-600 text-sm">Enter your address or choose your current location using app.</p>
            </div>
            <div className="mb-10 h-48 sm:h-44 md:h-40 sm:mr-10 lg:m-0 space-y-3 lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl bg-gray-300 ">
                <h3 className="text-gray-500 text-left font-bold text-xl">Step 3 </h3>
                <h2 className="text-orange-400 text-base">Fast Delivery</h2>
                <hr className="border-orange-700" />
                <p className="text-gray-600 text-sm">Have your order delivered to your location.</p>
            </div>
        </div>
    )
}

export default Track;