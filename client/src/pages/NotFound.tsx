import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="sec" style={{ paddingTop: 200, paddingBottom: 200, textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--head)', fontSize: 120, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: 20, color: 'var(--text-2)', margin: '16px 0 32px' }}>Pagina nu a fost găsită</p>
      <Link to="/" className="btn-p"><ArrowLeft size={18} /> Înapoi Acasă</Link>
    </div>
  )
}
