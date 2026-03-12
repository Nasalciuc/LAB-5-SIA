import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">PEGASUS AI</Link>
        <div className="nav-links">
          <Link to="/" className={pathname === '/' ? 'active' : ''}>Acasă</Link>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>Despre Noi</Link>
          <Link to="/services" className={pathname === '/services' ? 'active' : ''}>Servicii</Link>
          <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </div>
        <Link to="/contact" className="cta-button">Solicită Demo</Link>
      </div>
    </nav>
  )
}
