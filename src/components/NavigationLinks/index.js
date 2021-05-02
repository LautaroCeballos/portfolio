import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faPaperclip, faFileAlt} from '@fortawesome/free-solid-svg-icons'

export default function NavigationLinks() {
    const navStyles = "text-left w-full text-gray-400 h-1/3"
    const navLiStyles = "w-full hover:text-white transition-all"
    const navUlStyles = "h-full flex flex-wrap content-between"
    const navIconStyles = "mx-3"
    const activeLiStyles = "text-white"
    const activeIconStyles = "text-blue-600"

    return <nav className={navStyles}>
        <ul className={navUlStyles}>
            <li className={`${navLiStyles} ${activeLiStyles}`}>
                <a href="/" >
                    <FontAwesomeIcon icon={faHome} className={`${navIconStyles} ${activeIconStyles}`} />Home
            </a>
            </li>
            <li className={navLiStyles}>
                <a href="/">
                    <FontAwesomeIcon icon={faUser} className={navIconStyles} />About
            </a>
            </li>
            <li className={navLiStyles}>
                <a href="/">
                    <FontAwesomeIcon icon={faPaperclip} className={navIconStyles} />Resume
            </a>
            </li>
            <li className={navLiStyles}>
                <a href="/">
                    <FontAwesomeIcon icon={faFileAlt} className={navIconStyles} />Portfolio
            </a>
            </li>
        </ul>
    </nav>
}