import React from 'react'
import HeroSliderComponent from 'components/HeroSlider/'
import AboutComponent from 'components/About/'

const content = "mx-3"

export default function Home(){
    return <main>
        <HeroSliderComponent/>
        <div className={content}>
            <AboutComponent/>
        </div>
        
    </main>
}