import React from 'react'
import './SectionTitle.css'

export default function SectionTitle({ children, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <h2>{children}</h2>
      <div className="section-title__bar" />
    </div>
  )
}
