import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref}>
      {/* Hero */}
      <div className="hero-about">
        <div className="container">
          <h1>Construim Viitorul Automatizării în Moldova</h1>
          <p>
            Suntem o echipă pasionată de ingineri AI din Chișinău, dedicați să aducem
            inovația și eficiența Inteligenței Artificiale în inima afacerilor tale.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="story-section reveal">
        <div className="container">
          <h2>Povestea Pegasus AI Systems</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Pegasus AI Systems s-a născut din viziunea de a democratiza accesul la
                tehnologiile de Inteligență Artificială pentru întreprinderile mici și
                mijlocii din Moldova și Europa de Est. Am observat un decalaj semnificativ
                între potențialul imens al AI și resursele limitate de care dispun adesea
                companiile locale pentru a implementa astfel de soluții.
              </p>
              <p>
                Fondată de un grup de ingineri cu experiență vastă în machine learning,
                procesarea limbajului natural (NLP) și arhitecturi multi-agent, misiunea
                noastră a fost clară: să facem AI-ul accesibil, ușor de utilizat și, mai
                presus de toate, eficient.
              </p>
              <p>
                Am început prin a dezvolta Pegasus Flow, platforma noastră no-code de
                automatizare, concepută pentru a permite oricărei afaceri să-și creeze
                propriile fluxuri de lucru inteligente, fără a fi nevoie de cunoștințe de
                programare.
              </p>
              <p>
                Ceea ce ne diferențiază este abordarea noastră personalizată și înțelegerea
                profundă a pieței locale. Nu oferim doar produse, ci parteneriate
                strategice. Lucrăm îndeaproape cu fiecare client pentru a înțelege nevoile
                specifice, a identifica oportunitățile de automatizare și a implementa
                soluții care generează un impact real și măsurabil.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Echipa Pegasus AI Systems lucrând"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="values-section">
        <div className="container">
          <h2>Valorile Noastre</h2>
          <div className="values-grid">
            <div className="value-card reveal">
              <i className="fas fa-lightbulb"></i>
              <h3>Inovație</h3>
              <p>
                Suntem mereu în căutarea celor mai noi tehnologii AI și a metodelor
                inovatoare pentru a oferi soluții de top clienților noștri.
              </p>
            </div>
            <div className="value-card reveal">
              <i className="fas fa-shield-alt"></i>
              <h3>Transparență</h3>
              <p>
                Credem într-o comunicare deschisă, clară și onestă, de la prețuri la
                procese de implementare.
              </p>
            </div>
            <div className="value-card reveal">
              <i className="fas fa-trophy"></i>
              <h3>Rezultate</h3>
              <p>
                Ne concentrăm pe impactul măsurabil. Soluțiile noastre sunt concepute
                pentru a genera valoare reală și creștere pentru afacerea ta.
              </p>
            </div>
            <div className="value-card reveal">
              <i className="fas fa-handshake"></i>
              <h3>Parteneriat</h3>
              <p>
                Construim relații pe termen lung bazate pe încredere și colaborare,
                fiind alături de tine la fiecare pas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta-section reveal">
        <div className="container">
          <h2>Vrei să afli cum putem ajuta afacerea ta?</h2>
          <Link to="/contact" className="btn-secondary">Hai să Discutăm &rarr;</Link>
        </div>
      </div>
    </section>
  )
}
