import React from 'react'

const projects = [
  {
    title: 'Where we are now',
    desc: '✅ Industrial design completed on core form factors • ✅ Manufacturing partner engaged (sheet metal, local) • ✅ E-commerce channel ready/in progress • 🟡 IoT device moving from prototype → production',
    tag: 'Development Status',
  },
  {
    title: 'What we\'re raising for',
    desc: 'Finalise the electronic device and gateway • Tool and launch the initial mechanical range • Build inventory and marketing for online sales • Support government matching/R&D program',
    tag: 'Investment Goals',
  },
  {
    title: 'Why Curbsider',
    desc: 'Real problem (parcel theft) + Real hardware (defensible form factors) + Australian supply chain + Two-stage go-to-market (mechanical first, IoT second)',
    tag: 'Competitive Advantages',
  },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="fl-section fl-projects">
      <div className="fl-section-heading">
        <h2>Curbsider Overview</h2>
        <p>Building secure parcel delivery solutions for Australian homes.</p>
      </div>
      <div className="fl-project-grid">
        {projects.map((p) => (
          <article key={p.title} className="fl-project-card">
            <div className="fl-project-meta">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button
              className="fl-project-link"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Discuss similar work →
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
