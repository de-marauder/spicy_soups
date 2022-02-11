import ContactForm from './ContactForm/ContactForm';

// import classes from './Footer.module.css';

const footer = () => {
    const date = new Date()
    console.log(date)
    return (
        <section className="bg-gradient-to-tr from-black to-black/60 text-white text-center">
        
            {/* <svg className={classes.Curve} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,288L120,261.3C240,235,480,181,720,176C960,171,1200,213,1320,234.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
            <div className="" >


                <div id='contact' className="">
                    
                    <div>
                        <ContactForm />
                        <div className="">
                            <p><strong>Address:</strong> lorem yada yada 123 place, Nigeria</p>
                            <p>Want to talk to us? <a className='underline text-white/30 hover:text-orange-300' href='tel:08165520839'>Click to call</a></p>
                        </div>
                        <p className="py-5 opacity-20">&copy; 2022, spicysoups.com. All rights reserved</p>
                    </div>
                </div>

                {/* <svg className={classes.SVG + ' ' + classes.SVG1} id="sw-js-blob-svg1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient1" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(135.211, 240.379, 127.654, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient1)" d="M14.5,-19.4C17,-12,16.1,-6,17.4,1.3C18.7,8.6,22.2,17.1,19.7,18.1C17.1,19.1,8.6,12.5,1.4,11.1C-5.7,9.6,-11.4,13.4,-15.5,12.4C-19.5,11.4,-21.8,5.7,-20.3,1.5C-18.8,-2.7,-13.5,-5.4,-9.5,-12.9C-5.4,-20.4,-2.7,-32.7,1.6,-34.3C6,-35.9,12,-26.9,14.5,-19.4Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ "transition": "all 0.3s ease 0s" }}></path>
                </svg>

                <svg className={classes.SVG + ' ' + classes.SVG2} id="sw-js-blob-svg2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient2" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(135.211, 240.379, 127.654, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>                    </defs>
                    <path fill="url(#sw-gradient2)" d="M21.5,-16.2C29.1,-13.8,37.4,-6.9,39.7,2.3C42.1,11.6,38.5,23.2,30.8,30.5C23.2,37.7,11.6,40.7,4.5,36.1C-2.6,31.6,-5.1,19.6,-6.4,12.4C-7.7,5.1,-7.7,2.6,-8.9,-1.2C-10.1,-5,-12.5,-9.9,-11.2,-12.3C-9.9,-14.7,-5,-14.5,1,-15.4C6.9,-16.4,13.8,-18.6,21.5,-16.2Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ "transition": "all 0.3s ease 0s" }}></path>
                </svg>

                <svg className={classes.SVG + ' ' + classes.SVG3} id="sw-js-blob-svg3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient3" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(135.211, 240.379, 127.654, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path fill="url(#sw-gradient3)" d="M8.3,-5.7C11.7,-4.9,16.1,-2.4,18.3,2.2C20.5,6.8,20.4,13.6,17,21.7C13.6,29.8,6.8,39.3,2.8,36.5C-1.2,33.8,-2.5,18.7,-9.1,10.6C-15.6,2.5,-27.6,1.2,-28.4,-0.8C-29.2,-2.9,-18.9,-5.8,-12.4,-6.6C-5.8,-7.5,-2.9,-6.3,-0.2,-6.1C2.4,-5.9,4.9,-6.6,8.3,-5.7Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{"transition": "all 0.3s ease 0s"}}></path>
                </svg> */}
            </div>
        </section>
    )
}

export default footer;