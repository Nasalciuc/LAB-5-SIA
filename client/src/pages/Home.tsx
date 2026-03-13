import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Puzzle, TrendingUp, Hexagon, LayoutDashboard, Workflow, BarChart3, Settings } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const features = [
  { icon: <Zap size={24} />, cls: 'ac', title: 'Automatizare Inteligentă', desc: 'Fluxuri de lucru alimentate de AI care învață și se optimizează continuu pentru afacerea ta.' },
  { icon: <Puzzle size={24} />, cls: 'tl', title: 'Integrare Simplă', desc: 'Conectează-te cu peste 200+ aplicații și servicii fără configurări complexe sau cod.' },
  { icon: <TrendingUp size={24} />, cls: 'ac', title: 'Rezultate Măsurabile', desc: 'Dashboard-uri în timp real cu metrici clare pentru a urmări impactul automatizării.' },
]

const stats = [
  { value: '40%', label: 'Reducere costuri', color: 'var(--accent)' },
  { value: '500+', label: 'Fluxuri automatizate', color: 'var(--accent)' },
  { value: '50+', label: 'Companii partenere', color: 'var(--accent)' },
  { value: '99.9%', label: 'Uptime garantat', color: 'var(--accent)' },
]

const testimonials = [
  { quote: 'Pegasus Flow ne-a redus timpul de procesare a comenzilor cu 60%. Recomandăm!', photo: 'https://i.pravatar.cc/150?img=68', name: 'Ion Moraru', role: 'Director Operațiuni, LogisTech SRL', color: 'var(--accent)' },
  { quote: 'Sistemul de QA ne-a ajutat să identificăm problemele de training mult mai rapid.', photo: 'https://i.pravatar.cc/150?img=47', name: 'Ana Cebotari', role: 'Manager Call Center, TravelBook MD', color: 'var(--accent)' },
  { quote: 'Implementarea a durat 3 zile, nu 3 luni cum ne așteptam.', photo: 'https://i.pravatar.cc/150?img=12', name: 'Sergiu Rusu', role: 'CEO, GreenMarket', color: 'var(--accent)' },
]

const bars = [65, 85, 45, 70, 95, 55, 80, 60, 90, 75]

function Counter({ target, suffix = '' }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let current = 0
        const step = Math.max(target / 50, 0.5)
        const timer = setInterval(() => {
          current += step
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, 25)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  const ref = useReveal()
  useEffect(() => { document.title = 'Pegasus AI Systems — Automatizare AI pentru Afaceri' }, [])
  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-b" style={{ paddingBottom: 120 }}>
        <div className="sec">
          <div className="hero">
            <div className="badge rv">
              <span className="badge-dot" />
              <span>Powered by Pegasus Flow</span>
            </div>

            <h1 className="rv rv-d1">Automatizează-ți Afacerea cu Inteligență Artificială</h1>

            <p className="hero-sub rv rv-d2">
              Pegasus Flow transformă procesele manuale în fluxuri automatizate inteligente. Economisește timp, reduce costurile și accelerează creșterea afacerii tale.
            </p>

            <div className="hero-cta rv rv-d3">
              <Link to="/services" className="btn-p">Descoperă Pegasus Flow <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn-o">Contactează-ne</Link>
            </div>

            <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              🇲🇩 Partener al ecosistemului tech din Moldova · 50+ companii partenere
            </p>

            {/* Dashboard Mockup */}
            <div className="mock-wrap rv rv-d4">
              <div className="mock">
                <div className="mock-side">
                  <div className="mock-logo"><Hexagon size={18} color="var(--accent)" /> Pegasus Flow</div>
                  {[
                    { icon: <LayoutDashboard size={15} />, label: 'Dashboard', active: true },
                    { icon: <Workflow size={15} />, label: 'Automatizări' },
                    { icon: <BarChart3 size={15} />, label: 'Rapoarte' },
                    { icon: <Settings size={15} />, label: 'Setări' },
                  ].map((n) => (
                    <div key={n.label} className={`mock-ni${n.active ? ' act' : ''}`}>{n.icon} {n.label}</div>
                  ))}
                </div>
                <div className="mock-main">
                  <div className="mock-stats">
                    {[
                      { label: 'Fluxuri Active', value: '248', change: '+12.5%' },
                      { label: 'Timp Economisit', value: '1,240h', change: '+8.3%' },
                      { label: 'Costuri Reduse', value: '€34.2K', change: '+40.1%' },
                    ].map((s) => (
                      <div key={s.label} className="mock-st">
                        <div className="mock-st-l">{s.label}</div>
                        <div className="mock-st-v">{s.value}</div>
                        <div className="mock-st-c">{s.change}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mock-chart">
                    <div className="mock-chart-t">Performanță Automatizări</div>
                    <div className="mock-bars">
                      {bars.map((h, i) => (
                        <div key={i} className={`mock-bar ${i % 3 === 0 ? 'tl' : 'ind'}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-b" style={{ padding: '20px 0 0' }}>
        <div className="sec">
          <div className="trust-strip rv">
            <span>Ales de echipe din</span>
            <strong style={{ color: 'var(--text-2)' }}>LogisTech SRL</strong>
            <span>·</span>
            <strong style={{ color: 'var(--text-2)' }}>TravelBook MD</strong>
            <span>·</span>
            <strong style={{ color: 'var(--text-2)' }}>GreenMarket</strong>
            <span>·</span>
            <span>și alte 50+ companii</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-b" style={{ padding: '100px 0' }}>
        <div className="sec">
          <div className="s-head">
            <span className="badge-lbl rv">Funcționalități</span>
            <h2 className="rv rv-d1">Tot ce ai nevoie pentru automatizare</h2>
          </div>
          <div className="g3">
            {features.map((f, i) => (
              <div key={f.title} className={`card rv rv-d${i + 1}`}>
                <div className={`card-icon ${f.cls}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-c" style={{ padding: '100px 0' }}>
        <div className="sec">
          <div className="s-head">
            <h2 className="rv">Rezultate care vorbesc de la sine</h2>
          </div>
          <div className="g4">
            {stats.map((s, i) => (
              <div key={s.label} className={`rv rv-d${i + 1}`} style={{ background: 'var(--bg)', borderRadius: 12, padding: '32px 24px', textAlign: 'center' }}>
                <div className="stat-n" style={{ color: s.color }}>
                  {s.value === '40%' ? <Counter target={40} suffix="%" /> :
                   s.value === '500+' ? <Counter target={500} suffix="+" /> :
                   s.value === '50+' ? <Counter target={50} suffix="+" /> :
                   s.value === '99.9%' ? <Counter target={99.9} suffix="%" /> : s.value}
                </div>
                <div className="stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-b" style={{ padding: '100px 0' }}>
        <div className="sec">
          <div className="s-head">
            <span className="badge-lbl rv">Testimoniale</span>
            <h2 className="rv rv-d1">Ce spun partenerii noștri</h2>
          </div>
          <div className="g3">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`card rv rv-d${i + 1}`}>
                <div className="t-qm" style={{ color: t.color }}>❝</div>
                <p className="t-txt">{t.quote}</p>
                <div className="t-auth">
                  <img src={t.photo} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-b" style={{ padding: '60px 0 100px' }}>
        <div className="sec">
          <div className="cta-g rv">
            <h2>Gata să-ți transformi afacerea?</h2>
            <p>Alătură-te celor peste 50 de companii din Moldova care au ales automatizarea inteligentă cu Pegasus Flow.</p>
            <div className="hero-cta">
              <Link to="/services" className="btn-w">Hai să automatizăm împreună <ArrowRight size={18} color="var(--accent)" /></Link>
              <Link to="/contact" className="btn-o">Discută cu echipa noastră</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}