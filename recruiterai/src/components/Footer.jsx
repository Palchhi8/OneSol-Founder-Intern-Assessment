import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo-icon">🔑</span>
          <span className="footer-logo-text">RecruiterAI</span>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#security">Security</a>
          <a href="#cookies">Cookies</a>
        </div>
        <div className="footer-copyright">
          © 2024 RecruiterAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
