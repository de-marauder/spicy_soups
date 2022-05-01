import { BsInstagram, BsFacebook } from 'react-icons/bs'

const SocialLinks = (props) => {
    return (
        <div className={props.className}>
            <BsInstagram className="hover:text-orange-600 m-2" />
            <BsFacebook className="hover:text-orange-600 m-2" />
        </div>

    )
}

export default SocialLinks;