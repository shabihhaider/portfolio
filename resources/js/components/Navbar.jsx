import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <a href="/">Portfolio</a>
        </div>
        <div className="nav-links">
          <a href="#portfolio">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="#contact"><button className="hire-btn">Hire Me</button></a>
          <button className="hire-btn">Meeting with Me</button>
        </div>
      </nav>
    </div>
  )
}