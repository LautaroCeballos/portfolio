import React from 'react'
import ProfileImg from 'media/images/profile-img.jpg'



export default function About() {
    return <section id="About">
        <h2 className="title">About</h2>
        <p className="mt-5">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-x-5 mt-0 xl:mt-10">
            <img src={ProfileImg} className="mt-5 xl:mt-0 col-span-full xl:col-span-1" alt="Imagen de Perfil" />

            <div className=" col-span-full xl:col-span-2">
                <h3 className="subtitle mt-10 xl:mt-0">UI/UX Designer & Web Developer.</h3>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <ul className="ul mt-5 grid grid-flow-row-dense grid-cols-1 xl:grid-cols-2">
                    <li><span>Cumpleaños:</span> 7 Nov 1995</li>
                    <li><span>Website:</span> www.lautaroceballos.com</li>
                    <li><span>Telefono:</span> 351 7878228</li>
                    <li><span>Ciudad:</span> Cordoba</li>
                    <li><span>Edad:</span> 25 Años</li>
                    <li><span>Email:</span> lautaroceballos2013@gmail.com</li>
                    <li><span>Stack:</span> MERN (MongoDB - Express - ReactJS - NodeJS) - TailwindCSS</li>
                    <li><span>Disponibilidad:</span> FullTime - PartTime - Freelancer</li>
                </ul>

                <p className="mt-5">
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
            </div>

        </div>


    </section>
}