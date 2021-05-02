import React from 'react'
import ProfileImg from 'media/images/profile-img.jpg'

export default function About(){
    return <section id="About" className="container section-content">
        <h2 className="subheader">About</h2>
        <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <img src={ProfileImg} alt="Imagen de Perfil" />

        <h3>UI/UX Designer & Web Developer.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <ul>
            <li><b>Cumpleaños:</b> 7 Nov 1995</li>
            <li><b>Website:</b> www.lautaroceballos.com</li>
            <li><b>Telefono:</b> 351 7878228</li>
            <li><b>Ciudad:</b> Cordoba</li>
            <li><b>Edad:</b> 25</li>
            <li><b>Stack:</b> MERN (MongoDB - Express - ReactJS - NodeJS) - TailwindCSS</li>
            <li><b>Email:</b> lautaroceballos2013@gmail.com</li>
            <li><b>Disponibilidad:</b> FullTime - PartTime - Freelancer</li>
        </ul>

        <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
    </section>
}