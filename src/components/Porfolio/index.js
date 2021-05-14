import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faLink } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    const descriptionStyles = "my-5"
    const categoriesStyles = "flex flex-nowrap w-min mx-auto mb-10 bg-gray-200 rounded-full"
    const categoryStyles = "px-3 py-1 font-semibold"
    const proyectsStyles = "grid grid-cols-2 lg:grid-cols-3 mt-5 gap-x-3"
    const articleStyles = ""
    const buttonsStyles = "w-1/2 text-center relative -top-7 bg-blue-500 text-white opacity-75 hover:opacity-100 transition-all inline-block"

    const categories = ['All', 'App', 'Card', 'Web']

    const proyects = [
        {
            id: "123456",
            title: "Titulo del proyecto",
            imgSrc: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg",
        },
        {
            id: "123156",
            title: "Titulo del proyecto",
            imgSrc: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg",
        },
        {
            id: "123556",
            title: "Titulo del proyecto",
            imgSrc: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg",
        }
    ]

    return <section id="Portoflio">
        <h2 className="title">Portfolio works!</h2>
        <p className={descriptionStyles}>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <ul className={categoriesStyles}>{
            categories.map(category => {
                return <li key={category}>
                    <button className={categoryStyles}>
                        {category}
                    </button>
                </li>
            })
        }</ul>

        <div className={proyectsStyles}>
            {
                proyects.map(({id, title, imgSrc}) => {
                    return (
                        <article className={articleStyles} key={id}>
                            <figure>
                                <picture>
                                    <img src={imgSrc} alt={title}/>  
                                </picture>
                                <figcaption>
                                    <a href={id} className={buttonsStyles}>
                                        <FontAwesomeIcon icon={faBookOpen}/>
                                    </a>
                                    <a href={id} className={buttonsStyles}>
                                        <FontAwesomeIcon icon={faLink}/>
                                    </a>
                                </figcaption>
                            </figure>
                        </article>
                    )
                })
            }
        </div>
    </section>
}