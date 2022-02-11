const Track = () => {
    // const track = (
    //     <div className="h-50 w-50 font-cabin rounded-xl text-2xl bg-gray-800 border-green-800">
    //         <h3 className="text-gray-400 text-xl">Step 1</h3>
    //         <h2>Enter Contact Information</h2>
    //         <p>Enter your address or choose your current location using app.</p>
    //     </div>
    // )
    const tracks = ['1','2','3'].map((el, id)=>{
        console.log(id)
        return (
            <div key={id} className="space-y-3 lg:space-y-1 max-h-60 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl bg-gray-300 border-green-800">
                <h3 className="text-gray-500 text-left font-bold text-2xl">Step {el}</h3>
                <h2 className="text-orange-400 text-xl">Enter Contact Info</h2>
                <hr className="border-orange-700" />
                <p className="text-gray-600 text-lg">Enter your address or choose your current location using app.</p>
            </div>
        )
    });
    return (
        <div className="-mt-32 w-3/4 md:w-10/12 lg:w-9/12 flex flex-wrap lg:gap-x-8 gap-10 justify-center items-center">
            {tracks}
        </div>
    )
}

export default Track;