import React from 'react'
import HeroSliderComponent from 'components/HeroSlider/'
import AboutComponent from 'components/About/'
import SkillsComponent from 'components/Skills/'

const content = "mx-auto px-5 max-w-md md:max-w-3xl xl:max-w-5xl text-gray-900 text-lg"

export default function Home(){
    return <main>
        <HeroSliderComponent/>
        <div className={content}>
            <AboutComponent/>
            <SkillsComponent/>
        </div>
        
    </main>
}