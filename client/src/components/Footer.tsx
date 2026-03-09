import { Link } from 'react-router-dom'
import { Hexagon, Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--pg-bg-card)',
      padding: '60px 120px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
    }}>
      {/* Footer Top */}
      <div style={{ display: 'flex', gap: 80, width: '100%' }}>
        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Hexagon size={28} color="var(--pg-accent)" />
            <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 18, fontWeight: 700, color: 'var(--pg-text)' }}>
              Pegasus AI
            </span>
          </div>
          <p style={{ fontFamily: 'var(--pg-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--pg-text-muted)', width: 280 }}>
            Automatizare inteligentă pentru afaceri din Moldova. Pegasus Flow transformă procesele manuale în fluxuri eficiente.
          </p>
        </div>

        {/* Columns */}
        <div style={{ display: 'flex', gap: 48, flex: 1, justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-text)' }}>NAVIGARE</span>
            <Link to="/" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Acasă</Link>
            <Link to="/about" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Despre Noi</Link>
            <Link to="/services" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Servicii</Link>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Prețuri</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-text)' }}>LEGAL</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Termeni și Condiții</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Politica de Confidențialitate</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>GDPR</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-text)' }}>CONTACT</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>info@pegasus.md</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>+373 22 123 456</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Chișinău, Moldova</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: '100%', height: 1, background: 'var(--pg-border)' }} />

      {/* Copyright Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
        width: '100%',
      }}>
        <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: 'var(--pg-text-muted)' }}>
          © 2026 Pegasus AI Systems. Toate drepturile rezervate.
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Facebook size={18} color="var(--pg-text-muted)" />
          <Twitter size={18} color="var(--pg-text-muted)" />
          <Linkedin size={18} color="var(--pg-text-muted)" />
          <Github size={18} color="var(--pg-text-muted)" />
        </div>
      </div>
    </footer>
  )
}
