import { Link } from 'react-router-dom'
import { Hexagon, Linkedin, Facebook, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-grid">
        <div className="ft-brand">
          <Link to="/" className="nav-logo" style={{ fontSize: 16 }}>
            <Hexagon size={20} color="var(--accent)" />
            <span>PEGASUS AI</span>
          </Link>
          <p>Automatizare inteligentă pentru afaceri din Moldova și Europa de Est. Platformă no-code cu agenți AI.</p>
          <p className="ft-heart" style={{ color: 'var(--teal)', fontSize: 14 }}>🇲🇩 Dezvoltat cu 💙 în Chișinău, Moldova</p>
        </div>
        <div>
          <h4 className="ft-col-t">Navigare</h4>
          <div className="ft-links">
            <Link to="/" className="ft-lk">Acasă</Link>
            <Link to="/about" className="ft-lk">Despre Noi</Link>
            <Link to="/services" className="ft-lk">Servicii</Link>
            <Link to="/contact" className="ft-lk">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="ft-col-t">Contact</h4>
          <div className="ft-links">
            <a href="mailto:contact@pegasus-ai.md" className="ft-lk">contact@pegasus-ai.md</a>
            <a href="tel:+37369123456" className="ft-lk">+373 69 123 456</a>
            <span className="ft-lk">Str. Studenților 9/8</span>
            <span className="ft-lk">Chișinău, MD-2045</span>
          </div>
        </div>
      </div>
      <div className="ft-bot">
        <span className="ft-copy">© 2026 Pegasus AI Systems. Toate drepturile rezervate.</span>
        <div className="ft-soc">
          {[
            { icon: <Linkedin size={16} />, href: '#' },
            { icon: <Facebook size={16} />, href: '#' },
            { icon: <Github size={16} />, href: '#' },
            { icon: <Twitter size={16} />, href: '#' },
          ].map((s, i) => (
            <a key={i} href={s.href} className="ft-si" target="_blank" rel="noopener noreferrer">{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}