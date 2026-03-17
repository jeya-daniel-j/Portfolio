import React, { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-bracket">&lt;</span>
          Portfolio
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href="#contact" className="brutal-btn" onClick={closeMenu}>
              Hire Me
            </a>
          </li>
        </ul>

        <a href="#contact" className="brutal-btn navbar__cta-desktop">
          Hire Me
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
