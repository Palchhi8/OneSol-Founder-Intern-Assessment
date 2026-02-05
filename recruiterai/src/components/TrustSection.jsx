import '../styles/TrustSection.css'

const logos = ['Northwind', 'Atlas', 'Arclight', 'Vertex', 'Helios', 'Bluepeak']

function TrustSection() {
  return (
    <section className="trust" id="trust">
      <p className="eyebrow">Trusted by fast-growing teams</p>
      <h2>RecruiterAI powers hiring for modern talent teams</h2>
      <div className="trust-logos">
        {logos.map((logo) => (
          <div key={logo} className="trust-logo" aria-label={`${logo} logo`}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustSection
