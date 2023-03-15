import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <div>
      <nav className="navbar bg h-nav">
        <ul className="nav-list v-className">
            <div className="logo"><img src="img/thecontractors.png" alt="logo"/></div>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </nav>
    </div>
    <div className="Container" id="home"></div>
    <section className="background firstSection">
        <div className="box-main">
            <div className="firstHalf">
                <p className="head1">Dihaari.pk</p>
                <p className="text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nulla officiis est ab doloremque rerum odit. Voluptatibus magni quam ipsa sapiente, nemo unde alias!</p>
            </div>
            </div>
            </section>
            </>
  )
}

export default Navbar
