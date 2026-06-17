import { useState } from 'react';

const ROWS = [
  { label: 'Day 1', tradState: 'safe',  tradText: 'Clean — In backup',     adfrState: 'protected', adfrText: 'Clean — ADFR covered' },
  { label: 'Day 2', tradState: 'safe',  tradText: 'Clean — In backup',     adfrState: 'protected', adfrText: 'Clean — ADFR covered' },
  { label: 'Day 3', tradState: 'safe',  tradText: '📸 Restore Point',       adfrState: 'protected', adfrText: 'Clean — ADFR covered' },
  { label: 'Day 4', tradState: 'lost',  tradText: '✗ LOST — 340 AD ops',   adfrState: 'protected', adfrText: '⚠ Infected OS, Clean AD' },
  { label: 'Day 5', tradState: 'lost',  tradText: '✗ LOST — 300 AD ops',   adfrState: 'protected', adfrText: '⚠ Infected OS, Clean AD' },
  { label: 'Day 6', tradState: 'lost',  tradText: '✗ LOST — 380 AD ops',   adfrState: 'protected', adfrText: '⚠ Infected OS, Clean AD' },
  { label: 'Day 7', tradState: 'lost',  tradText: '✗ LOST — 420 AD ops',   adfrState: 'protected', adfrText: '⚠ Infected OS, Clean AD' },
  { label: 'Day 8', tradState: 'lost',  tradText: '✗ LOST — 360 AD ops',   adfrState: 'protected', adfrText: '📸 ADFR Restore Point (Clean AD)' },
  { label: 'Day 9', tradState: 'malware',tradText: '☣ Malware in backup',  adfrState: 'empty',     adfrText: '— Not backed up (attack)' },
  { label: 'Day 10',tradState: 'malware',tradText: '☣ Malware in backup',  adfrState: 'empty',     adfrText: '— Not backed up (attack)' },
];

const TRAD_RESULT = `⚠ Restoring to Day 3 using traditional backup:

• All legitimate AD changes from Day 4–10 are permanently lost (approx. 2,100+ operations)
• The restored OS may still contain dormant malware components embedded in Windows layer
• Hardware-dependent: restore requires matching or similar hardware
• Backup size: 37+ GB — slow restore, hours of downtime
• Every user must reset passwords manually; groups, OUs, GPOs re-verified from scratch`;

export default function RecoveryComparison() {
  const [tradResult, setTradResult] = useState(false);

  return (
    <>
      <hr className="section-sep" />
      <section id="recovery">
        <div className="section">
          <div className="section-tag">Step 04 — Recovery</div>
          <h2 className="section-title">What Gets Restored? What Gets Lost?</h2>
          <p className="section-desc">
            On Day 10 the ransomware hits. It's time to recover. See what each approach
            actually recovers — and what it doesn't.
          </p>

          <div className="recovery-grid">
            {/* Traditional Card */}
            <div className="recovery-card trad">
              <div className="recovery-card-header">
                <span className="icon">🗄️</span>
                <div>
                  <h3 style={{ color: 'var(--warning)' }}>Traditional Backup</h3>
                  <div className="sub">Bare Metal / System State — 37+ GB</div>
                </div>
              </div>

              <div className="recovery-timeline">
                {ROWS.map((r, i) => (
                  <div key={i} className="rt-row">
                    <div className="rt-label">{r.label}</div>
                    <div className={`rt-bar ${r.tradState}`}>
                      <span className="rt-bar-text">{r.tradText}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="recovery-summary">
                <div className="rs-row">
                  <span className="rs-label">Restore point</span>
                  <span className="rs-value warn">Day 3 (Last backup)</span>
                </div>
                <div className="rs-row">
                  <span className="rs-label">Data lost</span>
                  <span className="rs-value bad">~7 days / 2,100+ ops</span>
                </div>
                <div className="rs-row">
                  <span className="rs-label">Malware risk</span>
                  <span className="rs-value bad">HIGH — OS restored too</span>
                </div>
                <div className="rs-row">
                  <span className="rs-label">Backup size</span>
                  <span className="rs-value warn">37+ GB</span>
                </div>
                <button className="restore-btn trad" onClick={() => setTradResult(v => !v)}>
                  {tradResult ? '▲ Hide Result' : '▶ Simulate: Restore with Traditional Backup'}
                </button>
                {tradResult && (
                  <div className="restore-result trad">
                    {TRAD_RESULT.split('\n').map((line, i) => (
                      <div key={i} style={{ marginBottom: line === '' ? 8 : 2 }}>{line}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Semperis Card — summary only, result moved below */}
            <div className="recovery-card adfr">
              <div className="recovery-card-header">
                <span className="icon">🛡️</span>
                <div>
                  <h3 style={{ color: 'var(--semperis)' }}>Semperis ADFR</h3>
                  <div className="sub">AD-Only Backup — 5.8 GB</div>
                </div>
              </div>

              <div className="recovery-timeline">
                {ROWS.map((r, i) => (
                  <div key={i} className="rt-row">
                    <div className="rt-label">{r.label}</div>
                    <div className={`rt-bar ${r.adfrState}`}>
                      <span className="rt-bar-text">{r.adfrText}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="recovery-summary">
                <div className="rs-row">
                  <span className="rs-label">Restore point</span>
                  <span className="rs-value good">Day 8 (ADFR snapshot)</span>
                </div>
                <div className="rs-row">
                  <span className="rs-label">Data lost</span>
                  <span className="rs-value good">Minimal — AD only</span>
                </div>
                <div className="rs-row">
                  <span className="rs-label">Malware risk</span>
                  <span className="rs-value good">NONE — OS decoupled</span>
                </div>
                <div className="rs-row">
                  <span className="rs-label">Backup size</span>
                  <span className="rs-value good">5.8 GB</span>
                </div>
              </div>
            </div>
          </div>

          {/* ADFR result — full-width rectangle below the table */}
          <div style={{
            marginTop: 28,
            padding: '28px 36px',
            background: 'linear-gradient(135deg, rgba(0,207,255,0.08) 0%, rgba(61,233,122,0.06) 100%)',
            border: '2px solid rgba(0,207,255,0.4)',
            borderRadius: 'var(--r)',
            boxShadow: '0 0 32px rgba(0,207,255,0.1)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <span style={{ fontSize: '1.8rem' }}>🛡️</span>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--semperis)' }}>
                With Semperis ADFR — AD-only restore to Day 8, most recent clean state
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: '✅', text: 'Only AD objects are restored — no OS, no malware pathways', color: 'var(--safe)' },
                { icon: '🔄', text: 'Recovery is hardware-independent: restore to any VM or physical server', color: 'var(--semperis)' },
                { icon: '⚡', text: 'Backup size: 5.8 GB — fast, frequent backups improve RPO dramatically', color: 'var(--semperis)' },
                { icon: '🔒', text: 'SYSVOL is quarantined separately; malware cannot piggyback on AD restore', color: 'var(--safe)' },
                { icon: '🤖', text: 'Fully automated forest recovery with just a few clicks', color: 'var(--safe)' },
                { icon: '📉', text: 'Dramatically fewer operations to replay vs. 7 full days with traditional backup', color: 'var(--semperis)' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 14, alignItems: 'center',
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${item.color}22`,
                  borderLeft: `3px solid ${item.color}`,
                  borderRadius: 'var(--r-sm)',
                }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key insight */}
          <div style={{
            marginTop: 20, padding: '18px 28px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(0,207,255,0.2)', borderRadius: 'var(--r)',
          }}>
            <span style={{ fontFamily: 'var(--ff-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--semperis)' }}>
              💡 Key Insight:
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginLeft: 12 }}>
              Traditional backups include the Windows OS — which <strong style={{ color: 'var(--text)' }}>may already contain malware</strong>.
              Semperis ADFR backs up <em>only the Active Directory service</em> (DIT file), completely decoupled from the OS.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
