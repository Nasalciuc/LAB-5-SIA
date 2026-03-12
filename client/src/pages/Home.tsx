import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  const ref = useReveal()

  return (
    <section id="home" ref={ref}>
      {/* Hero */}
      <div className="hero">
        <div className="container">
          <h1>Automatizează-ți Afacerea cu Inteligență Artificială</h1>
          <p>
            Pegasus Flow este platforma no-code de automatizare AI care transformă
            operațiunile SMB-urilor din Moldova și Europa de Est, oferind eficiență,
            scalabilitate și rezultate măsurabile.
          </p>
          <div className="cta-group">
            <Link to="/services" className="btn btn-primary">Descoperă Pegasus Flow</Link>
            <Link to="/contact" className="btn btn-secondary">Contactează-ne</Link>
          </div>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="dashboard-mockup">
        <div className="container">
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Pegasus Flow Dashboard Mockup"
            loading="lazy"
          />
        </div>
      </div>

      {/* Features */}
      <div className="features-section">
        <div className="container">
          <h2>Tot ce ai nevoie pentru automatizare</h2>
          <div className="features-grid">
            <div className="feature-card reveal">
              <i className="fas fa-brain"></i>
              <h3>Automatizare Inteligentă</h3>
              <p>
                Creează fluxuri de lucru inteligente, bazate pe AI, care învață și se
                adaptează nevoilor afacerii tale, eliminând sarcinile repetitive și
                maximizând eficiența.
              </p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-plug"></i>
              <h3>Integrare Simplă</h3>
              <p>
                Conectează Pegasus Flow cu peste 200 de aplicații și sisteme pe care le
                utilizezi deja (CRM, ERP, email, baze de date), fără a scrie o singură
                linie de cod.
              </p>
            </div>
            <div className="feature-card reveal">
              <i className="fas fa-chart-line"></i>
              <h3>Rezultate Măsurabile</h3>
              <p>
                Monitorizează performanța automatizărilor în timp real cu tablouri de bord
                intuitive și rapoarte detaliate, pentru a vedea impactul direct asupra
                costurilor și productivității.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <h2>40%</h2>
              <p>Reducere costuri</p>
            </div>
            <div className="stat-item reveal">
              <h2>500+</h2>
              <p>Fluxuri automatizate</p>
            </div>
            <div className="stat-item reveal">
              <h2>50+</h2>
              <p>Companii partenere</p>
            </div>
            <div className="stat-item reveal">
              <h2>99.9%</h2>
              <p>Uptime garantat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <h2>Ce spun partenerii noștri</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card reveal">
              <p className="quote">
                "Pegasus Flow ne-a redus timpul de procesare a comenzilor cu 60%.
                Recomandăm!"
              </p>
              <div className="author">
                <img src="https://i.pravatar.cc/150?img=68" alt="Ion Moraru" />
                <div className="author-info">
                  <strong>Ion Moraru</strong>
                  <span>Director Operațiuni, LogisTech SRL</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <p className="quote">
                "Sistemul de QA ne-a ajutat să identificăm problemele de training mult mai
                rapid."
              </p>
              <div className="author">
                <img src="https://i.pravatar.cc/150?img=53" alt="Ana Cebotari" />
                <div className="author-info">
                  <strong>Ana Cebotari</strong>
                  <span>Manager Call Center, TravelBook MD</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <p className="quote">
                "Implementarea a durat 3 zile, nu 3 luni cum ne așteptam."
              </p>
              <div className="author">
                <img src="https://i.pravatar.cc/150?img=34" alt="Sergiu Rusu" />
                <div className="author-info">
                  <strong>Sergiu Rusu</strong>
                  <span>CEO, GreenMarket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="final-cta-section">
        <div className="container">
          <div className="final-cta-box reveal">
            <h2>Gata să-ți transformi afacerea?</h2>
            <Link to="/contact" className="btn">Începe Gratuit &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
