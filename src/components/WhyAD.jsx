export default function WhyAD() {
  return (
    <>
      <hr className="section-sep" />
      <section id="why-ad">
        <div className="section">
          <div className="section-tag">Step 00 — The Importance of Active Directory</div>
          <h2 className="section-title">Identity Is the Foundation of Zero Trust</h2>
          <p className="section-desc">
            Industry analysts agree: zero trust fails without a secure identity foundation.
            Active Directory is that foundation — and attackers know it.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
            {[
              {
                quote: '"Stop working on zero trust if you haven\'t addressed identity first."',
                source: 'Gartner IAM Summit 2024',
                accent: 'var(--semperis)',
              },
              {
                quote: '"Identity is the foundation of zero trust. Without a solid identity foundation, zero trust will fail."',
                source: 'John Watts — "Demystifying Zero Trust in an Identity First Strategy"',
                accent: 'var(--safe)',
              },
            ].map((q, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: `1px solid ${q.accent}44`,
                borderLeft: `4px solid ${q.accent}`,
                borderRadius: 'var(--r)',
                padding: '28px 24px',
              }}>
                <div style={{ fontSize: '2rem', color: q.accent, lineHeight: 1, marginBottom: 12, fontFamily: 'Georgia, serif' }}>"</div>
                <p style={{ fontSize: '1rem', color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 16 }}>
                  {q.quote.replace(/^"|"$/g, '')}
                </p>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                  — {q.source}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              {
                icon: '🏛️',
                title: 'AD Controls Everything',
                desc: 'Active Directory authenticates every user, computer, and service in the organization. Compromising AD means owning the entire environment.',
                color: 'var(--danger)',
              },
              {
                icon: '🎯',
                title: 'Primary Attack Target',
                desc: 'Attackers prioritize gaining Domain Admin access. Once achieved, they can disable defenses, exfiltrate data, and deploy ransomware enterprise-wide.',
                color: 'var(--warning)',
              },
              {
                icon: '🔐',
                title: 'Identity-First Security',
                desc: 'Protecting AD is not optional. It is the prerequisite for every other security investment — endpoint, cloud, network — to be effective.',
                color: 'var(--semperis)',
              },
            ].map((card, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: `1px solid ${card.color}33`,
                borderRadius: 'var(--r)',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: card.color }} />
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{card.icon}</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: card.color, marginBottom: 10 }}>
                  {card.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
