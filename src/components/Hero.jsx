import avatar from '../assets/avatar.png'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      {/* Decorative shapes */}
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />
      <div className="hero__shape hero__shape--3" />

      <div className="container hero__inner">
        <div className="hero__content">
          <a href="#contact" className="hero__badge brutal-border brutal-shadow">
            <span className="hero__badge-dot" />
            Always online
          </a>

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
              <span className="hero__stat-number">1</span>
              <span className="hero__stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrapper brutal-border brutal-shadow">
            <div className="hero__avatar">
              <img src={avatar} alt="Jeya Daniel J" className="hero__avatar-img" />
            </div>
          </div>
          <div className="hero__floating-tag hero__floating-tag--1 brutal-border">
            <svg className="hero__floating-icon" viewBox="0 0 150 150">
              <path fill="#00758F" d="M84.43,91.58c-2.19,0.55-6.85,1.51-13.7,1.51c-6.71,0-12.19-1.1-12.19-2.47c0-0.96,1.1-1.37,1.1-1.37l-0.14,0 c-3.29,0.55-6.17,1.51-6.17,2.74c0,2.33,9.18,4.11,17.4,4.11c7.12,0,13.84-1.1,16.85-2.74L84.43,91.58L84.43,91.58z M61.83,98.84 c-1.51,0.27-4.66,1.1-4.66,2.6c0,2.19,6.85,3.84,13.56,3.84c9.18,0,13.02-2.33,13.15-2.47l-3.84-2.19 c-1.64,0.41-4.38,0.96-9.32,0.96c-5.48,0-9.04-0.96-9.04-2.06c0-0.27,0.14-0.41,0.41-0.69L61.83,98.84L61.83,98.84z M99.37,84.18 c-0.27,4.93-4.8,7.95-9.32,10.55L90.46,95c4.8-1.37,13.56-5.34,12.88-11.51c-0.41-3.01-3.15-5.21-6.71-5.21 c-1.1,0-2.19,0.27-3.01,0.41l0,0l-0.14,0.41C96.49,78.56,99.51,81.03,99.37,84.18L99.37,84.18z M70.6,113.09 c12.74-0.14,27.13-2.6,26.99-6.85c0-0.82-0.41-1.37-0.96-1.64l-0.14,0.27c-1.1,3.29-11.1,5.62-26.03,5.75 c-9.59,0.14-22.74-2.19-22.74-4.8c0-2.6,6.17-4.11,6.17-4.11l-0.41-0.27c-4.25,0.55-11.92,2.6-11.92,5.48 C41.68,111.17,59.5,113.23,70.6,113.09L70.6,113.09z M69.23,116.24c-5.07,0.14-11.24-0.41-16.58-1.23l-0.41,0.27 c5.21,1.51,12.47,2.47,20.42,2.33c15.62-0.14,28.23-3.97,28.5-8.63l-0.14-0.14C99.92,110.07,93.2,115.97,69.23,116.24L69.23,116.24 z M49.63,83.08c0-2.33,8.91-3.7,13.02-3.97l0.41,0.27c-1.64,0.27-7.95,1.51-7.95,2.88c0,1.64,9.87,2.74,15.48,2.74 c9.73,0,16.3-1.51,18.09-1.92l2.47,1.51C89.5,85.41,82.1,87.6,70.6,87.6C57.85,87.33,49.63,84.86,49.63,83.08L49.63,83.08z" />
              <path fill="#F29111" d="M88.41,50.06h-0.14C84.3,51.43,72.38,56.09,72.38,65c0,4.93,4.93,7.81,4.93,12.47c0,1.64-0.96,3.29-1.64,4.11 l0.41,0.27c2.06-1.37,5.62-4.25,5.62-7.95c0-3.15-4.25-6.85-4.25-10.96C77.17,56.64,85.53,51.71,88.41,50.06L88.41,50.06z M82.52,38.55c0,13.02-17.95,18.09-17.95,27.4c0,6.58,4.25,10.55,6.71,13.15l-0.14,0.14c-3.01-1.92-10.96-6.71-10.96-14.52 c0-11.1,20.55-16.3,20.55-28.77c0-1.51-0.27-2.74-0.41-3.43l0.27-0.14C81.28,33.35,82.52,35.4,82.52,38.55L82.52,38.55z" />
            </svg>
            Java
          </div>
          <div className="hero__floating-tag hero__floating-tag--2 brutal-border">
            <svg className="hero__floating-icon" viewBox="0 0 24 24">
              <path fill="#00599C" d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z" />
            </svg>
            C
          </div>
          <div className="hero__floating-tag hero__floating-tag--3 brutal-border">
            <svg className="hero__floating-icon" viewBox="0 0 24 24">
              <path fill="#F24E1E" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z" />
              <path fill="#A259FF" d="M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51z" />
              <path fill="#1ABCFE" d="M12.735 8.981H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981z" />
              <path fill="#0ACF83" d="M8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148z" />
              <path fill="#FF7262" d="M8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539z" />
            </svg>
            Figma
          </div>
        </div>
      </div>
    </section>
  )
}
