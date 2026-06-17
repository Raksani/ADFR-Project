// Steps laid out with deliberate visual chaos to mirror the real-world complexity
const STEPS = [
  // col 1
  { num: 1,  text: 'Pull the network cables from all DCs or otherwise disable network', indent: 0, timed: false, warn: false },
  { num: 2,  text: 'Connect DCs to a private network — establish a global private VLAN', indent: 1, timed: false, warn: false },
  { num: null, label: 'For each domain:' },
  { num: 3,  text: 'Nonauthoritative restore of first writeable DC', indent: 0, timed: false, warn: false, highlight: true },
  { num: 4,  text: 'Auth restore of SYSVOL on that DC', indent: 1, timed: false, warn: false },
  { num: 5,  text: 'Remediate malware', indent: 2, timed: false, warn: true },
  { num: 6,  text: 'Reset all admin account passwords', indent: 1, timed: false, warn: true },
  { num: 7,  text: 'Seize FSMOs', indent: 0, timed: false, warn: false },
  { num: 8,  text: 'Metadata cleanup of all writeable DCs except for targeted seed forest DCs', indent: 1, timed: true, warn: false },
  { num: 9,  text: 'Configure DNS on the forest root DC', indent: 2, timed: false, warn: false },
  { num: 10, text: 'Remove the global catalog from each DC. (Wait for global catalog to be removed)', indent: 1, timed: true, warn: true },
];

const STEPS2 = [
  { num: 11, text: 'Delete DNS NS records of DCs that no longer exist', indent: 0, timed: false, warn: false },
  { num: 12, text: 'Delete DNS SRV records of DCs that no longer exist', indent: 1, timed: false, warn: false },
  { num: 13, text: 'Raise the value of available RID pools by 100K', indent: 0, timed: false, warn: false },
  { num: 14, text: 'Invalidate the current RID pool for every DC', indent: 2, timed: false, warn: true },
  { num: 15, text: 'Reset the computer account of the root DC twice', indent: 1, timed: false, warn: false },
  { num: 16, text: 'Reset krbtgt account twice', indent: 0, timed: false, warn: true, special: 'krbtgt' },
  { num: null, label: '⏳ You now have a seed forest…' },
  { num: 17, text: 'Configure Windows Time', indent: 1, timed: false, warn: false },
  { num: 18, text: 'Add GC to a DC for each OS version in each domain — Wait for GCs to be created', indent: 2, timed: true, warn: true },
  { num: 19, text: 'Take a backup of all DCs in the seed forest', indent: 0, timed: false, warn: false },
  { num: 20, text: 'Create an IFM package for each OS version, in each domain your DCs are running', indent: 1, timed: true, warn: false },
];

const STEPS3 = [
  { num: 21, text: 'Build out seed forest with additional DCs for Tier 0 / Tier 1 operations', indent: 0, timed: true, warn: false },
  { num: null, label: 'For each DC to be repromoted:' },
  { num: 22, text: 'Clean up the (former) DC using /FORCEREMOVAL or rebuild OS', indent: 1, timed: false, warn: true },
  { num: 23, text: 'Send IFM package to server (wait...)', indent: 2, timed: true, warn: false },
  { num: 24, text: 'Take the DC off public network and put it on seed forest network', indent: 1, timed: false, warn: false },
  { num: 25, text: 'Run a DCPROMO IFM — Days pass while you clean and rebuild DCs', indent: 0, timed: true, warn: true },
  { num: null, label: '⏳ Days pass. Basic operations resume…' },
  { num: 26, text: 'Verify health of the full forest', indent: 1, timed: false, warn: false },
  { num: 27, text: 'Move restored forest to the corporate network', indent: 2, timed: false, warn: false },
  { num: 28, text: 'Reboot all servers and clients to force communications with the new forest', indent: 1, timed: true, warn: false },
];

const INDENTS = [0, 14, 28];

function StepCol({ steps }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 28 }}>
      {/* Jagged vertical line — multiple segments with slight gaps to look broken */}
      {[0, 15, 30, 45, 60, 75, 90].map((pct, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: 9 + (i % 3 === 0 ? 1 : i % 3 === 1 ? -1 : 0),
          top: `${pct}%`,
          height: '12%',
          width: 1,
          background: i % 4 === 0
            ? 'rgba(255,59,85,0.4)'
            : i % 3 === 0
              ? 'rgba(255,170,0,0.35)'
              : 'rgba(60,90,170,0.4)',
        }} />
      ))}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {steps.map((s, i) => {
          if (s.num === null) {
            return (
              <div key={i} style={{
                position: 'relative',
                margin: '8px 0 4px',
                padding: '5px 10px',
                background: s.label.startsWith('⏳')
                  ? 'rgba(255,170,0,0.1)'
                  : 'rgba(0,207,255,0.08)',
                border: `1px dashed ${s.label.startsWith('⏳') ? 'rgba(255,170,0,0.4)' : 'rgba(0,207,255,0.3)'}`,
                borderRadius: 4,
              }}>
                <div style={{
                  position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)',
                  width: 8, height: 8, borderRadius: '50%',
                  background: s.label.startsWith('⏳') ? 'var(--warning)' : 'var(--semperis)',
                  boxShadow: `0 0 6px ${s.label.startsWith('⏳') ? 'rgba(255,170,0,0.7)' : 'rgba(0,207,255,0.6)'}`,
                }} />
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.68rem', fontWeight: 700,
                  color: s.label.startsWith('⏳') ? 'var(--warning)' : 'var(--semperis)',
                  letterSpacing: '0.04em',
                }}>{s.label}</span>
              </div>
            );
          }

          const indent = INDENTS[s.indent] || 0;
          const nodeColor = s.warn
            ? 'var(--danger)'
            : s.highlight
              ? 'var(--warning)'
              : 'rgba(60,90,170,0.7)';

          return (
            <div key={i} style={{
              position: 'relative',
              marginLeft: indent,
              padding: `${s.warn ? 7 : 5}px ${s.warn ? 12 : 8}px`,
              background: s.highlight
                ? 'rgba(255,170,0,0.07)'
                : s.warn
                  ? 'rgba(255,59,85,0.04)'
                  : 'transparent',
              border: s.warn
                ? '1px solid rgba(255,59,85,0.2)'
                : s.highlight
                  ? '1px solid rgba(255,170,0,0.25)'
                  : '1px solid transparent',
              borderRadius: 4,
            }}>
              {/* connector dot on line */}
              <div style={{
                position: 'absolute',
                left: -(indent + 20),
                top: '50%', transform: 'translateY(-50%)',
                width: s.warn ? 16 : 14,
                height: s.warn ? 16 : 14,
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: `1.5px solid ${nodeColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.5rem',
                  color: nodeColor, fontWeight: 700, lineHeight: 1,
                }}>{s.num}</span>
              </div>

              {/* horizontal connector from line to box */}
              {indent > 0 && (
                <div style={{
                  position: 'absolute',
                  left: -(indent + 12),
                  top: '50%',
                  width: indent + 4,
                  height: 1,
                  background: `${nodeColor}55`,
                  transform: 'translateY(-50%)',
                }} />
              )}

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                <span style={{ fontSize: '0.77rem', color: 'var(--text)', lineHeight: 1.55, flex: 1 }}>
                  {s.special === 'krbtgt' ? (
                    <>Reset <span style={{ background: 'rgba(255,220,0,0.2)', color: '#ffdd44', padding: '1px 4px', borderRadius: 3, fontFamily: 'var(--ff-mono)', fontSize: '0.72rem' }}>krbtgt</span> account twice</>
                  ) : s.text}
                </span>
                {s.timed && <span style={{ fontSize: '0.75rem', flexShrink: 0, opacity: 0.65, marginTop: 2 }}>⏱</span>}
                {s.warn && <span style={{ fontSize: '0.75rem', flexShrink: 0, opacity: 0.8, marginTop: 2 }}>⚠️</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RecoveryProblem() {
  return (
    <>
      <hr className="section-sep" />
      <section id="recovery-problem">
        <div className="section">
          <div className="section-tag">07 — The Recovery Problem</div>
          <h2 className="section-title">Manual Active Directory Forest Recovery Steps</h2>
          <p className="section-desc">
            Every step executed manually by senior AD engineers — during a full company-wide outage.
            Steps branch, cascade, and block on each other. One mistake and you loop back.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 260px', gap: 28, alignItems: 'start' }}>
            <StepCol steps={STEPS} />
            <StepCol steps={STEPS2} />
            <StepCol steps={STEPS3} />

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(255,170,0,0.3)',
                borderRadius: 'var(--r)',
                padding: '20px 18px',
              }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: 16, textAlign: 'center' }}>
                  Important Considerations
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: 8 }}>⏰</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--danger)' }}>Manual recovery is error-prone</strong> — missteps require additional cycles, extending the timeline even further
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                  <div style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: 8 }}>👥</div>
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--warning)', marginBottom: 8, textAlign: 'center' }}>
                    Required Staff:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                    Core AD team, operators at every datacenter, plus other external support
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { num: '28', label: 'Manual Steps', color: 'var(--danger)' },
                  { num: '149', label: 'Pages of Procedure', color: 'var(--warning)' },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: 'var(--bg-card)', border: `1px solid ${s.color}44`,
                    borderRadius: 'var(--r)', padding: '14px 10px', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', fontWeight: 700, color: s.color }}>{s.num}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Legend</div>
                {[
                  { icon: '⏱', label: 'Time-consuming — blocks next steps' },
                  { icon: '⚠️', label: 'Error-prone — often redone' },
                  { icon: '⏳', label: 'Wait state — full team idle' },
                ].map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, fontSize: '0.78rem', color: 'var(--text-dim)', alignItems: 'center' }}>
                    <span>{l.icon}</span><span>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div style={{
            marginTop: 32,
            display: 'grid', gridTemplateColumns: '1fr auto',
            border: '1px solid rgba(0,207,255,0.3)',
            borderRadius: 'var(--r)', overflow: 'hidden',
          }}>
            <div style={{ padding: '20px 28px', background: 'rgba(255,59,85,0.06)', borderRight: '1px solid rgba(0,207,255,0.2)' }}>
              <span style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.6 }}>
                General purpose backup only automates{' '}
                <strong style={{ color: 'var(--warning)' }}>step 3</strong>,
                leaving the rest of the recovery process a{' '}
                <strong style={{ color: 'var(--danger)' }}>mostly manual effort</strong>
              </span>
            </div>
            <div style={{
              padding: '20px 32px',
              background: 'linear-gradient(135deg, rgba(0,207,255,0.12), rgba(0,207,255,0.06))',
              display: 'flex', alignItems: 'center', gap: 16,
            }}>
              <span style={{ fontSize: '1.6rem' }}>◀</span>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--semperis)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                KEY COMPETITIVE<br />DIFFERENTIATOR
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
