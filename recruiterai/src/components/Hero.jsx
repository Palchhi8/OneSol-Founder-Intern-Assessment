import '../styles/Hero.css'

const conversationCards = [
  {
    title: 'Sarah K., Founder at TechStart',
    message: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
  },
  {
    title: 'Rahul M., Hiring Manager at GrowthCo',
    message: 'Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.',
  },
  {
    title: 'Priya S., CEO at InnovateLabs',
    message: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
  },
  {
    title: 'Amit T., Head of HR at ScaleUp',
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
