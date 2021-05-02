import React from 'react'
import ProfileImg from 'media/images/profile-img.jpg'

import SocialMedia from 'components/SocialMedia/'
import NavigationLinks from 'components/NavigationLinks'
import { motion } from "framer-motion"

export default function HeaderToggle({ isVisible }) {
    const profileImgStyles = "rounded-full w-40 h-40 border-8 border-gray-600"
    const titleNameStyles = "w-full text-2xl"

    const headerStyles = "transition-all overflow-hidden fixed bottom-0 left-0 z-50"
    const headerContainerStyles = "w-72 h-screen px-5 bg-gray-900 text-white text-center font-bold flex flex-wrap justify-center content-evenly"

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }

    return <>
        <motion.header 
            key="header"
            animate={ isVisible ? "open" : "closed" }
            variants={variants}
            transition={{ duration: 0.15 }}
            className={headerStyles}
        >
            <div className={headerContainerStyles}>
                <img src={ProfileImg} className={profileImgStyles} alt="Imagen de Perfil" />
                <h1 className={titleNameStyles}>Lautaro Ceballos</h1>
                <SocialMedia />
                <NavigationLinks />
            </div>
        </motion.header>
    </>

}