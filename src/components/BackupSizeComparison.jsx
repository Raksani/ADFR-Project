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
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <hr className="section-sep" />
      <section id="backup-size">
        <div className="section" ref={ref}>
          <div className="section-tag">Step 4 — Why Size Matters</div>
          <h2 className="section-title">Backup Size Directly Impacts Recovery</h2>
          <p className="section-desc">
            A smaller, AD-only backup means you can back up <em>far more frequently</em>,
            dramatically shrinking the window of data loss (your RPO — Recovery Point Objective).
          </p>

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
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: 4, color: 'var(--text)' }}>
                    {b.freqLabel}
                  </div>
                  <div className="freq-sub">{b.freqNote}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RPO callout */}
          <div style={{
            marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
          }}>
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
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
