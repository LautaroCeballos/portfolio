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
    const ListStyles = "flex gap-5 justify-around"
    const ItemStyles = "h-14"
    const imgStyles = "h-full min-w-full"

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
                skills.map(skill => {
                    return <li className={ItemStyles}>
                        <img key={skill.src} src={skill.src} alt={skill.alt} className={imgStyles}/>
                    </li>
                })
            }
        </ul>    
    </div>
}