import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="fl-section fl-about">
      <div className="fl-section-heading">
        <h2>Why this matters</h2>
        <p>Parcel theft is rising as e-commerce grows, and most parcel boxes are ugly and don't suit architect-designed homes.</p>
      </div>
      <div className="fl-about-body">
        <div>
          <p>
            <strong>Curbsider Pty Ltd</strong> is an Australian hardware startup developing a family of letterboxes and parcel boxes that combine good industrial design, Australian-made sheet metal fabrication, and IoT features for secure deliveries. We're currently onboarding supply partners and preparing for market.
          </p>
          <ul style={{marginTop: '1rem'}}>
            <li><strong>Parcel theft is rising</strong> as e-commerce grows.</li>
            <li><strong>Most parcel boxes are ugly</strong> and don't suit architect-designed or premium frontages.</li>
            <li><strong>Builders and developers want a standardised solution</strong> that can be repeated across estates.</li>
            <li><strong>Councils and body corporates care about street presentation.</strong></li>
          </ul>
          <p style={{marginTop: '1rem'}}>
            <strong>Curbsider sits right in the middle: security + good street appeal.</strong>
          </p>
        </div>
        <div className="fl-about-list">
          <h3>What we're building</h3>
          <ul>
            <li><strong>Mechanical parcel/letterbox range</strong><br/>Australian-made, powder-coated, front-opening, Curbsider motif, sized for typical small parcels, fastest path to early revenue</li>
            <li><strong>IoT/electronic parcel safe (in development)</strong><br/>Camera + presence detection, delivery verification, secure access for owners/couriers/trades, designed for socio-economic areas</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
