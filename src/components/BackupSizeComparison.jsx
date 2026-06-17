import { useEffect, useRef, useState } from 'react';

const BACKUPS = [
  {
    key: 'bm',
    cls: 'trad-bm',
    barCls: 'trad-bm-bar',
    label: 'Bare Metal Recovery',
    size: '37+ GB',
    sizeNum: 37,
    maxH: 160,
    detail: 'Windows OS (25 GB min) + Active Directory DIT (11 GB) + other volumes',
    tags: [
      { label: 'OS Included', cls: 'risk' },
      { label: 'Malware Risk HIGH', cls: 'risk' },
      { label: 'Hardware Dependent', cls: 'risk' },
      { label: '≤ 1× / day', cls: 'neutral' },
    ],
    freq: 1,
    freqLabel: '1× per day max',
    freqNote: 'Large size limits backup frequency — poor RPO',
    freqCls: 'trad1',
  },
  {
    key: 'ss',
    cls: 'trad-ss',
    barCls: 'trad-ss-bar',
    label: 'System State Backup',
    size: '22+ GB',
    sizeNum: 22,
    maxH: 100,
    detail: 'Windows System State (11 GB min) + Active Directory DIT (11 GB) + unknown volumes',
    tags: [
      { label: 'OS State Included', cls: 'risk' },
      { label: 'Malware Risk MEDIUM', cls: 'risk' },
      { label: 'Complex Restore', cls: 'neutral' },
      { label: '1–2× / day', cls: 'neutral' },
    ],
    freq: 2,
    freqLabel: '1–2× per day',
    freqNote: 'Still slow due to OS state inclusion — moderate RPO',
    freqCls: 'trad2',
  },
  {
    key: 'adfr',
    cls: 'adfr',
    barCls: 'adfr-bar',
    label: 'Semperis ADFR',
    size: '5.8 GB',
    sizeNum: 5.8,
    maxH: 28,
    detail: 'Active Directory DIT only — no OS, no hardware, no malware vectors',
    tags: [
      { label: 'AD-Only', cls: 'best' },
      { label: 'Malware-Free', cls: 'good' },
      { label: 'Hardware Independent', cls: 'good' },
      { label: 'Multi × / day', cls: 'best' },
    ],
    freq: 12,
    freqLabel: '12+ × per day',
    freqNote: 'Small size = frequent backups = drastically improved RPO',
    freqCls: 'adfr',
  },
];

export default function BackupSizeComparison() {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.05 }
    );
    if (barRef.current) obs.observe(barRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <hr className="section-sep" />
      <section id="backup-size">
        <div className="section">
          <div className="section-tag">Step 02 — Why Size Matters</div>
          <h2 className="section-title">Backup Size Directly Impacts Recovery</h2>
          <p className="section-desc">
            A smaller, AD-only backup means you can back up <em>far more frequently</em>,
            dramatically shrinking the window of data loss (your RPO — Recovery Point Objective).
          </p>

          {/* Animated bar chart */}
          <div ref={barRef}>
            <div className="bsc-grid">
              {BACKUPS.map(b => (
                <div key={b.key} className={`bsc-card ${b.cls}`}>
                  <div className="bsc-bar-wrap">
                    <div
                      className={`bsc-bar ${b.barCls}`}
                      style={{ height: animated ? b.maxH : 0, transition: 'height 1.2s cubic-bezier(0.34,1.4,0.64,1)' }}
                    >
                      <span className="bsc-bar-size">{b.size}</span>
                    </div>
                  </div>
                  <div className="bsc-info">
                    <h3>{b.label}</h3>
                    <div className="bsc-detail">{b.detail}</div>
                    <div className="bsc-tags">
                      {b.tags.map((t, i) => (
                        <span key={i} className={`bsc-tag ${t.cls}`}>{t.label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Backup Frequency */}
            <div className="freq-section">
              <div className="freq-title">📅 How Often Can You Back Up?</div>
              <div className="freq-grid">
                {BACKUPS.map(b => (
                  <div key={b.key} className={`freq-card ${b.freqCls}`}>
                    <div className="freq-label">{b.label}</div>
                    <div className="freq-count">{b.freq}×</div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 4 }}>
                      {b.freqLabel}
                    </div>
                    <div className="freq-sub">{b.freqNote}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Layered backup model diagram */}
          <div style={{ marginTop: 56 }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
              What's Inside Each Backup?
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: 28 }}>
              Traditional backups carry the entire OS stack — a malware pathway hiding in plain sight.
              ADFR backs up only the AD service layer.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'end' }}>
              {/* Bare Metal */}
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: 10 }}>
                  Traditional backups
                </div>
                <div style={{ border: '2px solid rgba(255,59,85,0.5)', borderRadius: 'var(--r-sm)', overflow: 'hidden' }}>
                  <div style={{ background: '#4F46E5', padding: '8px 14px', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>
                    Active Directory = 11 GB DIT
                  </div>
                  <div style={{ background: 'rgba(180,80,180,0.85)', padding: '6px 14px', textAlign: 'center', fontSize: '0.72rem', color: '#fff' }}>
                    HAL (hardware abstraction layer)
                  </div>
                  <div style={{ background: 'rgba(20,90,45,0.95)', padding: '56px 14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 10 }}>👾</div>
                    <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                      Windows OS,<br />minimum 25 GB<br />+<br />??? GB for other<br />volumes and components
                    </span>
                  </div>
                  <div style={{ background: 'rgba(200,30,50,0.9)', padding: '10px 14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>BARE METAL RECOVERY</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>37+ GB</div>
                  </div>
                </div>
              </div>

              {/* System State */}
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'transparent', marginBottom: 10 }}>&nbsp;</div>
                <div style={{ border: '2px solid rgba(255,170,0,0.5)', borderRadius: 'var(--r-sm)', overflow: 'hidden' }}>
                  <div style={{ background: '#4F46E5', padding: '8px 14px', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>
                    Active Directory = 11 GB DIT
                  </div>
                  <div style={{ background: 'rgba(180,80,180,0.85)', padding: '6px 14px', textAlign: 'center', fontSize: '0.72rem', color: '#fff' }}>
                    HAL (hardware abstraction layer)
                  </div>
                  <div style={{ background: 'rgba(20,90,45,0.95)', padding: '36px 14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>👾</div>
                    <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                      Windows System State Backup,<br />minimum 11 GB<br />+<br />??? GB
                    </span>
                  </div>
                  <div style={{ background: 'rgba(200,130,0,0.9)', padding: '10px 14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>SYSTEM STATE BACKUP</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Minimum 22 GB</div>
                  </div>
                </div>
              </div>

              {/* ADFR */}
              <div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--semperis)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: 10 }}>
                  Semperis ADFR
                </div>
                <div style={{ border: '2px solid #4F46E5', borderRadius: 'var(--r-sm)', overflow: 'hidden', marginBottom: 16 }}>
                  <div style={{ background: '#4F46E5', padding: '8px 14px', textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: '#fff' }}>
                    Active Directory = 11 GB DIT
                  </div>
                </div>
                <div style={{ border: '2px solid rgba(0,207,255,0.6)', borderRadius: 'var(--r-sm)', overflow: 'hidden', boxShadow: 'var(--semperis-glow)' }}>
                  <div style={{ background: 'rgba(0,140,70,0.9)', padding: '20px 14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.88rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                      ADFR BACKUP
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.9)' }}>5.8 GB</div>
                  </div>
                </div>
              </div>
            </div>

            {/* "It's about the service, not the server!" — bold full-width banner */}
            <div style={{
              marginTop: 32,
              padding: '32px 40px',
              background: 'linear-gradient(135deg, rgba(0,207,255,0.13) 0%, rgba(0,207,255,0.04) 60%, rgba(61,233,122,0.07) 100%)',
              border: '1px solid rgba(0,207,255,0.4)',
              borderRadius: 'var(--r)',
              boxShadow: '0 0 40px rgba(0,207,255,0.08)',
            }}>
              <div style={{
                fontFamily: 'var(--ff-display)',
                fontSize: '1rem',
                fontWeight: 900,
                color: 'var(--semperis)',
                textAlign: 'center',
                marginBottom: 28,
                letterSpacing: '0.02em',
                textShadow: '0 0 32px rgba(0,207,255,0.45)',
              }}>
                Restore Malware Free!
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {[
                  { text: 'Removes dependence on source hardware → ', highlight: 'recover anywhere' },
                  { text: 'Decoupled from OS → ', highlight: 'malware-free recovery' },
                  { text: 'Increased backup frequency; ', highlight: 'Improved RPO' },
                  { text: 'Provides ', highlight: 'faster backup and recovery' },
                  { text: 'Fully automated recovery of entire AD forest with a few clicks', highlight: 'Fully automated', bold: true },
                  { text: 'Quarantine for SYSVOL', highlight: null },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10, fontSize: '0.9rem',
                    padding: '10px 14px',
                    background: item.bold ? 'rgba(61,233,122,0.08)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${item.bold ? 'rgba(61,233,122,0.25)' : 'rgba(0,207,255,0.12)'}`,
                    borderRadius: 'var(--r-sm)',
                  }}>
                    <span style={{ color: item.bold ? 'var(--safe)' : 'var(--semperis)', flexShrink: 0, fontWeight: 700, fontSize: '1rem' }}>✓</span>
                    <span style={{ color: 'var(--text)', lineHeight: 1.5 }}>
                      {item.text}
                      {item.highlight && (
                        <span style={{ color: item.bold ? 'var(--safe)' : 'var(--semperis)', fontWeight: 700 }}>
                          {item.highlight}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RPO callout */}
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {[
              { label: 'Bare Metal RPO', value: '24 hours', note: 'You lose up to 1 full day of changes', color: 'var(--danger)' },
              { label: 'System State RPO', value: '12 hours', note: 'You lose up to half a day of changes', color: 'var(--warning)' },
              { label: 'Semperis ADFR RPO', value: '< 2 hours', note: 'You lose only minutes of AD changes', color: 'var(--semperis)' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)', border: `1px solid ${item.color}44`,
                borderRadius: 'var(--r)', padding: '18px 20px', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', fontWeight: 700, color: item.color, marginBottom: 6 }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
