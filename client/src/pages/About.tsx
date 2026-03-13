import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Eye, Target, Handshake } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const values = [
  { icon: <Lightbulb size={24} />, title: 'Inovație', desc: 'Explorăm constant cele mai noi tehnologii AI pentru soluții de vârf.' },
  { icon: <Eye size={24} />, title: 'Transparență', desc: 'Comunicare deschisă, prețuri clare, fără surprize sau costuri ascunse.' },
  { icon: <Target size={24} />, title: 'Rezultate', desc: 'Ne concentrăm pe impact măsurabil, nu pe buzzwords și promisiuni vagi.' },
  { icon: <Handshake size={24} />, title: 'Parteneriat', desc: 'Relații pe termen lung, nu proiecte one-off. Creștem împreună.' },
]

export default function About() {
  const ref = useReveal()
  useEffect(() => { document.title = 'Despre Noi — Pegasus AI Systems' }, [])
  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="bg-b" style={{ paddingBottom: 40 }}>
        <div className="sec">
          <div className="hero" style={{ paddingBottom: 0 }}>
            <span className="badge-lbl rv">Despre Noi</span>
            <h1 className="rv rv-d1">Construim Viitorul Automatizării în Moldova</h1>
            <p className="hero-sub rv rv-d2">Suntem o echipă de ingineri AI și specialiști în business din Chișinău, dedicați transformării digitale a IMM-urilor din Moldova și Europa de Est.</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-b" style={{ padding: '80px 0' }}>
        <div className="sec">
          <div className="rv" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-2)' }}>
                <p style={{ marginBottom: 24 }}>Pegasus AI Systems a fost fondată cu o viziune clară: să facă inteligența artificială accesibilă pentru afacerile mici și medii din Moldova și din regiunea Europei de Est. Într-o lume în care giganții tech investesc miliarde în automatizare, companiile locale rămân adesea în urmă — nu din lipsă de ambiție, ci din lipsă de soluții adaptate realităților lor.</p>
                <p style={{ marginBottom: 24 }}>Aici intervenim noi. Echipa noastră combină expertiză tehnică în machine learning, procesarea limbajului natural și arhitecturi multi-agent cu o înțelegere profundă a provocărilor reale cu care se confruntă antreprenorii locali. Nu vindem tehnologie de dragul tehnologiei — construim instrumente care rezolvă probleme concrete.</p>
                <p style={{ marginBottom: 24 }}>Produsul nostru principal, Pegasus Flow, este o platformă de automatizare bazată pe agenți AI care permite companiilor să creeze fluxuri de lucru inteligente fără a scrie o singură linie de cod. De la automatizarea răspunsurilor la clienți și procesarea facturilor, până la analiza calității în call center-uri și generarea automată de rapoarte — Pegasus Flow transformă ore de muncă manuală în minute de procesare automată.</p>
              </div>

              <blockquote className="pull-q">
                „Nu vindem tehnologie de dragul tehnologiei — construim instrumente care rezolvă probleme concrete."
              </blockquote>

              <div style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-2)' }}>
                <p style={{ marginBottom: 24 }}>Ceea ce ne diferențiază este abordarea noastră personalizată. Fiecare business este unic, iar soluțiile generice rareori funcționează în practică. De aceea, lucrăm îndeaproape cu fiecare client pentru a înțelege procesele existente, a identifica punctele de ineficiență și a proiecta fluxuri automatizate care se integrează natural în operațiunile zilnice.</p>
                <p style={{ marginBottom: 24 }}>Biroul nostru se află în zona campusului Universității Tehnice a Moldovei din Rîșcani, în inima comunității tech studențești din Chișinău.</p>
                <p style={{ marginBottom: 24 }}>Suntem bazați în Chișinău, dar viziunea noastră nu are granițe. Colaborăm cu companii din întreaga regiune și construim parteneriate cu ecosistemul tech local pentru a accelera inovația. Credem că Moldova are potențialul de a deveni un hub regional pentru AI aplicat în business — și Pegasus AI Systems vrea să fie în fruntea acestei transformări.</p>
                <p>Valorile noastre: transparență în comunicare, excelență tehnică, orientare spre rezultate și parteneriat pe termen lung cu clienții noștri. Nu suntem doar un furnizor de software — suntem partenerul tău strategic în era automatizării.</p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop" alt="Echipă de ingineri AI din Chișinău dezvoltând platforma Pegasus Flow" style={{ borderRadius: 16, width: '100%', border: '1px solid var(--border)' }} />
              <div style={{ position: 'absolute', bottom: -20, right: -20, width: 200, height: 200, background: 'var(--accent)', opacity: 0.06, borderRadius: '50%', filter: 'blur(60px)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-c" style={{ padding: '100px 0' }}>
        <div className="sec">
          <div className="s-head">
            <h2 className="rv">Valorile Noastre</h2>
          </div>
          <div className="g4">
            {values.map((v, i) => (
              <div key={v.title} className={`card rv rv-d${i + 1}`}>
                <div className="card-icon tl">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-b" style={{ padding: '60px 0 100px' }}>
        <div className="sec">
          <div className="cta-g rv">
            <h2>Vrei să afli cum putem ajuta afacerea ta?</h2>
            <p>Discută cu echipa noastră despre provocările tale și descoperă soluțiile potrivite.</p>
            <Link to="/contact" className="btn-w">Hai să Discutăm <ArrowRight size={18} color="var(--accent)" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}