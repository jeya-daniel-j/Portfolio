import React from 'react'
import SectionTitle from './SectionTitle'
import './Projects.css'

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    color: 'var(--clr-primary)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description:
      'A drag-and-drop Kanban board for teams. Real-time sync with WebSockets, authentication, and role-based access.',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
    color: 'var(--clr-accent)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'An AI-powered tool for generating marketing copy and blog posts. Features template library and team collaboration.',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    color: 'var(--clr-blue)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with animated visualizations, 7-day forecasts, and location-based search.',
    tags: ['React', 'D3.js', 'Weather API', 'CSS'],
    color: 'var(--clr-green)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Analytics',
    description:
      'A dashboard for tracking social media metrics with interactive charts, export functionality, and scheduled reports.',
    tags: ['Vue.js', 'Express', 'Chart.js', 'Redis'],
    color: 'var(--clr-purple)',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description:
      'A CLI tool that generates beautiful portfolio websites from a JSON config. Supports multiple themes and deploy options.',
    tags: ['Node.js', 'CLI', 'Handlebars', 'Vercel'],
    color: 'var(--clr-orange)',
    liveUrl: '#',
    githubUrl: '#',
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
