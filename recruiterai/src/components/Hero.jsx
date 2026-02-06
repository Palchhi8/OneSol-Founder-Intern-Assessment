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
    <>
    {/* Navigation Bar */}
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo-icon">🔷</span>
        <span className="logo-text">RecruiterAI</span>
      </div>
      <div className="navbar-nav">
        <a href="#how-it-works">Product</a>
        <a href="#metrics">Metrics</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="navbar-actions">
        <button className="login-btn">Log In</button>
        <button className="demo-btn">Book a Demo</button>
      </div>
    </nav>
    
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="eyebrow">RECRUITERAI CORE</p>
        <h1>Every Hire, Faster and Better</h1>
        <p className="hero-subtext">
          Manual hiring stacks slow teams down. RecruiterAI automates
          sourcing, screening, and scheduling so your team closes top talent
          before the competition even responds.
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
    </>
  );
}

export default Hero;
