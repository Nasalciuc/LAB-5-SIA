import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" ref={ref}>
      {/* Hero */}
      <div className="hero-contact">
        <div className="container">
          <h1>Hai Să Vorbim Despre Viitorul Afacerii Tale</h1>
          <p>
            Suntem aici să răspundem la întrebările tale și să te ajutăm să descoperi cum
            Inteligența Artificială poate transforma operațiunile companiei tale. Răspundem
            în maximum 24 de ore.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container">
        <div className="contact-content reveal">
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="nume">Nume complet</label>
              <input type="text" id="nume" name="nume" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="companie">Companie (opțional)</label>
              <input type="text" id="companie" name="companie" />

              <label htmlFor="telefon">Telefon (opțional)</label>
              <input type="tel" id="telefon" name="telefon" />

              <label htmlFor="serviciu">Serviciu de interes</label>
              <select id="serviciu" name="serviciu">
                <option value="pegasus-flow">Pegasus Flow</option>
                <option value="qa-call-center">QA Call Center</option>
                <option value="marketing-ai">Marketing AI</option>
                <option value="consultanta">Consultanță &amp; Implementare AI</option>
                <option value="altele">Altele</option>
              </select>

              <label htmlFor="mesaj">Mesajul tău</label>
              <textarea id="mesaj" name="mesaj" rows={5} required></textarea>

              <button type="submit">Trimite Mesajul</button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Informații de Contact</h3>
            <p><i className="fas fa-envelope"></i> Email: <a href="mailto:contact@pegasus-ai.md">contact@pegasus-ai.md</a></p>
            <p><i className="fas fa-phone-alt"></i> Telefon: <a href="tel:+37369123456">+373 69 123 456</a></p>
            <p><i className="fas fa-map-marker-alt"></i> Adresă: Str. Studenților 9/8, Chișinău, MD-2045, Moldova</p>
            <p><i className="fas fa-clock"></i> Program: Luni – Vineri, 09:00 – 18:00</p>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.897003006451!2d28.847587715606456!3d47.04278787915234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c11f4d9b23b%3A0x6b4c1a5e1f8a8b1a!2sStrada%20Studen%C8%9Bilor%209%2F8%2C%20Chi%C8%99in%C4%83u%202045%2C%20Moldova!5e0!3m2!1sen!2smd!4v1678627200000!5m2!1sen!2smd"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pegasus AI Systems Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
