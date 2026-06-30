import React from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/Images/Hero-bg.png'
import logo from '../assets/Images/Logo-bfly.png'

export default function Navbar() {
  return (
    <section className="hero">
      <div className='blackbox'></div>

      <img 
        className="hero-bg"
        src={heroBg}
        alt="background"
      />


      <nav>

        <Link to="/">
          <img 
            className="navlogo" 
            src={logo} 
            alt="logo"
          />
        </Link>


        <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Collections</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>

        </div>

      </nav>


    </section>
  )
}