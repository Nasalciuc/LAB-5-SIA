import { useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const info = [
  { icon: <Mail size={18} />, label: 'Email', value: 'contact@pegasus-ai.md', href: 'mailto:contact@pegasus-ai.md', color: 'var(--accent)' },
  { icon: <Phone size={18} />, label: 'Telefon', value: '+373 69 123 456', href: 'tel:+37369123456', color: 'var(--teal)' },
  { icon: <MapPin size={18} />, label: 'Adresă', value: 'Str. Studenților 9/8, Chișinău, MD-2045', color: 'var(--accent)' },
  { icon: <Clock size={18} />, label: 'Program', value: 'Luni – Vineri, 09:00 – 18:00', color: 'var(--teal)' },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSent(true)
    } catch { setSent(true) }
  }

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-b" style={{ paddingBottom: 0 }}>
        <div className="sec">
          <div className="hero" style={{ paddingBottom: 0 }}>
            <span className="badge-lbl rv">Contact</span>
            <h1 className="rv rv-d1">Hai Să Vorbim Despre Viitorul Afacerii Tale</h1>
            <p className="hero-sub rv rv-d2">Completează formularul sau contactează-ne direct. Răspundem în maximum 24 de ore.</p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-b" style={{ padding: '60px 0 80px' }}>
        <div className="sec">
          <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, alignItems: 'start' }}>
            {/* FORM */}
            <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: 40, border: '1px solid var(--border)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--head)', fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Mesaj trimis!</h3>
                  <p style={{ color: 'var(--text-2)' }}>Răspundem în maximum 24 de ore.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="f-group">
                    <label className="f-label">Nume complet *</label>
                    <input className="f-input" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Numele tău" />
                  </div>
                  <div className="f-group">
                    <label className="f-label">Email *</label>
                    <input className="f-input" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@exemplu.com" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="f-group">
                      <label className="f-label">Companie</label>
                      <input className="f-input" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Opțional" />
                    </div>
                    <div className="f-group">
                      <label className="f-label">Telefon</label>
                      <input className="f-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+373..." />
                    </div>
                  </div>
                  <div className="f-group">
                    <label className="f-label">Serviciu de interes</label>
                    <select className="f-input" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      <option value="">Selectează serviciul</option>
                      <option value="pegasus-flow">Pegasus Flow</option>
                      <option value="qa-callcenter">QA Call Center</option>
                      <option value="marketing-ai">Marketing AI</option>
                      <option value="consultanta">Consultanță</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>
                  <div className="f-group">
                    <label className="f-label">Mesaj</label>
                    <textarea className="f-input" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Cu ce te putem ajuta?" />
                  </div>
                  <button type="submit" className="btn-sub">
                    <Send size={18} /> Trimite Mesajul
                  </button>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', textAlign: 'center' }}>
                    🔒 Răspundem în 24h. Datele tale sunt protejate.
                  </p>
                </form>
              )}
            </div>

            {/* INFO */}
            <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: 40, border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--head)', fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Informații de Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {info.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 4 }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: 16, fontWeight: 500, color: 'var(--text)' }}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--text)' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-b" style={{ padding: '0 0 100px' }}>
        <div className="sec">
          <div className="rv" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720!2d28.8095!3d47.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAxJzI4LjIiTiAyOMKwNTAnMjIuOSJF!5e0!3m2!1sen!2s"
              width="100%" height="350" style={{ border: 0, display: 'block', filter: 'brightness(0.8) contrast(1.1)' }}
              allowFullScreen loading="lazy" title="Pegasus AI Systems — Chișinău"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-c" style={{ padding: '60px 0' }}>
        <div className="sec" style={{ textAlign: 'center' }}>
          <h3 className="rv" style={{ fontFamily: 'var(--head)', fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Preferi o conversație directă?</h3>
          <p className="rv rv-d1" style={{ color: 'var(--text-2)', marginBottom: 24 }}>Programează un apel de 15 minute cu echipa noastră.</p>
          <a href="tel:+37369123456" className="btn-p rv rv-d2">Programează un Apel <Phone size={18} /></a>
        </div>
      </section>
    </div>
  )
}