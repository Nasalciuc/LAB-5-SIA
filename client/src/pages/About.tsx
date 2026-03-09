import { Lightbulb, Users, ShieldCheck, Target, Hexagon, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0A0F1C',
      }}>
        {/* Hero Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          padding: '100px 120px 80px',
          width: '100%',
        }}>
          {/* Tag Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 999,
            padding: '8px 20px',
            border: '1px solid #6C63FF40',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4AA' }} />
            <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 500, color: '#00D4AA' }}>Despre Pegasus AI</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--pg-heading)',
            fontSize: 42,
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#FFFFFF',
            textAlign: 'center',
            maxWidth: 900,
          }}>
            Construim Viitorul Automatizării în Moldova
          </h1>

          <p style={{
            fontFamily: 'var(--pg-body)',
            fontSize: 18,
            lineHeight: 1.6,
            color: '#A0AEC0',
            textAlign: 'center',
            maxWidth: 700,
          }}>
            Suntem o echipă de ingineri AI și specialiști în business din Chișinău, dedicați transformării digitale a IMM-urilor.
          </p>

          <div style={{ width: 60, height: 3, borderRadius: 2, background: '#6C63FF' }} />
        </div>
      </section>

      {/* Main Text Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
        padding: '80px 160px',
        background: '#0A0F1C',
      }}>
        {/* Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderRadius: 999,
          padding: '8px 20px',
          border: '1px solid #6C63FF40',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6C63FF' }} />
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 500, color: '#6C63FF' }}>Povestea Noastră</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 34,
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
        }}>
          Cine suntem și de ce existăm
        </h2>

        <div style={{ maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p style={paraStyle}>
            Pegasus AI Systems a fost fondată cu o viziune clară: să facă inteligența artificială accesibilă pentru afacerile mici și medii din Moldova și din regiunea Europei de Est. Într-o lume în care giganții tech investesc miliarde în automatizare, companiile locale rămân adesea în urmă — nu din lipsă de ambiție, ci din lipsă de soluții adaptate realităților lor.
          </p>
          <p style={paraStyle}>
            Aici intervenim noi. Echipa noastră combină expertiză tehnică în machine learning, procesarea limbajului natural și arhitecturi multi-agent cu o înțelegere profundă a provocărilor reale cu care se confruntă antreprenorii locali. Nu vindem tehnologie de dragul tehnologiei — construim instrumente care rezolvă probleme concrete.
          </p>
          <p style={paraStyle}>
            Produsul nostru principal, Pegasus Flow, este o platformă de automatizare bazată pe agenți AI care permite companiilor să creeze fluxuri de lucru inteligente fără a scrie o singură linie de cod. De la automatizarea răspunsurilor la clienți și procesarea facturilor, până la analiza calității în call center-uri și generarea automată de rapoarte — Pegasus Flow transformă ore de muncă manuală în minute de procesare automată.
          </p>
          <p style={paraStyle}>
            Ceea ce ne diferențiază este abordarea noastră personalizată. Fiecare business este unic, iar soluțiile generice rareori funcționează în practică. De aceea, lucrăm îndeaproape cu fiecare client pentru a înțelege procesele existente, a identifica punctele de ineficiență și a proiecta fluxuri automatizate care se integrează natural în operațiunile zilnice.
          </p>
          <p style={paraStyle}>
            Suntem bazați în Chișinău, dar viziunea noastră nu are granițe. Colaborăm cu companii din întreaga regiune și construim parteneriate cu ecosistemul tech local pentru a accelera inovația.
          </p>
          <p style={{
            fontFamily: 'var(--pg-body)',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.75,
            color: '#FFFFFF',
          }}>
            Valorile noastre: transparență în comunicare, excelență tehnică, orientare spre rezultate și parteneriat pe termen lung cu clienții noștri.
          </p>
          <p style={{
            fontFamily: 'var(--pg-heading)',
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.6,
            color: '#00D4AA',
          }}>
            Nu suntem doar un furnizor de software — suntem partenerul tău strategic în era automatizării.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 48,
        padding: '80px 120px',
        background: '#111827',
      }}>
        {/* Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderRadius: 999,
          padding: '8px 20px',
          border: '1px solid #6C63FF40',
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6C63FF' }} />
          <span style={{ fontFamily: 'var(--pg-body)', fontSize: 13, fontWeight: 500, color: '#6C63FF' }}>Valorile Noastre</span>
        </div>

        <h2 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 34,
          fontWeight: 700,
          color: 'var(--pg-text)',
          textAlign: 'center',
        }}>
          Principiile care ne ghidează
        </h2>

        <p style={{
          fontFamily: 'var(--pg-body)',
          fontSize: 16,
          lineHeight: 1.6,
          color: 'var(--pg-text-secondary)',
          textAlign: 'center',
          maxWidth: 700,
        }}>
          Fiecare decizie pe care o luăm este ancorată în aceste valori fundamentale care definesc cine suntem și cum lucrăm.
        </p>

        {/* Values Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: 24 }}>
            <ValueCard
              icon={<Lightbulb size={24} color="#FFFFFF" />}
              iconBg="var(--pg-accent)"
              title="Inovație Continuă"
              desc="Explorăm constant noi tehnologii și abordări pentru a oferi soluții AI care anticipează nevoile de mâine ale afacerilor."
            />
            <ValueCard
              icon={<Users size={24} color="#FFFFFF" />}
              iconBg="var(--pg-teal)"
              title="Parteneriat Real"
              desc="Nu suntem doar furnizori — suntem parteneri de încredere care înțeleg provocările unice ale fiecărui client și lucrăm alături de ei."
            />
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', gap: 24 }}>
            <ValueCard
              icon={<ShieldCheck size={24} color="#FFFFFF" />}
              iconBg="var(--pg-accent)"
              title="Transparență Totală"
              desc="Comunicare deschisă, prețuri clare și procese transparente. Credem că încrederea se construiește prin onestitate."
            />
            <ValueCard
              icon={<Target size={24} color="#FFFFFF" />}
              iconBg="var(--pg-teal)"
              title="Impact Concret"
              desc="Nu urmărim doar metrici tehnice — măsurăm succesul prin rezultatele reale pe care le obțin clienții noștri în afacerile lor."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        padding: '80px 120px',
        background: '#6C63FF',
      }}>
        <h2 style={{
          fontFamily: 'var(--pg-heading)',
          fontSize: 36,
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#FFFFFF',
          textAlign: 'center',
          maxWidth: 700,
        }}>
          Vrei să afli cum putem ajuta afacerea ta?
        </h2>
        <p style={{
          fontFamily: 'var(--pg-body)',
          fontSize: 17,
          lineHeight: 1.6,
          color: '#FFFFFFCC',
          textAlign: 'center',
          maxWidth: 600,
        }}>
          Programează o consultație gratuită cu echipa noastră și descoperă cum Pegasus Flow poate transforma procesele tale.
        </p>
        <Link to="/contact" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '16px 36px',
          background: '#FFFFFF',
          borderRadius: 12,
          fontFamily: 'var(--pg-heading)',
          fontSize: 16,
          fontWeight: 600,
          color: '#6C63FF',
        }}>
          Hai să Discutăm →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: '40px 120px',
        background: '#060A14',
        borderTop: '1px solid #1E293B',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Hexagon size={24} color="#6C63FF" />
            <span style={{ fontFamily: 'var(--pg-heading)', fontSize: 16, fontWeight: 600, color: '#FFFFFF' }}>Pegasus AI Systems</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link to="/" style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: '#A0AEC0' }}>Acasă</Link>
            <Link to="/about" style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: '#A0AEC0' }}>Despre Noi</Link>
            <Link to="/services" style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: '#A0AEC0' }}>Servicii</Link>
            <Link to="/contact" style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: '#A0AEC0' }}>Contact</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <div key={i} style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: '#6C63FF15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={15} color="#6C63FF" />
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: '100%', height: 1, background: '#1E293B' }} />
        <p style={{ fontFamily: 'var(--pg-body)', fontSize: 13, color: '#64748B', textAlign: 'center' }}>
          © 2026 Pegasus AI Systems. Toate drepturile rezervate. Chișinău, Moldova.
        </p>
      </footer>
    </div>
  )
}

const paraStyle: React.CSSProperties = {
  fontFamily: 'var(--pg-body)',
  fontSize: 16,
  lineHeight: 1.75,
  color: '#A0AEC0',
}

function ValueCard({ icon, iconBg, title, desc }: { icon: React.ReactNode; iconBg: string; title: string; desc: string }) {
  return (
    <div style={{
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
        background: iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--pg-heading)', fontSize: 18, fontWeight: 600, color: 'var(--pg-text)' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--pg-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--pg-text-secondary)' }}>{desc}</p>
    </div>
  )
}
