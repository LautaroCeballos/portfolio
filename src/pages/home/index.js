import React from 'react'
import HeroSliderComponent from 'components/HeroSlider/'
import AboutComponent from 'components/About/'

const content = "mx-10 text-gray-900 text-lg"

export default function Home(){
    return <main>
        <HeroSliderComponent/>
        <div className={content}>
            <AboutComponent/>
        </div>
        
    </main>
}