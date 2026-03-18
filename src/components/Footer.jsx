import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            Portfolio
            <span className="footer__logo-bracket">/&gt;</span>
          </a>
          <p className="footer__tagline">
            Building digital experiences that stand out.
          </p>
        </div>

        <div className="footer__center">
          <div className="footer__nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__socials">
            <a href="#" className="footer__social brutal-border" aria-label="GitHub">GH</a>
            <a href="#" className="footer__social brutal-border" aria-label="LinkedIn">IN</a>
            <a href="#" className="footer__social brutal-border" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom brutal-border">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Jeya Daniel J. All rights reserved.</p>
          <p>
            Designed & built with <span className="footer__heart">♥</span> and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
