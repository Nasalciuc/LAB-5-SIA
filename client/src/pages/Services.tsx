import { Check, ArrowRight, Cpu, Linkedin, Twitter, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: '80px 60px',
        background: 'var(--pg-bg)',
      }}>

        {/* Hero Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          padding: '40px 0',
          width: '100%',
        }}>
          <div style={{
            borderRadius: 999,
            background: '#6C63FF1A',
            padding: '6px 16px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--pg-accent)' }}>SERVICII</span>
          </div>
          <h1 style={{
            fontFamily: 'var(--pg-heading)',
            fontSize: 42,
            fontWeight: 700,
            color: 'var(--pg-text)',
            textAlign: 'center',
            maxWidth: 800,
          }}>
            Soluții AI Care Lucrează Pentru Tine
          </h1>
          <p style={{
            fontFamily: 'var(--pg-body)',
            fontSize: 18,
            lineHeight: 1.6,
            color: 'var(--pg-text-secondary)',
            textAlign: 'center',
            maxWidth: 700,
          }}>
            De la automatizarea proceselor la analiza inteligentă a datelor — oferim servicii complete de implementare AI pentru afaceri.
          </p>
          <div style={{ width: 60, height: 4, borderRadius: 2, background: 'var(--pg-accent)' }} />
        </div>
      </section>

      {/* Service Blocks */}
      <div>
        {/* Block 3 - Image Left + Text Right */}
        <section style={{
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          padding: '80px 120px',
          background: 'var(--pg-bg)',
        }}>
          <div style={{
            width: 540,
            height: 400,
            borderRadius: 16,
            overflow: 'hidden',
            flexShrink: 0,
            border: '1px solid var(--pg-border)',
            background: '#1E293B',
          }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80&fit=crop"
              alt="Analiză Predictivă"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ borderRadius: 100, background: '#1E293B', padding: '6px 16px', alignSelf: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 600, color: 'var(--pg-teal)' }}>Analiză Predictivă</span>
            </div>
            <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 32, fontWeight: 700, lineHeight: 1.2, color: 'var(--pg-text)' }}>
              Predicții Inteligente pentru Decizii Mai Bune
            </h2>
            <p style={{ fontFamily: 'var(--pg-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--pg-text-secondary)' }}>
              Algoritmii noștri de machine learning analizează datele tale istorice și identifică pattern-uri ascunse. Primești predicții precise despre tendințe, cerere și oportunități — totul în timp real.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Previziuni bazate pe date istorice și tendințe de piață',
                'Alerte automate când se detectează anomalii',
                'Rapoarte vizuale cu recomandări acționabile',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--pg-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#FFFFFF" />
                  </div>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--pg-text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <Link to="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 28px',
                background: 'var(--pg-accent)',
                borderRadius: 8,
                fontFamily: 'var(--pg-body)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--pg-text)',
              }}>
                Descoperă Analizele
              </Link>
            </div>
          </div>
        </section>

        {/* Block 1 - Pegasus Flow */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: '80px 60px',
          background: 'var(--pg-bg)',
        }}>
          <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 28, fontWeight: 700, color: 'var(--pg-teal)' }}>
            Pegasus Flow — Platforma de Automatizare AI
          </h2>
          <p style={{ fontFamily: 'var(--pg-body)', fontSize: 16, lineHeight: 1.8, color: 'var(--pg-text-secondary)', maxWidth: 960 }}>
            Pegasus Flow este motorul central al ofertei noastre. Este o platformă no-code care permite crearea de fluxuri de lucru automatizate folosind agenți AI specializați. Conectează-ți email-ul, CRM-ul, baza de date și alte instrumente într-un singur ecosistem inteligent. Platforma procesează documente, generează răspunsuri, clasifică solicitări și execută acțiuni predefinite — totul fără intervenție manuală. Configurarea durează sub 48 de ore, iar rezultatele sunt vizibile din prima săptămână.
          </p>
        </section>

        {/* Block 2 - QA Call Center */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: '80px 60px',
          background: 'var(--pg-bg-card)',
        }}>
          <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 28, fontWeight: 700, color: 'var(--pg-teal)' }}>
            Quality Assurance pentru Call Center-uri
          </h2>
          <p style={{ fontFamily: 'var(--pg-body)', fontSize: 16, lineHeight: 1.8, color: 'var(--pg-text-secondary)', maxWidth: 960 }}>
            Sistemul nostru multi-agent analizează automat conversațiile telefonice din call center-uri. Folosim transcriere avansată și evaluare AI bazată pe 22 de criterii — de la abilitățile de comunicare și tehnicile de vânzare, până la urgență, închidere și competențe soft. Fiecare apel primește un scor detaliat și recomandări concrete de îmbunătățire. Managerii primesc rapoarte aggregate și pot identifica rapid tendințe, probleme sistemice sau performeri de top.
          </p>
        </section>

        {/* Block 4 - Text Left + Image Right */}
        <section style={{
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          padding: '80px 120px',
          background: 'var(--pg-bg-card)',
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ borderRadius: 100, background: '#1E293B', padding: '6px 16px', alignSelf: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 600, color: 'var(--pg-accent-light)' }}>Securitate Avansată</span>
            </div>
            <h2 style={{ fontFamily: 'var(--pg-heading)', fontSize: 32, fontWeight: 700, lineHeight: 1.2, color: 'var(--pg-text)' }}>
              Protecție Completă pentru Datele Tale
            </h2>
            <p style={{ fontFamily: 'var(--pg-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--pg-text-secondary)' }}>
              Infrastructura noastră de securitate utilizează criptare end-to-end, autentificare multi-factor și monitorizare continuă. Datele tale sunt protejate conform celor mai stricte standarde din industrie.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Criptare end-to-end pentru toate transferurile de date',
                'Autentificare multi-factor și control acces granular',
                'Conformitate GDPR și audituri de securitate regulate',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 12, background: 'var(--pg-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={14} color="#FFFFFF" />
                  </div>
                  <span style={{ fontFamily: 'var(--pg-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--pg-text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <Link to="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 28px',
                background: 'var(--pg-accent)',
                borderRadius: 8,
                fontFamily: 'var(--pg-body)',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--pg-text)',
              }}>
                Află Mai Multe
              </Link>
            </div>
          </div>
          <div style={{
            width: 540,
            height: 400,
            borderRadius: 16,
            overflow: 'hidden',
            flexShrink: 0,
            border: '1px solid var(--pg-border)',
            background: '#1E293B',
          }}>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1080&q=80&fit=crop"
              alt="Securitate"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
        padding: '80px 120px',
        background: '#6C63FF',
      }}>
        <h2 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 36,
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
          maxWidth: 800,
        }}>
          Nu ești sigur ce pachet ți se potrivește?
        </h2>
        <p style={{
          fontFamily: 'var(--pg-body)',
          fontSize: 18,
          lineHeight: 1.6,
          color: '#FFFFFFCC',
          textAlign: 'center',
          maxWidth: 600,
        }}>
          Echipa noastră te poate ghida către soluția perfectă pentru afacerea ta.
        </p>
        <Link to="/contact" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '16px 40px',
          background: '#FFFFFF',
          borderRadius: 12,
          fontFamily: 'var(--pg-heading)',
          fontSize: 16,
          fontWeight: 700,
          color: '#6C63FF',
        }}>
          Cere o Consultanță Gratuită <ArrowRight size={20} color="#6C63FF" />
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        padding: '40px 60px',
        background: '#060A14',
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
        <p style={{ fontFamily: 'var(--pg-body)', fontSize: 12, color: '#64748B' }}>
          © 2026 Pegasus AI Systems. Toate drepturile rezervate.
        </p>
      </footer>
    </div>
  )
}
