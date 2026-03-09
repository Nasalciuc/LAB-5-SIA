import { Link, useLocation } from 'react-router-dom'
import { Hexagon } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Acasă' },
  { path: '/about', label: 'Despre Noi' },
  { path: '/services', label: 'Servicii' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 60px',
      background: 'var(--pg-bg)',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Hexagon size={32} color="var(--pg-accent)" />
        <span style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--pg-text)',
        }}>Pegasus AI</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              fontFamily: 'var(--pg-body)',
              fontSize: 15,
              fontWeight: location.pathname === link.path ? 600 : 500,
              color: location.pathname === link.path ? 'var(--pg-text)' : 'var(--pg-text-secondary)',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link to="/contact" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 24px',
        background: 'var(--pg-accent)',
        borderRadius: 8,
        color: '#FFFFFF',
        fontFamily: 'var(--pg-body)',
        fontSize: 14,
        fontWeight: 600,
      }}>
        Începe Acum
      </Link>
    </nav>
  )
}
