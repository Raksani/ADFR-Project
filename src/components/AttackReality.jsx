export default function AttackReality() {
  return (
    <>
      <hr className="section-sep" />
      <section id="attack-reality">
        <div className="section">
          <div className="section-tag">01 — The New Attack Reality</div>
          <h2 className="section-title">Attackers No Longer Break In — They Log In</h2>
          <p className="section-desc">
            The threat landscape has fundamentally shifted. Modern attackers bypass malware detection entirely
            by using stolen credentials to move as trusted users.
          </p>

          <div style={{ marginBottom: 40, padding: '24px 32px', background: 'rgba(255,59,85,0.06)', border: '1px solid rgba(255,59,85,0.25)', borderRadius: 'var(--r)' }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--danger)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
              eSentire 2026 Threat Report — SC Media Webcast
            </div>
            <blockquote style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, margin: 0 }}>
              "The new attacker mantra is: Log in, do not break in."
            </blockquote>
            <div style={{ marginTop: 10, fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              — Mandy Logan, SC Media Webcast host, citing eSentire's 2026 Threat Report
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, alignItems: 'center' }}>
            {/* Old Way */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,170,0,0.3)', borderRadius: 'var(--r)', padding: 28 }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--warning)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
                OLD WAY
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '🔓', label: 'Exploit vulnerabilities' },
                  { icon: '🦠', label: 'Deploy malware' },
                  { icon: '🚫', label: 'Bypass endpoint detection' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 16px', background: 'rgba(255,170,0,0.06)', borderRadius: 'var(--r-sm)', border: '1px solid rgba(255,170,0,0.15)' }}>
                    <span style={{ fontSize: '1.3rem' }}>{step.icon}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{step.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Endpoint detection tools were built to catch this
              </div>
            </div>

            {/* Arrow */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', color: 'var(--danger)' }}>→</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: 4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>evolved to</div>
            </div>

            {/* New Way */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,59,85,0.4)', borderRadius: 'var(--r)', padding: 28, boxShadow: 'var(--danger-glow)' }}>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', color: 'var(--danger)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>
                NEW WAY
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '🛒', label: 'Buy credentials' },
                  { icon: '🔑', label: 'Log in as a trusted user' },
                  { icon: '🕵️', label: 'Move laterally — undetected' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 16px', background: 'rgba(255,59,85,0.08)', borderRadius: 'var(--r-sm)', border: '1px solid rgba(255,59,85,0.25)' }}>
                    <span style={{ fontSize: '1.3rem' }}>{step.icon}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{step.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--danger)', fontWeight: 600 }}>
                Traditional defenses are blind to this
              </div>
            </div>
          </div>

          <div style={{ marginTop: 32, padding: '18px 24px', background: 'var(--semperis-dim)', border: '1px solid rgba(0,207,255,0.25)', borderRadius: 'var(--r)' }}>
            <span style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--semperis)' }}>
              💡 Why This Matters for Active Directory:
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginLeft: 12 }}>
              When attackers log in as trusted users, Active Directory — the system that validates every login — becomes the primary target and the primary weapon. Controlling AD means controlling the entire organization.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
