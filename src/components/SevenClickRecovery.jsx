import { useState } from 'react';

const CLICKS = [
  { step: 1, action: 'Click Recover',              desc: 'Initiate the recovery workflow from the ADFR management console' },
  { step: 2, action: 'Start Forest Recovery',      desc: 'ADFR begins orchestrating the full AD forest restoration automatically' },
  { step: 3, action: 'List Backup Sets',           desc: 'System presents available clean backup snapshots with timestamps' },
  { step: 4, action: 'Select Backup Set',          desc: 'Choose the identified last-known-good AD state to recover to' },
  { step: 5, action: 'Click Continue',             desc: 'Confirm selection and proceed to recovery configuration' },
  { step: 6, action: 'Click Continue',             desc: 'Validate target environment and initiate parallel DC rebuild' },
  { step: 7, action: 'Click Start Recovery',       desc: 'ADFR executes automated, malware-free AD forest recovery' },
];

const MANUAL = [
  '29+ manual steps across multiple domain controllers',
  '149-page procedure — generic, not cyber-specific',
  'Requires deep AD expertise from multiple engineers',
  'Hours to days of execution during full company outage',
  'High risk of human error under pressure',
  'No automation — every step done by hand',
];

export default function SevenClickRecovery() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <>
      <hr className="section-sep" />
      <section id="seven-click">
        <div className="section">
          <div className="section-tag">05 — Your Defense Blueprint</div>
          <h2 className="section-title">7-Click Automated AD Recovery</h2>
          <p className="section-desc">
            Semperis ADFR replaces a 29-step manual process requiring multiple AD experts with a 7-click automated recovery
            requiring only 1–2 AD administrators.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {/* ADFR 7-click */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(0,207,255,0.3)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: 'var(--semperis-glow)' }}>
              <div style={{ padding: '20px 24px', background: 'rgba(0,207,255,0.07)', borderBottom: '1px solid rgba(0,207,255,0.2)' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--semperis)' }}>
                  🛡️ ADFR Automated Recovery
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 4 }}>
                  Required staff: Only 1–2 AD admins
                </div>
              </div>
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CLICKS.map((c) => (
                  <div
                    key={c.step}
                    onClick={() => setActiveStep(activeStep === c.step ? null : c.step)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '12px 16px',
                      background: activeStep === c.step ? 'rgba(0,207,255,0.1)' : 'rgba(0,207,255,0.04)',
                      border: `1px solid ${activeStep === c.step ? 'rgba(0,207,255,0.5)' : 'rgba(0,207,255,0.15)'}`,
                      borderRadius: 'var(--r-sm)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'var(--semperis)', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700,
                      flexShrink: 0,
                    }}>
                      {c.step}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.88rem', color: 'var(--semperis)', fontWeight: 600 }}>{c.action}</div>
                      {activeStep === c.step && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 4 }}>{c.desc}</div>
                      )}
                    </div>
                    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                      {activeStep === c.step ? '▲' : '▼'}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(0,207,255,0.15)', background: 'rgba(61,233,122,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.2rem' }}>✅</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--safe)', fontWeight: 600 }}>
                    Fully automated — malware-free — hardware independent
                  </span>
                </div>
              </div>
            </div>

            {/* Manual process */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(255,170,0,0.3)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', background: 'rgba(255,170,0,0.07)', borderBottom: '1px solid rgba(255,170,0,0.2)' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--warning)' }}>
                  🗄️ Manual Process
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 4 }}>
                  Requires multiple senior AD engineers
                </div>
              </div>
              <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {MANUAL.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '10px 14px',
                    background: 'rgba(255,59,85,0.04)',
                    border: '1px solid rgba(255,59,85,0.12)',
                    borderRadius: 'var(--r-sm)',
                  }}>
                    <span style={{ color: 'var(--danger)', fontSize: '0.9rem', flexShrink: 0 }}>✗</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,170,0,0.15)', background: 'rgba(255,59,85,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--danger)', fontWeight: 600 }}>
                    High error risk — executed during full company outage
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison callout */}
          <div style={{
            marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
          }}>
            {[
              { label: 'Steps Required', adfr: '7 clicks', manual: '29+ steps', win: true },
              { label: 'Staff Required', adfr: '1–2 AD admins', manual: 'Multiple engineers', win: true },
              { label: 'Process', adfr: 'Fully automated', manual: 'Fully manual', win: true },
            ].map((row, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '20px 22px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                  {row.label}
                </div>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--semperis)' }}>{row.adfr}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>ADFR</div>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>vs</div>
                  <div>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--warning)' }}>{row.manual}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>Manual</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
