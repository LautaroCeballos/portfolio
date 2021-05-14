import React from 'react'

import reactSvg from 'media/svg/react.svg'
import angularSvg from 'media/svg/angular.svg'
import cssSvg from 'media/svg/CSS.svg'
import htmlSvg from 'media/svg/HTML.svg'
import illustratorSvg from 'media/svg/illustrator.svg'
import jquerySvg from 'media/svg/jquery.svg'
import jsSvg from 'media/svg/JS.svg'
import mongoSvg from 'media/svg/mongodb.svg'
import nodeSvg from 'media/svg/node.svg'
import photoshopSvg from 'media/svg/photoshop.svg'
import tailwindSvg from 'media/svg/tailwind.svg'
import xdSvg from 'media/svg/xd.svg'

export default function SkillsList() {
    const containerStyles = "my-5"
    const ListStyles = "flex md:flex-nowrap flex-wrap gap-5 justify-around"
    const ItemStyles = "md:h-16 h-9"
    const imgStyles = "h-full min-w-full opacity-70 hover:opacity-100 transition-all"

    const skills = [{
        src: htmlSvg,
        alt: "HTML5"
    },{
        src: cssSvg,
        alt: "CSS3"
    },{
        src: jsSvg,
        alt: "JavaScript"
    },{
        src: reactSvg,
        alt: "React JS"
    },{
        src: angularSvg,
        alt: "Angular JS"
    },{
        src: tailwindSvg,
        alt: "TailwindCSS"
    },{
        src: nodeSvg,
        alt: "NodeJS y Express"
    },{
        src: mongoSvg,
        alt: "MongoDB"
    },{
        src: jquerySvg,
        alt: "JQuery"
    },{
        src: illustratorSvg,
        alt: "Illustrator"
    },{
        src: photoshopSvg,
        alt: "Photoshop CC"
    },{
        src: xdSvg,
        alt: "Adobe XD"
    }]

    return <div className={containerStyles}>
        <ul className={ListStyles}>
            {
                skills.map(({src, alt}) => {
                    return <li className={ItemStyles} key={alt}>
                        <img src={src} alt={alt} className={imgStyles}/>
                    </li>
                })
            }
        </ul>    
    </div>
}