const services = ['Umbau & Anbau', 'Renovierung', 'Reparatur & Instandsetzung', 'Dacharbeiten', 'Badmodernisierung', 'Persönliche Beratung'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="ENSA – das kreative Bauunternehmen, Startseite">
          <img className="ensa-logo" src="/ensa-logo.png" alt="ENSA GmbH – Das kreative Bauunternehmen" />
        </a>
        <a className="header-call" href="tel:+49495640770">04956 40770</a>
      </header>
      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">Bauunternehmen in Uplengen</p>
          <h1>Handwerk mit Erfahrung.<br /><em>Persönlich und unkompliziert.</em></h1>
          <p className="intro">Seit 2004 steht die ENSA GmbH für zuverlässige Bau-, Umbau- und Instandsetzungsarbeiten in Ostfriesland und im Raum Oldenburg.</p>
          <div className="actions"><a className="button primary" href="tel:+49495640770"><span aria-hidden="true">☎</span> Jetzt anrufen</a><a className="button secondary" href="mailto:ensa.gmbh@ewetel.net">E-Mail schreiben</a></div>
        </div>
        <div className="hero-card" aria-label="Direkter Kontakt"><span className="card-number">20+</span><p>Jahre Erfahrung</p><div className="divider" /><p className="card-quote">„Sprechen Sie uns einfach an. Wir beraten Sie persönlich.“</p><span className="signature">Hermann Saathoff</span></div>
      </section>
      <section className="services" aria-labelledby="services-title">
        <div><p className="eyebrow">Was wir für Sie tun</p><h2 id="services-title">Ausgewählte Arbeiten rund ums Haus</h2></div>
        <ul>{services.map((service, index) => <li key={service}><span>{String(index + 1).padStart(2, '0')}</span>{service}</li>)}</ul>
        <p className="services-note">Sie sind nicht sicher, ob Ihr Vorhaben passt? Ein kurzer Anruf genügt.</p>
      </section>
      <section className="contact" id="kontakt" aria-labelledby="contact-title">
        <p className="eyebrow">Kontakt</p><h2 id="contact-title">Wie können wir helfen?</h2><p>Erzählen Sie uns kurz von Ihrem Vorhaben. Hermann Saathoff meldet sich persönlich bei Ihnen.</p>
        <div className="contact-grid">
          <a href="tel:+49495640770"><span>Telefon</span><strong>04956 40770</strong><small>Direkt anrufen →</small></a>
          <a href="mailto:ensa.gmbh@ewetel.net"><span>E-Mail</span><strong>ensa.gmbh@ewetel.net</strong><small>Nachricht schreiben →</small></a>
          <address><span>Adresse</span><strong>Alter Postweg 148<br />26670 Uplengen</strong><small>Ostfriesland</small></address>
        </div>
      </section>
      <footer>
        <div className="footer-brand"><strong>ENSA GmbH</strong><span>Das kreative Bauunternehmen</span></div>
        <details><summary>Impressum</summary><div className="legal"><p><strong>ENSA GmbH</strong><br />Alter Postweg 148<br />26670 Uplengen</p><p>Geschäftsführer: Hermann Saathoff<br />Telefon: 04956 40770<br />E-Mail: ensa.gmbh@ewetel.net</p><p>Amtsgericht Leer<br />Handelsregister: HRB 111326</p></div></details>
        <details><summary>Datenschutz</summary><div className="legal"><p>Diese Website verwendet keine Cookies, kein Kontaktformular und keine Analyse-Dienste. Beim Aufruf werden durch den Hosting-Anbieter technisch notwendige Verbindungsdaten verarbeitet.</p><p>Für Fragen zum Datenschutz erreichen Sie uns unter den oben genannten Kontaktdaten.</p></div></details>
        <span className="copyright">© {new Date().getFullYear()} ENSA GmbH</span>
      </footer>
    </main>
  );
}
