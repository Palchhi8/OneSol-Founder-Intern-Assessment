import '../styles/Platforms.css'

const logos = ['Northwind', 'Atlas', 'NovaLabs', 'Bluepeak', 'Helios', 'Vertex', 'Radiant', 'Pulse']

function Platforms() {
  return (
    <section className="platforms" id="platforms">
      <p className="eyebrow">Hire From Anywhere</p>
      <h2>Global-ready workflows keep talent pipelines moving</h2>
      <p className="platforms-sub">
        Auto-translate outreach, sync calendars across time zones, and keep distributed teams aligned from
        sourcing to signed offer.
      </p>
      <div className="platforms-slider" aria-label="Partner logos scrolling continuously">
        <div className="platforms-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="platform-logo" key={`${logo}-${index}`}>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Platforms
