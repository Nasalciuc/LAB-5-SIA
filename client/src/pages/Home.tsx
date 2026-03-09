import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, Puzzle, TrendingUp, Hexagon,
  LayoutDashboard, Workflow, BarChart3, Settings
} from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        padding: '80px 120px 60px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#1E293B',
          borderRadius: 100,
          padding: '8px 16px',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--pg-teal)' }} />
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 500, color: 'var(--pg-text-secondary)' }}>
            Powered by Pegasus Flow
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--pg-text)',
          textAlign: 'center',
          maxWidth: 900,
        }}>
          Automatizează-ți Afacerea cu Inteligență Artificială
        </h1>

        <p style={{
          fontFamily: 'var(--pg-body)',
          fontSize: 18,
          lineHeight: 1.6,
          color: 'var(--pg-text-secondary)',
          textAlign: 'center',
          maxWidth: 700,
        }}>
          Pegasus Flow este platforma care transformă procesele manuale în fluxuri automatizate inteligente. Economisește timp, reduce costurile și accelerează creșterea afacerii tale.
        </p>

        {/* CTA Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/services" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 28px',
            background: 'var(--pg-accent)',
            borderRadius: 8,
            color: '#FFFFFF',
            fontFamily: 'var(--pg-body)',
            fontSize: 16,
            fontWeight: 600,
          }}>
            Descoperă Pegasus Flow <ArrowRight size={18} />
          </Link>
          <Link to="/contact" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            borderRadius: 8,
            color: '#FFFFFF',
            fontFamily: 'var(--pg-body)',
            fontSize: 16,
            fontWeight: 600,
            border: '1.5px solid #FFFFFF',
          }}>
            Contactează-ne
          </Link>
        </div>

        {/* Dashboard Mockup */}
        <div style={{
          width: 1000,
          height: 500,
          borderRadius: 12,
          border: '1px solid var(--pg-border)',
          background: 'linear-gradient(180deg, #111827 0%, #1E293B 100%)',
          display: 'flex',
          overflow: 'hidden',
        }}>
          {/* Sidebar */}
          <div style={{
            width: 220,
            background: '#0F172A',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Hexagon size={20} color="var(--pg-accent)" />
              <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 14, fontWeight: 600, color: 'var(--pg-text)' }}>Pegasus Flow</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { icon: <LayoutDashboard size={16} />, label: 'Dashboard', active: true },
                { icon: <Workflow size={16} />, label: 'Automatizări', active: false },
                { icon: <BarChart3 size={16} />, label: 'Rapoarte', active: false },
                { icon: <Settings size={16} />, label: 'Setări', active: false },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  borderRadius: 6,
                  background: item.active ? 'var(--pg-accent)' : 'transparent',
                  color: item.active ? '#FFFFFF' : 'var(--pg-text-muted)',
                }}>
                  {item.icon}
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 500 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1, padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Stats Row */}
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { label: 'Fluxuri Active', value: '248', change: '+12.5%' },
                { label: 'Timp Economisit', value: '1,240h', change: '+8.3%' },
                { label: 'Costuri Reduse', value: '€34.2K', change: '+40.1%', accent: true },
              ].map((s) => (
                <div key={s.label} style={{
                  flex: 1,
                  background: '#0F172A',
                  borderRadius: 8,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, color: 'var(--pg-text-muted)' }}>{s.label}</span>
                  <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 28, fontWeight: 700, color: s.accent ? 'var(--pg-accent)' : 'var(--pg-text)' }}>{s.value}</span>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 500, color: 'var(--pg-teal)' }}>{s.change}</span>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{
              flex: 1,
              background: '#0F172A',
              borderRadius: 8,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}>
              <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 14, fontWeight: 600, color: 'var(--pg-text)' }}>
                Performanță Automatizări
              </span>
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'flex-end',
                gap: 12,
                padding: '0 20px 16px',
              }}>
                {[120, 170, 90, 140, 190, 110, 160, 130, 180, 150].map((h, i) => (
                  <div key={i} style={{
                    flex: 1,
                    height: h,
                    borderRadius: '4px 4px 0 0',
                    background: [2, 4, 6, 9].includes(i)
                      ? 'linear-gradient(0deg, #00D4AA80 0%, #00D4AA 100%)'
                      : 'linear-gradient(0deg, #6C63FF80 0%, #6C63FF 100%)',
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 48,
        padding: '80px 120px',
      }}>
        <div style={{
          background: '#1E293B',
          borderRadius: 100,
          padding: '6px 16px',
        }}>
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-accent)' }}>
            DE CE PEGASUS FLOW?
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 36,
          fontWeight: 700,
          color: 'var(--pg-text)',
          textAlign: 'center',
        }}>
          Tot ce ai nevoie pentru automatizare
        </h2>

        <div style={{ display: 'flex', gap: 24, width: '100%' }}>
          {[
            { icon: <Zap size={24} />, color: 'var(--pg-accent)', title: 'Automatizare Inteligentă', desc: 'Fluxuri de lucru alimentate de AI care învață și se optimizează continuu pentru afacerea ta.' },
            { icon: <Puzzle size={24} />, color: 'var(--pg-teal)', title: 'Integrare Simplă', desc: 'Conectează-te cu peste 200+ de aplicații și servicii fără configurări complexe sau cod.' },
            { icon: <TrendingUp size={24} />, color: 'var(--pg-accent)', title: 'Rezultate Măsurabile', desc: 'Dashboard-uri în timp real cu metrici clare pentru a urmări impactul automatizării.' },
          ].map((f) => (
            <div key={f.title} style={{
              flex: 1,
              background: 'var(--pg-bg-card)',
              borderRadius: 12,
              padding: '32px 28px',
              border: '1px solid var(--pg-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: f.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--pg-heading)', fontSize: 18, fontWeight: 600, color: 'var(--pg-text)' }}>{f.title}</h3>
              <p style={{ fontFamily: 'var(--pg-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--pg-text-secondary)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 48,
        padding: '80px 120px',
        background: 'var(--pg-bg-card)',
      }}>
        <h2 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 36,
          fontWeight: 700,
          color: 'var(--pg-text)',
          textAlign: 'center',
        }}>
          Rezultate care vorbesc de la sine
        </h2>

        <div style={{ display: 'flex', gap: 24, width: '100%' }}>
          {[
            { value: '40%', label: 'Reducere costuri', color: 'var(--pg-accent)' },
            { value: '500+', label: 'Fluxuri automatizate', color: 'var(--pg-teal)' },
            { value: '50+', label: 'Companii partenere', color: 'var(--pg-accent)' },
            { value: '99.9%', label: 'Uptime garantat', color: 'var(--pg-teal)' },
          ].map((s) => (
            <div key={s.label} style={{
              flex: 1,
              background: 'var(--pg-bg)',
              borderRadius: 12,
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}>
              <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 48, fontWeight: 700, color: s.color }}>{s.value}</span>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 15, fontWeight: 500, color: 'var(--pg-text-secondary)', textAlign: 'center' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 48,
        padding: '80px 120px',
      }}>
        <div style={{ background: '#1E293B', borderRadius: 100, padding: '6px 16px' }}>
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 12, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-teal)' }}>TESTIMONIALE</span>
        </div>

        <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 36, fontWeight: 700, color: 'var(--pg-text)', textAlign: 'center' }}>
          Ce spun partenerii noștri
        </h2>

        <div style={{ display: 'flex', gap: 24, width: '100%' }}>
          {[
            { quote: 'Pegasus Flow ne-a transformat complet modul de lucru. Am redus timpul de procesare cu 60% în primele 3 luni.', initials: 'AM', name: 'Andrei Moraru', role: 'CEO, TechMold SRL', color: 'var(--pg-accent)', quoteColor: 'var(--pg-accent)' },
            { quote: 'Integrarea a fost surprinzător de rapidă. Am conectat toate sistemele noastre în mai puțin de o săptămână.', initials: 'EC', name: 'Elena Ciobanu', role: 'CTO, DataVox Moldova', color: 'var(--pg-teal)', quoteColor: 'var(--pg-teal)' },
            { quote: 'ROI-ul a fost vizibil din prima lună. Recomand cu încredere echipa Pegasus pentru orice companie din Moldova.', initials: 'VP', name: 'Victor Platon', role: 'Director Operațiuni, AgriSoft', color: 'var(--pg-accent)', quoteColor: 'var(--pg-accent)' },
          ].map((t) => (
            <div key={t.name} style={{
              flex: 1,
              background: 'var(--pg-bg-card)',
              borderRadius: 12,
              padding: '28px 24px',
              border: '1px solid var(--pg-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}>
              <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 48, fontWeight: 700, lineHeight: 0.6, color: t.quoteColor }}>\u201C</span>
              <p style={{ fontFamily: 'var(--pg-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--pg-text-secondary)' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  background: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 14, fontWeight: 600, color: '#FFFFFF' }}>{t.initials}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 14, fontWeight: 600, color: 'var(--pg-text)' }}>{t.name}</span>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: 'var(--pg-text-muted)' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 120px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #6C63FF 0%, #4F46E5 50%, #8B83FF 100%)',
          borderRadius: 16,
          padding: '64px 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}>
          <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 36, fontWeight: 700, color: '#FFFFFF', textAlign: 'center' }}>
            Gata să-ți transformi afacerea?
          </h2>
          <p style={{ fontFamily: 'var(--pg-body)', fontSize: 17, lineHeight: 1.6, color: '#FFFFFFCC', textAlign: 'center', maxWidth: 600 }}>
            Alătură-te celor peste 50 de companii din Moldova care au ales automatizarea inteligentă cu Pegasus Flow.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link to="/services" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 28px',
              background: '#FFFFFF',
              borderRadius: 8,
              fontFamily: 'var(--pg-body)',
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--pg-accent)',
            }}>
              Începe Gratuit <ArrowRight size={18} color="var(--pg-accent)" />
            </Link>
            <Link to="/contact" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              borderRadius: 8,
              border: '1.5px solid #FFFFFFAA',
              fontFamily: 'var(--pg-body)',
              fontSize: 16,
              fontWeight: 600,
              color: '#FFFFFF',
            }}>
              Programează un Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
