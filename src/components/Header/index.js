import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ProfileImg from 'media/images/profile-img.jpg'

import SocialMedia from 'components/SocialMedia/'
import NavigationLinks from 'components/NavigationLinks'

export default function HeaderComponent() {
    const headerStyles = "transition-all overflow-hidden absolute bottom-0 left-0"
    const headerContainerStyles = "w-72 h-screen px-5 bg-gray-900 text-white text-center font-bold flex flex-wrap justify-center content-evenly "
    const toggleHeaderStyles = "w-11 h-11 text-xl rounded-full bg-blue-500 flex justify-center items-center hover:bg-blue-400 transition-all absolute right-7 top-7 text-white"

    const profileImgStyles = "rounded-full w-40 h-40 border-8 border-gray-600"
    const titleNameStyles = "w-full text-2xl"

    const [isHeaderVisible, setIsHeaderVisible] = useState(false)
    const [isToggleVisible, setIsToggleVisible] = useState(true)

    useEffect(() => {
        if (window.screen.width < 1280) {
            setIsHeaderVisible(false)
            setIsToggleVisible(true)
        }
        else {
            setIsHeaderVisible(true)
            setIsToggleVisible(false)
        }
    }, [])

    const toggleHeader = () => {
        setIsHeaderVisible(!isHeaderVisible)
    }

    return <>
        {
            isHeaderVisible &&
            <header className={headerStyles}>
                <div className={headerContainerStyles}>
                    <img src={ProfileImg} className={profileImgStyles} alt="Imagen de Perfil" />
                    <h1 className={titleNameStyles}>Lautaro Ceballos</h1>
                    <SocialMedia />
                    <NavigationLinks />
                </div>
            </header>
        }
        {
            isToggleVisible && <button className={toggleHeaderStyles} onClick={toggleHeader}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        }
    </>
}