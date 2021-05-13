import React from 'react'
import HeroSliderComponent from 'components/HeroSlider/'
import AboutComponent from 'components/About/'
import SkillsComponent from 'components/Skills/'
import ResumeComponent from 'components/Resume/'
import PortfolioComponent from 'components/Porfolio/'

const content = "mx-auto px-5 max-w-md md:max-w-3xl xl:max-w-5xl text-gray-900 text-lg"

export default function Home(){
    return <main>
        <HeroSliderComponent/>
        <div className={content}>
            <AboutComponent/>
            <SkillsComponent/>
            <ResumeComponent/>
            <PortfolioComponent/>
        </div>
        
    </main>
}