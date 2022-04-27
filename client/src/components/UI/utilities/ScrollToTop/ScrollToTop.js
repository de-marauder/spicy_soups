import { useLayoutEffect } from "react"
import { useLocation } from "react-router"

const ScrollToTop = () => {
    // console.log(useLocation())
    const location = useLocation();
    // console.log(location)
    useLayoutEffect(() => {
        // console.log("before window scroll")
        window.scrollTo(0, 0)
        // console.log("AFTER window scroll")
    }, [location.pathname])

    return null
}

export default ScrollToTop