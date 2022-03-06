import ContactForm from './ContactForm/ContactForm';
import { MdConnectWithoutContact } from 'react-icons/md';
import { IoCallOutline, IoHomeOutline } from 'react-icons/io5';
// import classes from './Footer.module.css';

const footer = () => {
    const date = new Date()

     return (
        <section className="relative bg-gradient-to-b from-c-green to-black via-black/90 text-white text-center">
            <div className='p-10'>
                <div className='border-2 w-min p-3 mx-auto border-yellow-500 shadow-contactIconShadow rounded-full'>
                    <MdConnectWithoutContact className="mx-auto w-12 h-12 text-yellow-500 " />
                </div>
                <ContactForm />
                <div className="mb-10">
                    <p className="flex justify-center space-x-2">
                        <IoHomeOutline className="text-orange-500" />
                        <span>Find us at: lorem yada yada 123 place, Nigeria</span>
                    </p>
                    <p className="flex justify-center space-x-2">
                        <IoCallOutline className="text-orange-500" />
                        <span>Call to place an order</span>
                        <a className='underline text-white/30 hover:text-orange-300' href='tel:08165520839'> Click to call</a>

                    </p>
                </div>
                <p className="absolute bottom-2 opacity-20">&copy; Copyright {date.getFullYear()}, spicysoups.com. All rights reserved</p>
            </div>
        </section>
    )
}

export default footer;