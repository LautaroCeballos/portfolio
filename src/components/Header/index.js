import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HeaderToggle from 'components/HeaderToggle/index'

export default function HeaderComponent() {
    const toggleHeaderStyles = "w-11 h-11 text-xl rounded-full bg-blue-500 flex justify-center items-center hover:bg-blue-400 transition-all right-7 top-7 text-white fixed"

    const [isVisible, setIsVisible] = useState(true)
    const toggleHeader = () => {
        setIsVisible(!isVisible)
    }

    return <>    
        <HeaderToggle isVisible={isVisible}/>
        <button className={toggleHeaderStyles} onClick={toggleHeader}>
            <FontAwesomeIcon icon={faBars} />
        </button>
    </>
}