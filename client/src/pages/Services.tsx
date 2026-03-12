import { Link } from 'react-router-dom'
import { ArrowRight, Check, Brain, Workflow, BarChart3, MessageSquare } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  { icon: <Brain size={28} />, title: 'Agenți AI Personalizați', desc: 'Construim asistenți virtuali inteligenți care înțeleg contextul afacerii tale. Folosind modele GPT fine-tuned pe datele tale, creăm agenți care răspund la întrebări, preiau comenzi, programează întâlniri și rezolvă probleme — 24/7, fără pauze de cafea.', tags: ['Chatbots', 'RAG', 'Fine-tuning', 'Asistenți Virtuali'] },
  { icon: <Workflow size={28} />, title: 'Automatizare Fluxuri de Lucru', desc: 'Eliminăm munca repetitivă din procesele tale de business. De la procesarea facturilor și gestionarea e-mail-urilor, la transferul de date între sisteme și generarea documentelor — conectăm toate tool-urile tale într-un flux inteligent și autonom.', tags: ['Workflows', 'RPA', 'Integrări API', 'Zapier/n8n'] },
  { icon: <BarChart3 size={28} />, title: 'Analiză Date & Raportare', desc: 'Transformăm date brute în insight-uri acționabile. Dashboard-uri real-time, rapoarte automate generate săptămânal și alerte inteligente care te notifică exact când ceva necesită atenția ta. Toate datele tale într-un singur loc, vizualizate clar.', tags: ['Dashboards', 'Rapoarte Auto', 'Data Pipeline', 'Alerte'] },
  { icon: <MessageSquare size={28} />, title: 'Analiza Apeluri & QA', desc: 'Transcriem și analizăm automat toate conversațiile din call center. Evaluăm tonul, conformitatea cu script-ul, satisfacția clientului și identificăm oportunități de training — la o scară imposibil de atins manual.', tags: ['Speech-to-Text', 'Sentiment', 'QA Scoring', 'Training'] },
]

const pricing = [
  { name: 'Starter', price: '€ 990', unit: '/lună', desc: 'Perfect pentru prima automatizare', features: ['1 Agent AI / Workflow', 'Până la 1.000 task-uri/lună', 'Support E-mail (24h SLA)', 'Dashboard Basic', 'Integrare cu 2 sisteme'] },
  { name: 'Professional', price: '€ 2.490', unit: '/lună', desc: 'Cel mai popular — ideal pentru creștere', features: ['Până la 5 Agenți / Workflows', 'Până la 10.000 task-uri/lună', 'Support Priority (4h SLA)', 'Dashboard Advanced + Rapoarte', 'Integrări nelimitate', 'Sesiune lunară de optimizare'], featured: true },
  { name: 'Enterprise', price: 'Custom', unit: '', desc: 'Pentru operațiuni complexe la scară', features: ['Agenți & Workflows nelimitate', 'Task-uri nelimitate', 'Support Dedicat (1h SLA)', 'Dashboard Custom + API', 'On-premise disponibil', 'Account Manager dedicat', 'SLA garantat 99.9%'] },
]

function ServiceVisual({ variant }: { variant: 'bars' | 'steps' | 'visual' | 'grid' }) {
  if (variant === 'bars') return (
    <div className="sv-mock">
      {[85, 65, 92, 45, 78].map((w, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 50, fontSize: 11, color: 'var(--text-3)', textAlign: 'right' }}>Task {i + 1}</div>
          <div style={{ flex: 1, height: 20, background: 'var(--bg-2)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${w}%`, height: '100%', background: `linear-gradient(90deg, var(--accent), var(--teal))`, borderRadius: 4, transition: 'width 1s ease' }} />
          </div>
          <div style={{ width: 32, fontSize: 11, color: 'var(--accent)' }}>{w}%</div>
        </div>
      ))}
    </div>
  )
  if (variant === 'steps') return (
    <div className="sv-mock">
      {['Trigger', 'Process', 'Validate', 'Output'].map((s, i) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: i < 3 ? 'var(--accent)' : 'var(--bg-2)', color: i < 3 ? '#000' : 'var(--text-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600 }}>{i + 1}</div>
          <div style={{ flex: 1, padding: '8px 12px', background: 'var(--bg-2)', borderRadius: 6, fontSize: 13, color: 'var(--text-1)' }}>{s}</div>
          {i < 3 && <ArrowRight size={14} style={{ color: 'var(--text-3)' }} />}
        </div>
      ))}
    </div>
  )
  if (variant === 'grid') return (
    <div className="sv-mock">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {['Limba', 'Emoție', 'Conformitate', 'Calitate'].map((l) => (
          <div key={l} style={{ padding: '10px 12px', background: 'var(--bg-2)', borderRadius: 6, textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent)' }}>{(Math.random() * 40 + 60).toFixed(0)}%</div>
            <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <div className="sv-mock">
      <div style={{ width: '100%', height: 120, background: 'linear-gradient(135deg, rgba(168,85,247,.12), rgba(45,212,191,.12))', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-3)', fontSize: 13 }}>AI Preview</div>
    </div>
  )
}

export default function Services() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-b" style={{ paddingBottom: 40 }}>
        <div className="sec">
          <div className="hero" style={{ paddingBottom: 0 }}>
            <span className="badge-lbl rv">Servicii</span>
            <h1 className="rv rv-d1">Soluții AI Complete pentru Afaceri Moderne</h1>
            <p className="hero-sub rv rv-d2">De la chatbots inteligenți la automatizări complexe — oferim tot ce ai nevoie pentru a-ți transforma operațiunile cu ajutorul AI.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-b" style={{ padding: '40px 0 80px' }}>
        <div className="sec">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {services.map((s, i) => (
              <div key={s.title} className="rv" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center', direction: i % 2 ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 16 }}>{s.icon}</div>
                  <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, color: 'var(--text-1)' }}>{s.title}</h2>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 24 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.tags.map(t => <span key={t} style={{ padding: '4px 12px', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 20, fontSize: 12, color: 'var(--text-2)' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ direction: 'ltr' }}>
                  <ServiceVisual variant={(['bars', 'steps', 'visual', 'grid'] as const)[i % 4]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-c" style={{ padding: '100px 0' }}>
        <div className="sec">
          <div className="s-head">
            <span className="badge-lbl rv">Prețuri</span>
            <h2 className="rv rv-d1">Planuri Transparente, Fără Surprize</h2>
            <p className="rv rv-d2" style={{ color: 'var(--text-2)', maxWidth: 580, margin: '0 auto' }}>Alege planul potrivit sau contactează-ne pentru o soluție custom.</p>
          </div>
          <div className="g3">
            {pricing.map((p, i) => (
              <div key={p.name} className={`pr-card rv rv-d${i + 1}${p.featured ? ' pr-ft' : ''}`}>
                {p.featured && <div className="pr-badge">Popular</div>}
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-1)' }}>{p.name}</h3>
                <div style={{ margin: '16px 0 8px' }}>
                  <span style={{ fontSize: 36, fontWeight: 800, color: 'var(--text-1)' }}>{p.price}</span>
                  <span style={{ color: 'var(--text-3)', fontSize: 14 }}>{p.unit}</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid var(--border)' }}>{p.desc}</p>
                <ul className="pr-list">
                  {p.features.map(f => <li key={f}><Check size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />{f}</li>)}
                </ul>
                <Link to="/contact" className={p.featured ? 'btn-p' : 'btn-o'} style={{ width: '100%', textAlign: 'center', marginTop: 16 }}>Alege {p.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-b" style={{ padding: '60px 0 100px' }}>
        <div className="sec">
          <div className="cta-g rv">
            <h2>Nevoie de o soluție custom?</h2>
            <p>Discută cu echipa noastră și primești o propunere personalizată în 48 de ore.</p>
            <Link to="/contact" className="btn-w">Contactează-ne <ArrowRight size={18} color="var(--accent)" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
