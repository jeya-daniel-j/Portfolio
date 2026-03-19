import React from 'react'
import SectionTitle from './SectionTitle'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>

        <div className="about__grid">
          <div className="about__image-col">
            <div className="about__image-wrapper brutal-border brutal-shadow">
              <div className="about__image-placeholder">
                <span className="about__emoji">👨‍💻</span>
              </div>
            </div>
            <div className="about__accent-block" />
          </div>

          <div className="about__text-col">
            <div className="about__card brutal-border brutal-shadow">
              <h3 className="about__subtitle">
                A passionate designer who loves building things for the web.
              </h3>
              <p>
                I'm a UI/UX designer with 0 years of experience building modern web
                applications. I specialize in design systems, user interfaces, and everything in between.
                My focus is on creating performant, accessible, and visually striking
                digital experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sketching UI concepts. I believe
                great software is born at the intersection of solid engineering and
                thoughtful design.
              </p>

              <div className="about__info-grid">
                <div className="about__info-item">
                  <span className="about__info-label">Name</span>
                  <span className="about__info-value">Jeya Daniel J</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Email</span>
                  <span className="about__info-value">jeyadanielj@gmail.com</span>
                </div>
                <div className="about__info-item">
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">Tirunelveli, TN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
