import React from 'react'
import ProfileImg from 'media/images/profile-img.jpg'



export default function About(){
    return <section id="About" className="">
        <h2 className="title">About</h2>
        <p className="p">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <img src={ProfileImg} className="img" alt="Imagen de Perfil" />

        <h3 className="subtitle">UI/UX Designer & Web Developer.</h3>
        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <ul className="ul">
            <li><span>Cumpleaños:</span> 7 Nov 1995</li>
            <li><span>Website:</span> www.lautaroceballos.com</li>
            <li><span>Telefono:</span> 351 7878228</li>
            <li><span>Ciudad:</span> Cordoba</li>
            <li><span>Edad:</span> 25</li>
            <li><span>Stack:</span> MERN (MongoDB - Express - ReactJS - NodeJS) - TailwindCSS</li>
            <li><span>Email:</span> lautaroceballos2013@gmail.com</li>
            <li><span>Disponibilidad:</span> FullTime - PartTime - Freelancer</li>
        </ul>

        <p className="p">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
    </section>
}