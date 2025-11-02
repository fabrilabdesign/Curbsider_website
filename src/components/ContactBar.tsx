import React from 'react'

const ContactBar: React.FC = () => {
  return (
    <section id="contact" className="fl-contact">
      <div className="fl-contact-content">
        <h2>Investor Contact</h2>
        <p>
          If you'd like to see the deck, estimates, or supplier plan:
        </p>
      </div>
      <div className="fl-contact-actions">
        <a href="mailto:james@curbsider.com.au" className="fl-primary-btn">
          Email James Backhouse
        </a>
        <p className="fl-contact-alt">
          <strong>James Backhouse</strong><br/>
          Director, Curbsider Pty Ltd<br/>
          📧 james@curbsider.com.au<br/>
          Melbourne, Australia
        </p>
        <p style={{marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)'}}>
          *Curbsider is currently speaking with strategic manufacturing partners and is open to investor, distributor, and builder/developer conversations.
        </p>
      </div>
    </section>
  )
}

export default ContactBar
