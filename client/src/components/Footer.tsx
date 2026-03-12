import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-col logo-col">
          <Link to="/" className="logo">PEGASUS AI</Link>
          <p>Automatizare inteligentă pentru afacerea ta, bazată pe cele mai avansate tehnologii AI.</p>
          <div className="social-links" style={{ marginTop: 20 }}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Navigare</h4>
          <ul>
            <li><Link to="/">Acasă</Link></li>
            <li><Link to="/about">Despre Noi</Link></li>
            <li><Link to="/services">Servicii</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@pegasus-ai.md">contact@pegasus-ai.md</a></li>
            <li><a href="tel:+37369123456">+373 69 123 456</a></li>
            <li>Str. Studenților 9/8, Chișinău</li>
            <li>MD-2045, Moldova</li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p>&copy; 2026 Pegasus AI Systems. Toate drepturile rezervate.</p>
          <p className="love-text">Dezvoltat cu 💙 în Chișinău, Moldova</p>
        </div>
      </div>
    </footer>
  )
}
