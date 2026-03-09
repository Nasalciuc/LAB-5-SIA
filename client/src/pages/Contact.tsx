import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock4, Map, ExternalLink, ChevronDown, Cpu, Linkedin, Facebook, Github, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
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
        setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
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
    background: '#1A2035',
    border: '1px solid #333333',
    borderRadius: 8,
    padding: '14px 16px',
    color: 'var(--pg-text)',
    fontFamily: 'var(--pg-body)',
    fontSize: 16,
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--pg-body)',
    fontSize: 14,
    fontWeight: 700,
    color: '#A0AEC0',
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#0A0F1C',
      }}>
        {/* Hero Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          padding: '80px 120px 60px',
          width: '100%',
        }}>
          <div style={{
            borderRadius: 100,
            background: '#6C63FF1A',
            padding: '8px 20px',
          }}>
            <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 12, fontWeight: 700, letterSpacing: 2, color: '#6C63FF' }}>CONTACT</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--pg-heading)',
            fontSize: 42,
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: 900,
          }}>
            Hai Să Vorbim Despre Viitorul Afacerii Tale
          </h1>
          <p style={{
            fontFamily: 'var(--pg-body)',
            fontSize: 18,
            lineHeight: 1.6,
            color: '#A0AEC0',
            textAlign: 'center',
            maxWidth: 700,
          }}>
            Completează formularul de mai jos sau contactează-ne direct. Răspundem în maximum 24 de ore.
          </p>
          <div style={{ width: 60, height: 4, background: '#6C63FF' }} />
        </div>
      </section>

      {/* Content Section */}
      <section style={{
        display: 'flex',
        gap: 32,
        padding: '0 120px 60px',
        background: '#0A0F1C',
      }}>
        {/* Left Column - Form */}
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          background: '#111827',
          borderRadius: 16,
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 24, fontWeight: 700, color: '#FFFFFF' }}>
            Trimite-ne un mesaj
          </h2>

          {/* Nume complet */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <label style={labelStyle}>Nume complet</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Introduceți numele complet"
              style={inputStyle}
              required
            />
          </div>

          {/* Email + Telefon Row */}
          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@exemplu.com"
                style={inputStyle}
                required
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={labelStyle}>Telefon</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+373..."
                style={inputStyle}
              />
            </div>
          </div>

          {/* Companie */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <label style={labelStyle}>Companie</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Numele companiei"
              style={inputStyle}
            />
          </div>

          {/* Serviciu de interes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <label style={labelStyle}>Serviciu de interes</label>
            <div style={{ position: 'relative' }}>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  paddingRight: 40,
                  cursor: 'pointer',
                }}
              >
                <option value="">Selectează un serviciu</option>
                <option value="pegasus-flow">Pegasus Flow</option>
                <option value="qa-callcenter">QA Call Center</option>
                <option value="analiza-predictiva">Analiză Predictivă</option>
                <option value="securitate">Securitate Avansată</option>
              </select>
              <ChevronDown size={20} color="#64748B" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Mesaj */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
            <label style={labelStyle}>Mesaj</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Descrie-ne proiectul sau întrebarea ta..."
              required
              style={{
                ...inputStyle,
                height: 140,
                resize: 'vertical',
              }}
            />
          </div>

          {/* Submit */}
          <button type="submit" disabled={status === 'sending'} style={{
            width: '100%',
            background: '#6C63FF',
            borderRadius: 12,
            border: 'none',
            padding: '16px 0',
            color: '#FFFFFF',
            fontFamily: 'var(--pg-heading)',
            fontSize: 16,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: 'pointer',
          }}>
            {status === 'sending' ? 'Se trimite...' : <><span>Trimite Mesajul</span> <Send size={20} color="#FFFFFF" /></>}
          </button>

          {status === 'success' && <p style={{ color: 'var(--pg-teal)', fontSize: 14 }}>{statusMsg}</p>}
          {status === 'error' && <p style={{ color: '#FF5C33', fontSize: 14 }}>{statusMsg}</p>}
        </form>

        {/* Right Column - Info */}
        <div style={{
          width: 420,
          background: '#111827',
          borderRadius: 16,
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 24, fontWeight: 700, color: 'var(--pg-text)' }}>
            Informații de Contact
          </h2>

          {/* Email */}
          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <Mail size={20} color="var(--pg-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, fontWeight: 700, color: 'var(--pg-text)' }}>Email:</span>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, color: 'var(--pg-text-secondary)' }}>contact@pegasus-ai.md</span>
            </div>
          </div>

          {/* Telefon */}
          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <Phone size={20} color="var(--pg-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, fontWeight: 700, color: 'var(--pg-text)' }}>Telefon:</span>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, color: 'var(--pg-text-secondary)' }}>+373 69 123 456</span>
            </div>
          </div>

          {/* Adresă */}
          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <MapPin size={20} color="var(--pg-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, fontWeight: 700, color: 'var(--pg-text)' }}>Adresă:</span>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, lineHeight: 1.5, color: 'var(--pg-text-secondary)', maxWidth: 320 }}>Str. Studenților 9/8, Chișinău, MD-2045, Moldova</span>
            </div>
          </div>

          {/* Program */}
          <div style={{ display: 'flex', gap: 16, width: '100%' }}>
            <Clock4 size={20} color="var(--pg-accent)" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, fontWeight: 700, color: 'var(--pg-text)' }}>Program:</span>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 16, color: 'var(--pg-text-secondary)' }}>Luni – Vineri, 09:00 – 18:00</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: 1, background: 'var(--pg-border)' }} />

          {/* Note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Clock4 size={16} color="var(--pg-teal)" />
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: 'var(--pg-teal)' }}>Răspundem în max. 24h</span>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        padding: '0 120px 60px',
        background: '#0A0F1C',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Map size={20} color="#6C63FF" />
          <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 20, fontWeight: 600, color: '#FFFFFF' }}>Locația Noastră</span>
        </div>
        <div style={{
          width: '100%',
          height: 300,
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid #1E293B',
          background: 'radial-gradient(circle, #1A2035 0%, #111827 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}>
          <MapPin size={40} color="#6C63FF" />
          <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 16, fontWeight: 600, color: '#FFFFFF' }}>Str. Studenților 9/8, Chișinău</span>
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: '#A0AEC0' }}>MD-2045, Moldova</span>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '10px 24px',
            borderRadius: 8,
            background: '#6C63FF22',
            border: '1px solid #6C63FF44',
          }}>
            <ExternalLink size={16} color="#6C63FF" />
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, fontWeight: 600, color: '#6C63FF' }}>Deschide în Google Maps</span>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        padding: '40px 120px',
        background: '#0A0F1C',
      }}>
        <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 20, fontWeight: 600, color: '#FFFFFF' }}>Conectează-te cu noi</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {[
            { Icon: Linkedin, name: 'linkedin' },
            { Icon: Facebook, name: 'facebook' },
            { Icon: Github, name: 'github' },
          ].map(({ Icon, name }) => (
            <div key={name} style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#111827',
              border: '1px solid #1E293B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Icon size={24} color="#A0AEC0" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: '40px 60px',
        background: '#060A14',
        borderTop: '1px solid #1E293B',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Cpu size={24} color="#6C63FF" />
            <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>Pegasus.AI</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link to="/" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: '#A0AEC0' }}>Acasă</Link>
            <Link to="/about" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: '#A0AEC0' }}>Despre</Link>
            <Link to="/services" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: '#A0AEC0' }}>Servicii</Link>
            <Link to="/contact" style={{ fontFamily: 'var(--pg-body)', fontSize: 14, color: '#A0AEC0' }}>Contact</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Linkedin size={20} color="#64748B" />
            <Twitter size={20} color="#64748B" />
            <Github size={20} color="#64748B" />
          </div>
        </div>
        <div style={{ width: '100%', height: 1, background: '#1E293B' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, color: '#64748B' }}>© 2026 Pegasus AI Systems. Toate drepturile rezervate.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, color: '#64748B' }}>Termeni și Condiții</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, color: '#64748B' }}>Politica de Confidențialitate</span>
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, color: '#64748B' }}>Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
