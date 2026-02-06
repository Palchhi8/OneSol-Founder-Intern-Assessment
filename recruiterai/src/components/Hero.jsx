import '../styles/Hero.css'

const conversationCards = [
  {
    name: 'Sarah K.',
    role: 'Founder at TechStart',
    message: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
  },
  {
    name: 'Rahul M.',
    role: 'Hiring Manager at GrowthCo',
    message: 'Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.',
  },
  {
    name: 'Priya S.',
    role: 'CEO at InnovateLabs',
    message: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
  },
  {
    name: 'Amit T.',
    role: 'Head of HR at ScaleUp',
    message: 'Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.',
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
          Manual hiring processes lead to lost candidates and wasted time.
          While you’re reviewing resumes, top talent is accepting offers elsewhere.
          RecruiterAI automates sourcing, screening, and scheduling so you hire
          faster—without sacrificing quality.
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
          <div key={card.name} className={`hero-card card-${index + 1}`}>
            <div className="card-header">
              <span className="card-name">{card.name}</span>
              <span className="card-role">{card.role}</span>
            </div>
            <p>{card.message}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Hero;
