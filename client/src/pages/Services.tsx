import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  { title: 'Pegasus Flow — Platforma de Automatizare AI', text: 'Pegasus Flow este motorul central al ofertei noastre. Este o platformă no-code care permite crearea de fluxuri de lucru automatizate folosind agenți AI specializați. Conectează-ți email-ul, CRM-ul, baza de date și alte instrumente într-un singur ecosistem inteligent. Platforma procesează documente, generează răspunsuri, clasifică solicitări și execută acțiuni predefinite — totul fără intervenție manuală. Configurarea durează sub 48 de ore.', visual: ['Input', 'AI Agent', 'Acțiune', 'Rezultat'] },
  { title: 'Quality Assurance pentru Call Center-uri', text: 'Sistemul nostru multi-agent analizează automat conversațiile telefonice din call center-uri. Folosim transcriere avansată și evaluare AI bazată pe 22 de criterii. Fiecare apel primește un scor detaliat și recomandări concrete de îmbunătățire. Managerii primesc rapoarte aggregate cu tendințe și alerte.', bars: [{ label: 'Phone Skills', val: 87 }, { label: 'Sales Technique', val: 72 }, { label: 'Urgency', val: 91 }, { label: 'Soft Skills', val: 84 }] },
  { title: 'Automatizare Marketing & Social Media', text: 'Creăm fluxuri inteligente de marketing care generează, programează și optimizează conținut pe multiple canale. Include A/B testing automat, segmentare avansată a audienței și rapoarte de performanță în timp real. Transformă ore de muncă manuală în minute de procesare automată.', visual: ['Email', 'Social', 'Analytics'] },
  { title: 'Consultanță & Implementare AI Personalizată', text: 'Analizăm procesele existente, propunem soluții concrete și implementăm sisteme AI personalizate care se integrează cu infrastructura ta actuală. De la proof-of-concept la deployment în producție — te ghidăm la fiecare pas cu expertiză și dedicare.', steps: ['Audit', 'Design', 'Implementare', 'Optimizare'] },
]

const pricing = [
  { name: 'Starter', price: '€299', period: '/lună', features: ['5 fluxuri AI', '3 utilizatori', 'Email + CRM integrare', 'Suport email', 'Dashboard basic'], featured: false },
  { name: 'Professional', price: '€799', period: '/lună', features: ['20 fluxuri AI', '10 utilizatori', 'Toate integrările', 'QA 100 apeluri/lună', 'Dashboard avansat', 'Suport prioritar'], featured: true },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Fluxuri nelimitate', 'Utilizatori nelimitați', 'Custom API', 'Suport 24/7', 'Manager dedicat', 'SLA garantat'], featured: false },
]

function ServiceVisual({ service }: { service: typeof services[0] }) {
  if (service.visual) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        {service.visual.map((v, i) => (
          <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ padding: '14px 24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, fontFamily: 'var(--head)', fontSize: 14, fontWeight: 600, color: i === 1 ? 'var(--accent)' : 'var(--text-2)' }}>{v}</div>
            {i < service.visual!.length - 1 && <ArrowRight size={16} color="var(--text-3)" />}
          </div>
        ))}
      </div>
    )
  }
  if (service.bars) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {service.bars.map((b) => (
          <div key={b.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13, color: 'var(--text-2)' }}>
              <span>{b.label}</span><span style={{ color: 'var(--teal)', fontWeight: 600 }}>{b.val}%</span>
            </div>
            <div style={{ height: 8, background: 'var(--bg)', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: `${b.val}%`, height: '100%', background: b.val > 85 ? 'var(--teal)' : 'var(--accent)', borderRadius: 4, transition: 'width 1s var(--ease)' }} />
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (service.steps) {
    return (
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {service.steps.map((s, i) => (
          <div key={s} style={{ flex: 1, minWidth: 100, textAlign: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontFamily: 'var(--head)', fontSize: 16, fontWeight: 700 }}>{i + 1}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>{s}</div>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function Services() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-b" style={{ paddingBottom: 0 }}>
        <div className="sec">
          <div className="hero" style={{ paddingBottom: 0 }}>
            <span className="badge-lbl rv">Servicii</span>
            <h1 className="rv rv-d1">Soluții AI Care Lucrează Pentru Tine</h1>
            <p className="hero-sub rv rv-d2">De la automatizarea proceselor la analiza inteligentă a datelor — oferim servicii complete de implementare AI pentru afaceri.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((s, i) => (
        <section key={s.title} className={i % 2 === 0 ? 'bg-b' : 'bg-c'} style={{ padding: '0' }}>
          <div className="sec">
            <div className={`svc-block rv${i % 2 !== 0 ? ' rev' : ''}`}>
              <div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-txt">{s.text}</p>
              </div>
              <div style={{ background: 'var(--bg-card)', borderRadius: 16, padding: 32, border: '1px solid var(--border)' }}>
                <ServiceVisual service={s} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PRICING */}
      <section className="bg-b" style={{ padding: '100px 0' }}>
        <div className="sec">
          <div className="s-head">
            <span className="badge-lbl rv">Prețuri</span>
            <h2 className="rv rv-d1">Alege Pachetul Potrivit</h2>
          </div>
          <div className="g3">
            {pricing.map((p, i) => (
              <div key={p.name} className={`pr-card rv rv-d${i + 1}${p.featured ? ' feat' : ''}`}>
                {p.featured && <span className="pr-badge">Recomandat</span>}
                <div className="pr-name">{p.name}</div>
                <div className="pr-price" style={{ color: p.featured ? 'var(--accent)' : 'var(--text)' }}>{p.price}</div>
                <div className="pr-per">{p.period}</div>
                <div className="pr-feats">
                  {p.features.map((f) => (
                    <div key={f} className="pr-feat">
                      <Check size={16} className="pr-chk" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={p.featured ? 'btn-p' : 'btn-o'} style={{ justifyContent: 'center' }}>
                  {p.name === 'Enterprise' ? 'Contactează-ne' : 'Începe Acum'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-b" style={{ padding: '0 0 100px' }}>
        <div className="sec">
          <div className="cta-g rv">
            <h2>Nu ești sigur ce pachet ți se potrivește?</h2>
            <p>Programează o consultanță gratuită de 15 minute și te ajutăm să alegi soluția optimă.</p>
            <Link to="/contact" className="btn-w">Cere o Consultanță Gratuită <ArrowRight size={18} color="var(--accent)" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}