import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Map, ChevronDown, ChevronRight, Hexagon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [statusMsg, setStatusMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setStatusMsg(data.message)
        setForm({ name: '', email: '', company: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setStatusMsg(data.error)
      }
    } catch {
      setStatus('error')
      setStatusMsg('Eroare de conexiune. Încearcă din nou.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: 48,
    background: '#0A0F1C',
    border: '1px solid var(--pg-border)',
    borderRadius: 10,
    padding: '0 16px',
    color: 'var(--pg-text)',
    fontFamily: 'var(--pg-body)',
    fontSize: 14,
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--pg-body)',
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--pg-text)',
  }

  return (
    <div>
      {/* Hero */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        padding: '80px 120px 48px',
      }}>
        <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-accent)' }}>CONTACT</span>
        <h1 style={{ fontFamily: 'var(--pg-heading)', fontSize: 52, fontWeight: 700, color: 'var(--pg-text)', textAlign: 'center' }}>
          Hai să vorbim
        </h1>
        <p style={{ fontFamily: 'var(--pg-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--pg-text-secondary)', textAlign: 'center', maxWidth: 640 }}>
          Completează formularul sau contactează-ne direct. Echipa Pegasus AI răspunde în maxim 24 de ore.
        </p>
      </section>

      {/* Contact Content */}
      <section style={{ display: 'flex', gap: 48, padding: '40px 120px' }}>
        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          background: 'var(--pg-bg-card)',
          borderRadius: 20,
          padding: 40,
          border: '1px solid var(--pg-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}>
          <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 26, fontWeight: 700, color: 'var(--pg-text)' }}>Trimite-ne un mesaj</h2>
          <p style={{ fontFamily: 'var(--pg-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--pg-text-secondary)' }}>
            Descrie-ne proiectul tău și te vom contacta cu o soluție personalizată.
          </p>

          {/* Name Row */}
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>Nume complet</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="ex. Ion Popescu" style={inputStyle} required />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@exemplu.md" style={inputStyle} required />
            </div>
          </div>

          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={labelStyle}>Companie</label>
            <input name="company" value={form.company} onChange={handleChange} placeholder="Numele companiei" style={inputStyle} />
          </div>

          {/* Subject */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={labelStyle}>Subiect</label>
            <div style={{ position: 'relative' }}>
              <select name="subject" value={form.subject} onChange={handleChange} style={{
                ...inputStyle,
                appearance: 'none',
                paddingRight: 40,
              }}>
                <option value="">Selectează un subiect</option>
                <option value="pegasus-flow">Pegasus Flow</option>
                <option value="consultanta">Consultanță AI</option>
                <option value="integrare">Integrare Custom</option>
                <option value="altele">Altele</option>
              </select>
              <ChevronDown size={16} color="var(--pg-text-muted)" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label style={labelStyle}>Mesaj</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Spune-ne cum te putem ajuta..."
              required
              style={{
                width: '100%',
                height: 130,
                background: '#0A0F1C',
                border: '1px solid var(--pg-border)',
                borderRadius: 10,
                padding: 16,
                color: 'var(--pg-text)',
                fontFamily: 'var(--pg-body)',
                fontSize: 14,
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          {/* Submit */}
          <button type="submit" disabled={status === 'sending'} style={{
            width: '100%',
            height: 52,
            background: 'var(--pg-accent)',
            borderRadius: 12,
            border: 'none',
            color: '#FFFFFF',
            fontFamily: 'var(--pg-body)',
            fontSize: 16,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}>
            {status === 'sending' ? 'Se trimite...' : <><span>Trimite Mesajul</span> <Send size={18} /></>}
          </button>

          {status === 'success' && <p style={{ color: 'var(--pg-teal)', fontSize: 14 }}>{statusMsg}</p>}
          {status === 'error' && <p style={{ color: '#FF5C33', fontSize: 14 }}>{statusMsg}</p>}
        </form>

        {/* Sidebar */}
        <div style={{ width: 420, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Info Card */}
          <div style={{
            background: 'var(--pg-bg-card)',
            borderRadius: 20,
            padding: 32,
            border: '1px solid var(--pg-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}>
            <h3 style={{ fontFamily: 'var(--pg-heading)', fontSize: 22, fontWeight: 600, color: 'var(--pg-text)' }}>Informații de contact</h3>
            {[
              { icon: <Mail size={20} color="var(--pg-accent)" />, iconBg: '#6C63FF15', label: 'Email', value: 'info@pegasus-ai.md' },
              { icon: <Phone size={20} color="var(--pg-teal)" />, iconBg: '#00D4AA15', label: 'Telefon', value: '+373 22 123 456' },
              { icon: <MapPin size={20} color="var(--pg-accent)" />, iconBg: '#6C63FF15', label: 'Adresă', value: 'Str. Pușkin 22, Chișinău, Moldova' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: item.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 500, color: 'var(--pg-text-muted)' }}>{item.label}</span>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 15, fontWeight: 500, color: 'var(--pg-text)' }}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hours Card */}
          <div style={{
            background: 'var(--pg-bg-card)',
            borderRadius: 20,
            padding: 32,
            border: '1px solid var(--pg-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            <h3 style={{ fontFamily: 'var(--pg-heading)', fontSize: 18, fontWeight: 600, color: 'var(--pg-text)' }}>Program de lucru</h3>
            {[
              { day: 'Luni — Vineri', time: '09:00 — 18:00', timeColor: 'var(--pg-teal)' },
              { day: 'Sâmbătă', time: '10:00 — 14:00', timeColor: 'var(--pg-text)' },
              { day: 'Duminică', time: 'Închis', timeColor: 'var(--pg-text-muted)' },
            ].map((h) => (
              <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-secondary)' }}>{h.day}</span>
                <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, fontWeight: 600, color: h.timeColor }}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div style={{
            background: 'var(--pg-bg-card)',
            borderRadius: 20,
            border: '1px solid var(--pg-border)',
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
            <Map size={36} color="var(--pg-text-muted)" />
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, fontWeight: 500, color: 'var(--pg-text-muted)' }}>Chișinău, Moldova</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: 'var(--pg-accent)' }}>Vezi pe Google Maps →</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        padding: '80px 200px',
        background: 'linear-gradient(180deg, #6C63FF08 0%, #0A0F1C 100%)',
      }}>
        <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-teal)' }}>ÎNTREBĂRI FRECVENTE</span>
        <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 36, fontWeight: 700, color: 'var(--pg-text)', textAlign: 'center' }}>
          Ai întrebări? Avem răspunsuri.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          {/* FAQ 1 - Expanded */}
          <div style={{
            background: 'var(--pg-bg-card)',
            borderRadius: 14,
            padding: '24px 28px',
            border: '1px solid var(--pg-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 16, fontWeight: 600, color: 'var(--pg-text)' }}>Cât durează implementarea Pegasus Flow?</span>
              <ChevronDown size={18} color="var(--pg-text-muted)" />
            </div>
            <p style={{ fontFamily: 'var(--pg-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--pg-text-secondary)' }}>
              Implementarea standard durează între 2-4 săptămâni, în funcție de complexitatea proceselor tale. Oferim onboarding dedicat și suport continuu.
            </p>
          </div>

          {/* FAQ 2-4 Collapsed */}
          {[
            'Este necesară experiență tehnică pentru a folosi platforma?',
            'Ce tipuri de sisteme pot fi integrate cu Pegasus Flow?',
            'Oferiți suport după implementare?',
          ].map((q) => (
            <div key={q} style={{
              background: 'var(--pg-bg-card)',
              borderRadius: 14,
              padding: '24px 28px',
              border: '1px solid var(--pg-border)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 16, fontWeight: 600, color: 'var(--pg-text)' }}>{q}</span>
                <ChevronRight size={18} color="var(--pg-text-muted)" style={{ flexShrink: 0 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        padding: '48px 120px',
        background: '#060A14',
        borderTop: '1px solid var(--pg-border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Hexagon size={28} color="var(--pg-accent)" />
            <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 18, fontWeight: 700, color: 'var(--pg-text)' }}>Pegasus AI</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link to="/" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Acasă</Link>
            <Link to="/about" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Despre Noi</Link>
            <Link to="/services" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Servicii</Link>
            <Link to="/contact" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-text-muted)' }}>Contact</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* social placeholders */}
          </div>
        </div>
        <div style={{ width: '100%', height: 1, background: 'var(--pg-border)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: 'var(--pg-text-muted)' }}>© 2026 Pegasus AI Systems. Toate drepturile rezervate.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: 'var(--pg-text-muted)' }}>Politica de confidențialitate</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: 'var(--pg-text-muted)' }}>Termeni și condiții</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
