const FLOW_STEPS = [
  {
    num: 1,
    icon: '🏛️',
    title: 'Active Directory Forest',
    sub: 'Primary Datacenter',
    desc: 'AD Forest with ADFR Agents installed on each Domain Controller.',
    color: '#4F46E5',
    colorDim: 'rgba(79,70,229,0.1)',
  },
  {
    num: 2,
    icon: '📦',
    title: 'Semperis ADFR Backup',
    sub: 'AD-only snapshot — 5.8 GB',
    desc: 'ADFR Management Server captures an AD-only backup: DIT file, config, metadata. No Windows OS included.',
    color: 'var(--semperis)',
    colorDim: 'rgba(0,207,255,0.08)',
  },
  {
    num: 3,
    icon: '⚡',
    title: 'Triggers Cohesity DataProtect',
    sub: 'Automated backup of ADFR itself',
    desc: 'ADFR backup completion triggers Cohesity DataProtect to protect the ADFR data. ADFR alone is fragile — it relies on Windows, the same dependency as AD Forest.',
    color: 'var(--warning)',
    colorDim: 'rgba(255,170,0,0.08)',
    warning: true,
  },
  {
    num: 4,
    icon: '🔒',
    title: 'Immutable Storage',
    sub: 'Cohesity DataProtect — WORM protected',
    desc: 'Cohesity DataProtect writes ADFR backup data to immutable, indelible storage. Ransomware and attackers cannot delete, encrypt, or tamper with it.',
    color: 'var(--safe)',
    colorDim: 'rgba(61,233,122,0.08)',
  },
];

const WHAT_DATAPROTECT_ADDS = [
  { icon: '🔒', title: 'Immutability & Indelibility', desc: 'ADFR backup data is locked — attackers cannot delete or corrupt it even with admin credentials', color: 'var(--safe)' },
  { icon: '🦠', title: 'Malware Scanning', desc: 'Backup data is scanned before recovery — ensuring a truly clean restore point, not just an untampered one', color: 'var(--danger)' },
  { icon: '📊', title: 'Anomaly Detection', desc: 'Behavioral analysis on backup data identifies unusual patterns before they become incidents', color: 'var(--semperis)' },
  { icon: '⚙️', title: 'Automated Orchestration', desc: 'Backup jobs triggered automatically on ADFR completion — no manual scheduling needed', color: 'var(--warning)' },
  { icon: '🏔️', title: 'Air-Gap Capable', desc: 'DataProtect can write to FortKnox for fully air-gapped, offsite immutable copy — maximum resilience', color: 'var(--safe)' },
  { icon: '🔄', title: 'Recovery Orchestration', desc: 'Cohesity provides the recovery path back into the Isolation/Recovery Environment when needed', color: 'var(--semperis)' },
];

function Arrow() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>
      <div style={{ width: 32, height: 1, background: 'rgba(0,207,255,0.4)' }} />
      <div style={{ fontSize: '1rem', color: 'var(--semperis)', marginTop: -6 }}>▶</div>
    </div>
  );
}

export default function CohesityIntegration() {
  return (
    <>
      <hr className="section-sep" />
      <section id="cohesity-integration">
        <div className="section">
          <div className="section-tag">09 — Cohesity Integration</div>
          <h2 className="section-title">ADFR + Cohesity DataProtect — Immutable AD Recovery</h2>
          <p className="section-desc">
            Semperis ADFR alone is fragile — it relies on Windows, the same dependency as the AD Forest it protects.
            Cohesity DataProtect closes that gap by wrapping ADFR backups in immutable, air-gap-capable storage.
          </p>

          {/* Architecture diagram — horizontal flow */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r)',
            padding: '36px 32px 28px',
            marginBottom: 40,
          }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 28, textAlign: 'center' }}>
              Comprehensive Cyber Resilience for Enterprise Identity Systems
            </div>

            {/* Main flow row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, justifyContent: 'center' }}>

              {/* Block 1 — AD Forest */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: 'rgba(79,70,229,0.1)',
                border: '1.5px solid rgba(79,70,229,0.5)',
                borderRadius: 'var(--r)',
                padding: '20px 18px',
                minWidth: 130, textAlign: 'center',
              }}>
                {/* DC stack icons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 10 }}>
                  {[0,1,2].map(n => (
                    <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 52, height: 14, background: 'rgba(79,70,229,0.25)', border: '1px solid rgba(79,70,229,0.5)', borderRadius: 3, display: 'flex', alignItems: 'center', paddingLeft: 4, gap: 3 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4F46E5', opacity: 0.8 }} />
                        <div style={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--ff-mono)' }}>DC</div>
                      </div>
                      <div style={{ fontSize: '0.6rem', background: 'rgba(79,70,229,0.3)', border: '1px solid rgba(79,70,229,0.4)', borderRadius: 3, padding: '1px 3px', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--ff-mono)' }}>AD</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: '#a8b4ff', marginBottom: 2 }}>AD Forest</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', color: 'var(--text-muted)' }}>Domain Controllers</div>
              </div>

              {/* Arrow 1 — bidirectional */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 56, flexShrink: 0 }}>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--ff-mono)', marginBottom: 3, whiteSpace: 'nowrap' }}>backs up</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <div style={{ height: 2, width: 18, background: 'rgba(79,70,229,0.6)', borderRadius: 1 }} />
                  <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid rgba(79,70,229,0.6)' }} />
                </div>
              </div>

              {/* Block 2 — ADFR Management Server */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: 'rgba(0,207,255,0.07)',
                border: '1.5px solid rgba(0,207,255,0.4)',
                borderRadius: 'var(--r)',
                padding: '20px 18px',
                minWidth: 155, textAlign: 'center',
                position: 'relative',
              }}>
                {/* ADFR logo area */}
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,207,255,0.12)', border: '1.5px solid rgba(0,207,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, fontSize: '1.5rem' }}>
                  📦
                </div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--semperis)', marginBottom: 2 }}>ADFR Management</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--semperis)', marginBottom: 6 }}>Server</div>
                {/* DB + checkmark icons */}
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>
                  <div style={{ fontSize: '1.1rem' }}>✅</div>
                  <div style={{ fontSize: '1.1rem' }}>🗄️</div>
                </div>
                {/* Fragile warning */}
                <div style={{ marginTop: 10, padding: '4px 8px', background: 'rgba(255,59,85,0.1)', border: '1px solid rgba(255,59,85,0.35)', borderRadius: 4 }}>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.52rem', color: 'var(--danger)', fontWeight: 700 }}>⚠ RUNS ON WINDOWS</div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.5rem', color: 'rgba(255,100,100,0.8)', marginTop: 1 }}>same risk as AD Forest</div>
                </div>
              </div>

              {/* Arrow 2 — triggers */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 64, flexShrink: 0 }}>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--ff-mono)', marginBottom: 3, whiteSpace: 'nowrap' }}>triggers</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <div style={{ height: 2, width: 24, background: 'rgba(0,207,255,0.5)', borderRadius: 1 }} />
                  <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid rgba(0,207,255,0.5)' }} />
                </div>
              </div>

              {/* Block 3 — Cohesity DataProtect */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                border: '2px solid rgba(61,233,122,0.5)',
                borderRadius: 'var(--r)',
                overflow: 'hidden',
                minWidth: 210,
                background: 'rgba(61,233,122,0.04)',
              }}>
                {/* Cohesity header */}
                <div style={{ width: '100%', background: 'rgba(61,233,122,0.1)', borderBottom: '1px solid rgba(61,233,122,0.3)', padding: '10px 14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--safe)', letterSpacing: '0.05em' }}>COHESITY</div>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', color: 'rgba(61,233,122,0.7)', marginTop: 1 }}>DataProtect</div>
                </div>
                {/* Secondary storage workflows */}
                <div style={{ padding: '12px 14px', width: '100%' }}>
                  <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Secondary Storage Workflows</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
                    {[
                      { icon: '🛡️', label: 'Data Protection' },
                      { icon: '🔬', label: 'Dev/Test' },
                      { icon: '📊', label: 'Analytics' },
                      { icon: '📁', label: 'File Services' },
                    ].map(w => (
                      <div key={w.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '1.6rem', marginBottom: 4 }}>{w.icon}</div>
                        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{w.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Storage layers */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {['Storage Services', 'Distributed File System'].map(l => (
                      <div key={l} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 3, padding: '3px 8px', textAlign: 'center', fontFamily: 'var(--ff-mono)', fontSize: '0.52rem', color: 'var(--text-dim)' }}>
                        {l}
                      </div>
                    ))}
                  </div>
                  {/* Hardware tier */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 8 }}>
                    {['💻', '🖥️', '🗄️', '☁️'].map((ic, i) => (
                      <div key={i} style={{ fontSize: '1rem' }}>{ic}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow 3 — writes to */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60, flexShrink: 0 }}>
                <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--ff-mono)', marginBottom: 3, whiteSpace: 'nowrap' }}>writes to</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <div style={{ height: 2, width: 20, background: 'rgba(61,233,122,0.6)', borderRadius: 1 }} />
                  <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid rgba(61,233,122,0.6)' }} />
                </div>
              </div>

              {/* Block 4 — Immutable Storage */}
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                background: 'rgba(61,233,122,0.08)',
                border: '2px solid rgba(61,233,122,0.6)',
                borderRadius: 'var(--r)',
                padding: '20px 18px',
                minWidth: 130, textAlign: 'center',
                boxShadow: '0 0 24px rgba(61,233,122,0.15)',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>🔒</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--safe)', marginBottom: 2 }}>Immutable</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--safe)', marginBottom: 8 }}>Storage</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
                  {['WORM Protected', 'Tamper-proof', 'Air-gap capable'].map(t => (
                    <div key={t} style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.52rem', color: 'rgba(61,233,122,0.9)', background: 'rgba(61,233,122,0.08)', border: '1px solid rgba(61,233,122,0.2)', borderRadius: 3, padding: '2px 6px' }}>
                      ✓ {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Caption */}
            <div style={{ textAlign: 'center', marginTop: 20, fontSize: '0.8rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
              ADFR backs up the AD Forest → Cohesity DataProtect backs up ADFR itself → stored in immutable storage ransomware cannot touch
            </div>
          </div>

          {/* What DataProtect adds */}
          <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9rem', fontWeight: 700, color: '#f0f4ff', marginBottom: 20 }}>
            What Cohesity DataProtect Adds to ADFR
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 32 }}>
            {WHAT_DATAPROTECT_ADDS.map((item, i) => (
              <div key={i} style={{
                background: 'var(--bg-card)',
                border: `1px solid ${item.color}33`,
                borderRadius: 'var(--r)',
                padding: '20px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: item.color }} />
                <div style={{ fontSize: '1.6rem', marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.78rem', fontWeight: 700, color: item.color, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Immutable Storage callout */}
          <div style={{
            padding: '24px 32px',
            background: 'linear-gradient(135deg, rgba(61,233,122,0.08) 0%, rgba(0,207,255,0.05) 100%)',
            border: '1px solid rgba(61,233,122,0.35)',
            borderRadius: 'var(--r)',
            display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: '3rem' }}>🔒</div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--safe)', marginBottom: 8 }}>
                Isolation/Recovery Environment = Immutable Storage
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.65 }}>
                The recovery target is Cohesity's immutable storage — not a Windows-based share.
                Attackers cannot reach, delete, or encrypt it. Recovery data is always available,
                even in a complete AD + Windows compromise scenario.
                Optionally extended to <strong style={{ color: 'var(--semperis)' }}>FortKnox</strong> for air-gapped, offsite resilience.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              {[
                { label: 'Tamper-proof', icon: '✅' },
                { label: 'Air-gap capable', icon: '✅' },
                { label: 'Malware-scanned', icon: '✅' },
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: '0.85rem', color: 'var(--safe)', fontWeight: 600 }}>
                  <span>{b.icon}</span><span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
