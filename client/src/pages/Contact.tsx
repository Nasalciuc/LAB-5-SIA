import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const info = [
  { icon: <Mail size={20} />, label: 'E-mail', val: 'contact@pegasus.md', href: 'mailto:contact@pegasus.md' },
  { icon: <Phone size={20} />, label: 'Telefon', val: '+373 22 123 456', href: 'tel:+37322123456' },
  { icon: <MapPin size={20} />, label: 'Adresa', val: 'str. Ștefan cel Mare 168, Chișinău', href: 'https://maps.google.com/?q=Stefan+cel+Mare+168+Chisinau' },
  { icon: <Clock size={20} />, label: 'Program', val: 'Luni–Vineri: 09:00–18:00', href: '' },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-b" style={{ paddingBottom: 40 }}>
        <div className="sec">
          <div className="hero" style={{ paddingBottom: 0 }}>
            <span className="badge-lbl rv">Contact</span>
            <h1 className="rv rv-d1">Hai Să Discutăm</h1>
            <p className="hero-sub rv rv-d2">Spune-ne despre proiectul tău și echipa noastră revine cu o propunere în mai puțin de 48 de ore.</p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-b" style={{ padding: '40px 0 100px' }}>
        <div className="sec">
          <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* form */}
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-row">
                <label className="ct-label">
                  Nume complet
                  <input className="ct-input" placeholder="Ion Popescu" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </label>
                <label className="ct-label">
                  E-mail
                  <input className="ct-input" type="email" placeholder="ion@companie.md" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </label>
              </div>
              <label className="ct-label">
                Companie
                <input className="ct-input" placeholder="Compania SRL" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
              </label>
              <label className="ct-label">
                Mesaj
                <textarea className="ct-input" rows={5} placeholder="Descrie pe scurt ce ai nevoie…" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </label>
              <button type="submit" className="btn-p" disabled={status === 'sending' || status === 'sent'} style={{ width: '100%', justifyContent: 'center' }}>
                {status === 'idle' && <>Trimite Mesajul <Send size={16} /></>}
                {status === 'sending' && 'Se trimite…'}
                {status === 'sent' && '✓ Mesaj trimis cu succes!'}
                {status === 'error' && 'Eroare — încearcă din nou'}
              </button>
            </form>

            {/* info */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {info.map(c => (
                  <div key={c.label} className="card" style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '20px 24px' }}>
                    <div className="card-icon" style={{ flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 2 }}>{c.label}</div>
                      {c.href ? <a href={c.href} style={{ color: 'var(--text-1)', textDecoration: 'none', fontSize: 15 }} target="_blank" rel="noreferrer">{c.val}</a> : <span style={{ color: 'var(--text-1)', fontSize: 15 }}>{c.val}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* map */}
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)', height: 220 }}>
                <iframe title="Pegasus AI office Chișinău" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.406038801!2d28.8307!3d47.0245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAxJzI4LjIiTiAyOMKwNDknNTAuNSJF!5e0!3m2!1sen!2smd!4v1700000000000" width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-c" style={{ padding: '60px 0 100px' }}>
        <div className="sec">
          <div className="cta-g rv">
            <h2>Preferi să vorbești direct?</h2>
            <p>Sună-ne la <strong>+373 22 123 456</strong> sau programează un apel video cu echipa noastră.</p>
            <a href="tel:+37322123456" className="btn-w">Sună Acum <ArrowRight size={18} color="var(--accent)" /></a>
          </div>
        </div>
      </section>
    </div>
  )
}
