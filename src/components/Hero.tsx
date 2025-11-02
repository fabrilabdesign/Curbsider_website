import React from 'react'

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="fl-hero">
      <img
        className="fl-hero-image"
        src="/hero.jpg"
        alt="Curbsider Hero"
      />
      <div className="fl-hero-overlay" />
      <div className="fl-hero-content">
        <h1>Curbsider — Secure, architecturally sensitive parcel letterboxes.</h1>
        <p>
          We're building a new category of smart parcel delivery hardware for Australian homes — designed to look good on the street and actually stop parcel theft.
        </p>
        <div className="fl-hero-actions">
          <button className="fl-primary-btn" onClick={() => scrollTo('contact')}>
            Investors: Request our deck
          </button>
          <a href="#about" className="fl-secondary-link">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
