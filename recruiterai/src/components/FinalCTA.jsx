import '../styles/FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta">
      <p className="eyebrow">Get Started</p>
      <h2>Ready to Hire Better, Faster?</h2>
      <p className="cta-subtext">
        Join 500+ companies hiring smarter with AI. Launch RecruiterAI in days and turn every recruiter
        into a strategic talent partner.
      </p>
      <div className="cta-buttons">
        <button className="primary-btn" onClick={() => alert('Welcome to the RecruiterAI trial!')}>
          Start Free Trial
        </button>
        <button
          className="secondary-btn"
          onClick={() => {
            const hero = document.getElementById('hero')
            if (hero) hero.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Schedule Demo
        </button>
      </div>
    </section>
  )
}

export default FinalCTA
