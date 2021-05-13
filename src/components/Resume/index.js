import React from 'react'

export default function Resume() {
    const titleStyles = "text-2xl font-bold mt-5"
    const infoStyles = "border-l-2 border-blue-500 relative pl-8 my-3 pb-3"
    const spanDecoStyles = "h-6 w-6 block border-2 border-blue-500 bg-white rounded-full absolute -left-3.5"
    const titleUpperStyles = "font-bold uppercase"
    const pItalicStyles = "italic mt-3"
    const listStyles = "list-disc ml-5 mt-3"
    const dateStyles = "bg-blue-100 mt-3 px-3 inline-block"

    return <section>
        <h2 className="title">Resume</h2>
        <p className="mt-5">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="grid grid-col-1 xl:grid-cols-2 xl:gap-x-5">
            <div>
                <div id="Sumary" >
                    <h3 className={titleStyles}>Sumary</h3>
                    <div className={infoStyles}>
                        <span className={spanDecoStyles}></span>
                        <h4 className={titleUpperStyles}>Lautaro Ceballos</h4>
                        <p className={pItalicStyles}>
                            Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                    </p>
                        <ul className={listStyles}>
                            <li>
                                Portland par 127,Orlando, FL
                        </li>
                            <li>
                                (123) 456-7891
                        </li>
                            <li>
                                alice.barkley@example.com
                        </li>
                        </ul>
                    </div>
                </div>

                <div id="Education">
                    <h3 className={titleStyles}>Education</h3>

                    <div className={infoStyles}>
                        <span className={spanDecoStyles}></span>
                        <h4 className={titleUpperStyles}>Tecnico Desarrollador de Videojuegos</h4>
                        <span className={dateStyles}>2015-2018</span>
                        <p className={pItalicStyles}>
                            Rochester Institute of Technology, Rochester, NY
                    </p>
                        <p className="mt-3">
                            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
                    </p>
                    </div>

                    <div className={infoStyles}>
                        <span className={spanDecoStyles}></span>
                        <h4 className={titleUpperStyles}>Tecnico Desarrollador de Videojuegos</h4>
                        <span className={dateStyles}>2015-2018</span>
                        <p className={pItalicStyles}>
                            Rochester Institute of Technology, Rochester, NY
                    </p>
                        <p className="mt-3">
                            Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
                    </p>
                    </div>
                </div>

            </div>

            <div id="Experience">
                <h3 className={titleStyles}>Professional Experience</h3>

                <div className={infoStyles}>
                    <span className={spanDecoStyles}></span>
                    <h4 className={titleUpperStyles}>Senior graphic design specialist</h4>
                    <span className={dateStyles}>2015-2018</span>
                    <p className={pItalicStyles}>
                        Experion, New York, NY
                    </p>
                    <ul className={listStyles}>
                        <li>
                            Lead in the design, development, and implementation of the graphic, layout, and production communication materials
                        </li>
                        <li>
                            Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
                        </li>
                        <li>
                            Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
                        </li>
                        <li>
                            Oversee the efficient use of production project budgets ranging from $2,000 - $25,000
                        </li>
                    </ul>
                </div>

                <div className={infoStyles}>
                    <span className={spanDecoStyles}></span>
                    <h4 className={titleUpperStyles}>Graphic design specialist</h4>
                    <span className={dateStyles}>2017 - 2018</span>
                    <p className={pItalicStyles}>
                        Stepping Stone Advertising, New York, NY
                    </p>
                    <ul className={listStyles}>
                        <li>
                            Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).
                        </li>
                        <li>
                            Managed up to 5 projects or tasks at a given time while under pressure
                        </li>
                        <li>
                            Recommended and consulted with clients on the most appropriate graphic design
                        </li>
                        <li>
                            Created 4+ design presentations and proposals a month for clients and account managers
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
}