import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Acasă' },
  { to: '/about', label: 'Despre Noi' },
  { to: '/services', label: 'Servicii' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-in">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="Pegasus AI" />
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