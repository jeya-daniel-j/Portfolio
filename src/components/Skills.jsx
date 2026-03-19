import React from 'react'
import SectionTitle from './SectionTitle'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    title: 'Programming language',
    color: 'var(--clr-primary)',
    skills: [
      { name: 'C', icon: '🔤' },
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Python', icon: '🐍' },
    ],
  },
  {
    title: 'Tools & More',
    color: 'var(--clr-blue)',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Figma', icon: '🎯' },
      { name: 'AWS', icon: '☁️' },
      { name: 'CI/CD', icon: '⚙️' },
      { name: 'Testing', icon: '🧪' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <SectionTitle>Skills</SectionTitle>

        <div className="skills__categories">
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skills__category brutal-border brutal-shadow" key={cat.title}>
              <h3
                className="skills__category-title"
                style={{ background: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="skills__list">
                {cat.skills.map((skill) => (
                  <div className="skills__item brutal-border" key={skill.name}>
                    <span className="skills__icon">{skill.icon}</span>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
