import React from 'react'
import SectionTitle from './SectionTitle'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Car Rental Platform',
    description:
      'This Platform enables users to easily browse, book, and manage vehicle rentals online with a seamless experience.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    color: 'var(--clr-primary)',
    liveUrl: '#',
    githubUrl: 'https://github.com/jeya-daniel-j',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <article className="project-card brutal-border brutal-shadow" key={i}>
              <div
                className="project-card__header"
                style={{ background: project.color }}
              >
                <span className="project-card__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="project-card__title">{project.title}</h3>
              </div>

              <div className="project-card__body">
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="project-card__tag brutal-border" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={project.liveUrl}
                    className="brutal-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    className="brutal-btn brutal-btn--outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
