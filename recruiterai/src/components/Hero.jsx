import '../styles/Hero.css'

const conversationCards = [
  {
    title: 'Hiring Manager',
    message: 'We lost two candidates last week waiting on manual feedback loops.',
  },
  {
    title: 'Recruiter',
    message: 'I spend 5+ hours daily just coordinating interview calendars.',
  },
  {
    title: 'Operations',
    message: 'Pipeline visibility is a mess across regions and teams.',
  },
  {
    title: 'People Ops',
    message: 'Follow-ups take weeks, so passive talent simply disappears.',
  },
]


function Hero() {

  return (
    <section className="hero" id="hero">
      {/* Elegant SVG background shapes */}
      <svg className="hero-bg-svg" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="450" cy="450" r="400" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(450 450) scale(400)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A5D8FF" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>
      <svg className="hero-bg-svg2" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="300" cy="300" rx="260" ry="220" fill="#B197FC" />
      </svg>
      <div className="hero-content">
        <p className="eyebrow">RecruiterAI</p>
        <h1>Every Hire, Faster and Better</h1>
        <p className="hero-subtext">
          Manual hiring stacks slow teams down. RecruiterAI automates sourcing, screening,
          scheduling, and candidate nurturing so your team closes top talent before the
          competition even responds.
        </p>
        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => alert('Start Hiring Smarter!')}
          >
            Start Hiring Smarter
          </button>
          <button
            className="secondary-btn"
            onClick={() => {
              const el = document.getElementById('how-it-works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See How It Works
          </button>
        </div>
      </div>
      <div className="hero-visual">
        {conversationCards.map((card, index) => (
          <div key={card.title} className={`hero-card card-${index + 1}`}>
            <span>{card.title}</span>
            <p>{card.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
