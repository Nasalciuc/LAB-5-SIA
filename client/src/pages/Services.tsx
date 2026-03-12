import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" ref={ref}>
      {/* Hero */}
      <div className="hero-services">
        <div className="container">
          <h1>Soluții AI Care Lucrează Pentru Tine</h1>
          <p>
            De la automatizarea fluxurilor de lucru cu platforma noastră no-code, Pegasus
            Flow, la soluții personalizate de AI, suntem aici să transformăm modul în care
            afacerea ta operează.
          </p>
        </div>
      </div>

      {/* Service Items */}
      <div className="container">
        <div className="service-item reveal">
          <h3>Pegasus Flow — Platforma de Automatizare AI</h3>
          <p>
            Pegasus Flow este inima ofertei noastre: o platformă intuitivă, no-code, care
            permite oricărei afaceri să-și automatizeze procesele. Conectează email-ul,
            CRM-ul, bazele de date și alte aplicații într-un sistem inteligent care
            gestionează sarcinile repetitive, de la generarea de lead-uri la procesarea
            comenzilor.
          </p>
          <ul>
            <li>Platformă no-code intuitivă</li>
            <li>Integrare cu 200+ aplicații</li>
            <li>Automatizări bazate pe AI</li>
            <li>Implementare rapidă (sub 48h)</li>
          </ul>
        </div>

        <div className="service-item reveal">
          <h3>Quality Assurance pentru Call Center-uri</h3>
          <p>
            Transformă performanța call center-ului tău cu soluția noastră de QA bazată pe
            AI. Analizăm convorbirile telefonice folosind algoritmi multi-agent pentru a
            evalua peste 22 de criterii, oferind scoruri detaliate pentru fiecare agent și
            recomandări precise pentru îmbunătățirea trainingului.
          </p>
          <ul>
            <li>Analiză multi-agent a convorbirilor</li>
            <li>Evaluare pe 22+ criterii</li>
            <li>Scoruri detaliate pentru agenți</li>
            <li>Recomandări personalizate de training</li>
          </ul>
        </div>

        <div className="service-item reveal">
          <h3>Automatizare Marketing &amp; Social Media</h3>
          <p>
            Optimizează-ți eforturile de marketing cu fluxuri inteligente de AI. De la
            crearea automată de conținut, la segmentarea avansată a audienței, testare A/B
            automatizată și raportare în timp real.
          </p>
          <ul>
            <li>Fluxuri de marketing inteligente</li>
            <li>Testare A/B și segmentare avansată</li>
            <li>Generare automată de conținut</li>
            <li>Raportare în timp real</li>
          </ul>
        </div>

        <div className="service-item reveal">
          <h3>Consultanță &amp; Implementare AI Personalizată</h3>
          <p>
            Ai un proces complex sau o idee inovatoare? Echipa noastră de experți AI oferă
            consultanță completă și servicii de implementare personalizate. De la analiza
            inițială a proceselor la dezvoltarea soluțiilor AI bespoke și integrarea
            completă în sistemele tale existente.
          </p>
          <ul>
            <li>Analiză detaliată a proceselor</li>
            <li>Dezvoltare soluții AI bespoke</li>
            <li>Implementare de la PoC la producție</li>
            <li>Suport și optimizare continuă</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="pricing-section">
        <div className="container">
          <h2>Alege Pachetul Potrivit</h2>
          <div className="pricing-grid">
            <div className="pricing-card reveal">
              <h3>Starter</h3>
              <div className="price">€299<span>/lună</span></div>
              <ul>
                <li>5 Fluxuri AI</li>
                <li>3 Utilizatori</li>
                <li>Integrare Email &amp; CRM</li>
                <li>Suport Standard</li>
                <li>Raportare Bazică</li>
              </ul>
              <Link to="/contact" className="btn-select">Alege Pachetul Starter</Link>
            </div>

            <div className="pricing-card recommended reveal">
              <h3>Professional</h3>
              <div className="price">€799<span>/lună</span></div>
              <ul>
                <li>20 Fluxuri AI</li>
                <li>10 Utilizatori</li>
                <li>Toate Integrările (200+)</li>
                <li>QA 100 Convorbiri/lună</li>
                <li>Tablouri de Bord Avansate</li>
                <li>Suport Prioritar</li>
              </ul>
              <Link to="/contact" className="btn-select">Alege Pachetul Professional</Link>
            </div>

            <div className="pricing-card reveal">
              <h3>Enterprise</h3>
              <div className="price">Custom<span>/proiect</span></div>
              <ul>
                <li>Fluxuri AI Nelimitate</li>
                <li>Utilizatori Nelimitați</li>
                <li>Toate Integrările + Custom</li>
                <li>QA Convorbiri Nelimitate</li>
                <li>Soluții AI Personalizate</li>
                <li>Suport 24/7 &amp; Manager Dedicat</li>
              </ul>
              <Link to="/contact" className="btn-select">Contactează-ne pentru Enterprise</Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="services-cta-section reveal">
        <div className="container">
          <h2>Nu ești sigur ce pachet ți se potrivește?</h2>
          <Link to="/contact" className="btn-secondary">Cere o Consultanță Gratuită &rarr;</Link>
        </div>
      </div>
    </section>
  )
}
