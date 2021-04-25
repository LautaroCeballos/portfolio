import React from 'react'

export default function HeroSlider(){
    const heroContainerStyles = "bg-hero-image bg-cover bg-right-top bg-fixed  h-screen w-screen flex flex-col items-center justify-center bg-blur-2xl"
    const contentStyles = "font-semibold text-white"
    const contentTitleStyles = "text-5xl"
    const contentSubtitleStyles = "text-3xl"
    const subrayedStyles = "border-b-4 border-blue-500"

    return <>
        <section id="hero-home" className={heroContainerStyles}>
            <div className={contentStyles}>
                <h2 className={contentTitleStyles}>Lautaro Ceballos</h2>
                <h4 className={contentSubtitleStyles}>I'm <span className={subrayedStyles}>FrontEnd Developer</span></h4>
            </div>
        </section>
    </>
}