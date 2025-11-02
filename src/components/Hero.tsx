import React from 'react'

const Hero: React.FC = () => {
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
          <a href="mailto:james@curbsider.com.au" className="fl-primary-btn">
            Investors: Request our deck
          </a>
          <a href="#about" className="fl-secondary-link">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
