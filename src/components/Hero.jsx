import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      {/* Decorative shapes */}
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />
      <div className="hero__shape hero__shape--3" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge brutal-border brutal-shadow">
            <span className="hero__badge-dot" />
            Available for work
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Jeya Daniel J</span>
            <br />
            <span className="hero__role">UI/UX Designer</span>
          </h1>

          <p className="hero__description">
            I craft bold, performant web experiences with clean code and creative design.
            Turning ideas into pixel-perfect, interactive realities.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="brutal-btn">
              View Projects ↓
            </a>
            <a href="#contact" className="brutal-btn brutal-btn--accent">
              Get in Touch
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat brutal-border">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
            <div className="hero__stat brutal-border">
              <span className="hero__stat-number">20+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat brutal-border">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrapper brutal-border brutal-shadow">
            <div className="hero__avatar">
              <div className="hero__avatar-placeholder">
                <span>JD</span>
              </div>
            </div>
          </div>
          <div className="hero__floating-tag hero__floating-tag--1 brutal-border">
            React ⚛️
          </div>
          <div className="hero__floating-tag hero__floating-tag--2 brutal-border">
            Node.js 🟢
          </div>
          <div className="hero__floating-tag hero__floating-tag--3 brutal-border">
            Design 🎨
          </div>
        </div>
      </div>
    </section>
  )
}
