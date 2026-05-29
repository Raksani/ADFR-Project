export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-badge">Educational Demo — Cybersecurity</div>
        <h1 className="hero-title">
          Active Directory Recovery<br />
          <span className="red">Under Attack</span>
        </h1>
        <p className="hero-sub">
          A ransomware hits your network. Your Active Directory is compromised over 10 days.
          Does your backup strategy protect you — or leave you exposed?
          Explore why <span style={{color:'var(--semperis)'}}>Semperis ADFR</span> changes the game.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">1,000+</span>
            <span className="hero-stat-label">AD Users at Risk</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">7 Days</span>
            <span className="hero-stat-label">Data Lost (Traditional)</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">5.8 GB</span>
            <span className="hero-stat-label">ADFR Backup Size</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">37+ GB</span>
            <span className="hero-stat-label">Bare Metal Backup Size</span>
          </div>
        </div>
        <a href="#timeline" className="hero-cta">Explore the Scenario ↓</a>
        <div className="hero-scroll-hint">▼ scroll to begin</div>
      </section>
      <hr className="section-sep" />
    </>
  );
}
