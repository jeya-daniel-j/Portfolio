import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, wire this to an API / email service
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>

        <div className="contact__grid">
          {/* Left – Info */}
          <div className="contact__info">
            <h3 className="contact__heading">Let's work together</h3>
            <p className="contact__text">
              Have a project in mind or just want to say hello? Fill out the form or
              reach me through any of the channels below. I typically respond within
              24 hours.
            </p>

            <div className="contact__details">
              <div className="contact__detail brutal-border">
                <span className="contact__detail-icon">📧</span>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">hello@johndoe.dev</span>
                </div>
              </div>
              <div className="contact__detail brutal-border">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="#" className="contact__social brutal-border" aria-label="GitHub">
                GH
              </a>
              <a href="#" className="contact__social brutal-border" aria-label="LinkedIn">
                IN
              </a>
              <a href="#" className="contact__social brutal-border" aria-label="Twitter">
                TW
              </a>
              <a href="#" className="contact__social brutal-border" aria-label="Dribbble">
                DR
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <form className="contact__form brutal-border brutal-shadow" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="brutal-border"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="brutal-border"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="brutal-border"
              />
            </div>
            <button type="submit" className="brutal-btn brutal-btn--accent" style={{ width: '100%', justifyContent: 'center' }}>
              {submitted ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
