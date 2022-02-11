import Img1 from '../../../images/agreement.png'
import Img2 from '../../../images/commercial.png'
import Img3 from '../../../images/investment.png'

const Why = () => {

    // const tracks = ['1', '2', '3'].map((el, id) => {
    //     console.log(id)
    //     return (
    //         <div key={id} className="space-y-3 border-2 border-white lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl">
    //             <img className='mx-auto w-20 h-20' src={Img1} alt='' />
    //             <h2 className="text-orange-400 text-xl">Enter Contact Info</h2>
    //             <hr className="border-orange-700" />
    //             <p className="text-gray-600 text-lg">Enter your address or choose your current location using app.</p>
    //         </div>
    //     )
    // });

    return (
        <div className='bg-white text-black px-2 py-20' >
            <div className="">
                <p className="font-festive text-2xl">The why</p>
                <strong className="font-neon underline text-orange-600 text-4xl sm:text-5xl">Why people choose us</strong>
            </div>
            <div>

            </div>
            <div className="mt-10 mx-auto md:w-10/12 lg:w-9/12 flex flex-wrap lg:gap-x-8 gap-10 justify-center items-center">
                {/* {tracks} */}
                <div className="space-y-3 mr-10 lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl">
                    <img className='mx-auto w-12 h-12' src={Img1} alt='' />
                    <h2 className="text-orange-400 text-xl">Express delivery</h2>
                    <hr className="border-orange-700" />
                    <p className="text-sm">Enter your address or choose your current location using app.</p>
                </div>

                <div className="space-y-3 mr-10 lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl">
                    <img className='mx-auto w-12 h-12' src={Img2} alt='' />
                    <h2 className="text-orange-400 text-xl">Variety</h2>
                    <hr className="border-orange-700" />
                    <p className="text-sm">Enter your address or choose your current location using app.</p>
                </div>

                <div className="space-y-3 mr-10 lg:space-y-1 w-60 sm:w-5/12 md:w-4/12 lg:w-3/12 font-cabin rounded-xl text-center p-5 lg:p-5 md:p-3 text-xl">
                    <img className='mx-auto w-12 h-12' src={Img3} alt='' />
                    <h2 className="text-orange-400 text-xl">Discount system</h2>
                    <hr className="border-orange-700" />
                    <p className="text-sm">Enter your address or choose your current location using app.</p>
                </div>
            </div>
        </div>
    )
}

export default Why;