import { Link, useLocation } from 'react-router-dom'
import { Hexagon } from 'lucide-react'

const links = [
  { to: '/', label: 'Acasă' },
  { to: '/about', label: 'Despre Noi' },
  { to: '/services', label: 'Servicii' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <nav className="nav">
      <div className="nav-in">
        <Link to="/" className="nav-logo">
          <Hexagon size={22} />
          <span>PEGASUS AI</span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={`nav-lk${pathname === l.to ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="nav-cta">Solicită Demo</Link>
        <button className="nav-ham" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
