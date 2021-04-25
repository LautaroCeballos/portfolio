import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia() {
    const SocialContainerStyles = "w-full flex justify-evenly"
    const SocialBtnStyles = "w-9 h-9 rounded-full bg-gray-600 flex justify-center items-center hover:bg-blue-600 transition-all"

    return <div className={SocialContainerStyles}>
        <a href="https://www.facebook.com/stadygames/" className={SocialBtnStyles}>
            <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com/rock_and_beers/" className={SocialBtnStyles}>
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/lautaro-ceballos-99b9a2105/" className={SocialBtnStyles}>
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/lautaroCeballos" className={SocialBtnStyles}>
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.behance.net/lautaroceballos" className={SocialBtnStyles}>
            <FontAwesomeIcon icon={faBehance} />
        </a>
    </div>
}
